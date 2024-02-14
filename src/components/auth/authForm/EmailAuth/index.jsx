import { useEffect, useState } from 'react'
import {
    Box,
    Button,
    FormHelperText,
    Icon,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { Close } from '@mui/icons-material'
import LoginIcon from '#/assets/loginIcon.svg'

import t from '#/common/libs/trans'
import useTimerStore from '#/store/useTimerStore'
import { emailAuthSchema } from '#/contents/validationSchema'

const EmailAuthForm = () => {
    const { time, actions } = useTimerStore()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isReSend, setIsReSend] = useState(false)
    const [isAuthCompleted, setIsAuthCompleted] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            code: '',
        },
        validationSchema: emailAuthSchema,
        onSubmit: (form) => {
            console.log(form)
            setIsAuthCompleted(true)
        },
    })

    const handleClickSendEmail = () => {
        setIsButtonDisabled(true)
        setIsReSend(true)
        actions.setTime(180)
    }

    const customEmailHelperText = () => {
        if (isButtonDisabled)
            return (
                <FormHelperText sx={{ ml: 2 }}>{t('email_code_send', 'validation')}</FormHelperText>
            )

        if (formik.touched.email && formik.errors.email)
            return (
                <FormHelperText error sx={{ ml: 2 }}>
                    {formik.errors.email}
                </FormHelperText>
            )
    }

    const customCodeHelperText = () => {
        if (isAuthCompleted)
            return (
                <FormHelperText sx={{ ml: 2 }}>
                    {t('email_code_complete', 'validation')}
                </FormHelperText>
            )

        if (time === 0)
            return (
                <FormHelperText sx={{ ml: 2 }} error>
                    {t('email_code_timeout', 'validation')}
                </FormHelperText>
            )

        if (formik.touched.code && formik.errors.code)
            return (
                <FormHelperText sx={{ ml: 2 }} error>
                    {formik.errors.code}
                </FormHelperText>
            )
    }

    useEffect(() => {
        let timer
        if (time > 0) {
            timer = setInterval(() => {
                if (time > 0) actions.decreseTime()
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [time])

    useEffect(() => {
        actions.reset()
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 5 }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5">{t('email_auth', 'auth')}</Typography>
            </Box>
            <Typography>{t('email', 'auth')}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 1,
                }}
            >
                <TextField
                    name={'email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && !!formik.errors.email}
                    fullWidth
                    size="small"
                    type="text"
                    placeholder={t('placeholder.email', 'auth')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {formik.values.email && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue('email', '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleClickSendEmail}
                    type="button"
                    disabled={isButtonDisabled}
                    sx={{ flex: '0 0 auto' }}
                >
                    {isReSend ? t('re_send_mail', 'auth') : t('send_mail_certified', 'auth')}
                </Button>
            </Box>
            {customEmailHelperText()}
            <Typography>{t('email_confirm_code', 'auth')}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 1,
                }}
            >
                <TextField
                    name="code"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.code && !!formik.errors.code}
                    fullWidth
                    size="small"
                    type="text"
                    placeholder={t('placeholder.confirm_email', 'auth')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" sx={{ gap: 2 }}>
                                {formik.values.code && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue('code', '')}
                                    >
                                        <Close />
                                    </IconButton>
                                )}
                                {time !== null && (
                                    <Typography>
                                        {parseInt(time / 60)}:
                                        {parseInt(time % 60)
                                            .toString()
                                            .padStart(2, 0)}
                                    </Typography>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    type="button"
                    disabled={isAuthCompleted}
                    sx={{ flex: '0 0 auto' }}
                >
                    {isAuthCompleted
                        ? t('authentication_completed', 'auth')
                        : t('to_authenticate', 'auth')}
                </Button>
            </Box>
            {customCodeHelperText()}
        </>
    )
}

export default EmailAuthForm
