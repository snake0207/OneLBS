import { useEffect, useState } from 'react'
import useTimerStore from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import {
    Box,
    Button,
    FormHelperText,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material'
import { usePostConfirmEmail } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

// 메일 인증 코드
const ConfirmEmailForm = ({ formik }) => {
    const { time, actions } = useTimerStore()
    const { mutate } = usePostConfirmEmail()
    const [isAuthCompleted, setIsAuthCompleted] = useState(false)

    const handleSubmitEmailCode = () => {
        formik.setFieldTouched('code')
        formik.setFieldTouched('email')
        if (
            formik.values.code &&
            !formik.errors.code &&
            formik.values.email &&
            !formik.errors.email
        ) {
            setIsAuthCompleted(true)
            actions.setTime(null)
            // mutate(
            //     { email: formik.values.email, code: formik.values.code },
            //     {
            //         onSuccess: () => {
            //             setIsAuthCompleted(true)
            //             actions.setTime(null)
            //         },
            //     },
            // )
        }
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

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 1,
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
                {time === 0 ? (
                    <FormHelperText sx={{ ml: 2 }} error>
                        {t('email_code_timeout', 'validation')}
                    </FormHelperText>
                ) : (
                    formik.touched.code &&
                    formik.errors.code && (
                        <FormHelperText sx={{ ml: 2 }} error>
                            {formik.errors.code}
                        </FormHelperText>
                    )
                )}
            </Box>
            <Button
                variant="contained"
                onClick={handleSubmitEmailCode}
                type="button"
                sx={{ flex: '0 0 auto' }}
                disabled={isAuthCompleted}
            >
                {isAuthCompleted
                    ? t('authentication_completed', 'auth')
                    : t('to_authenticate', 'auth')}
            </Button>
        </Box>
    )
}

export default ConfirmEmailForm
