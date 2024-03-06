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
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'

import style from './style.module'
import { usePostConfirmEmail, usePostEmailVerify } from '#/hooks/queries/auth'
import { LoadingButton } from '@mui/lab'

const EmailAuthForm = () => {
    const { time, actions } = useTimerStore()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isReSend, setIsReSend] = useState(false)
    const [isAuthCompleted, setIsAuthCompleted] = useState(false)
    const { mutate: emailVerifyMutate, isPending: isEmailVerifyPending } = usePostEmailVerify()
    const { mutate: confirmEmailMutate, isPending: isConfirmEmailPending } = usePostConfirmEmail()

    const formik = useFormik({
        initialValues: {
            email: '',
            code: '',
        },
        validationSchema: emailAuthSchema,
        onSubmit: (form) => {
            confirmEmailMutate(form, {
                onSuccess: () => {
                    setIsAuthCompleted(true)
                    actions.reset()
                },
            })
        },
    })

    const handleClickSendEmail = () => {
        emailVerifyMutate(
            { email: formik.values.email },
            {
                onSuccess: () => {
                    setIsButtonDisabled(true)
                    setIsReSend(true)
                    actions.setTime(180)
                },
            },
        )
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5" sx={style.loginTitle}>
                    {t('email_auth', 'auth')}
                </Typography>
            </Box>
            <Typography sx={style.labelText}>{t('email', 'auth')}</Typography>
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
                    disabled={isButtonDisabled}
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
                <LoadingButton
                    loading={isEmailVerifyPending}
                    variant="contained"
                    onClick={handleClickSendEmail}
                    type="button"
                    disabled={isButtonDisabled}
                    sx={{
                        flex: '0 0 auto',
                        bgcolor: 'button.gray',
                        '&:hover': {
                            backgroundColor: 'button.gray',
                        },
                    }}
                >
                    {isReSend ? t('re_send_mail', 'auth') : t('send_mail_certified', 'auth')}
                </LoadingButton>
            </Box>
            {customEmailHelperText()}
            <Typography sx={style.labelText}>{t('email_confirm_code', 'auth')}</Typography>
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
                <LoadingButton
                    loading={isConfirmEmailPending}
                    variant="contained"
                    onClick={formik.handleSubmit}
                    type="button"
                    disabled={isAuthCompleted}
                    sx={{
                        flex: '0 0 auto',
                        bgcolor: 'button.gray',
                        '&:hover': {
                            backgroundColor: 'button.gray',
                        },
                    }}
                >
                    {isAuthCompleted
                        ? t('authentication_completed', 'auth')
                        : t('to_authenticate', 'auth')}
                </LoadingButton>
            </Box>
            {customCodeHelperText()}
            <FlexEndButtonContainer>
                <Button
                    variant="contained"
                    sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                >
                    {t('certified', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default EmailAuthForm
