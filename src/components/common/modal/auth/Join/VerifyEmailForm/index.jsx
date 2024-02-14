import { useEffect, useState } from 'react'
import useTimerStore from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material'
import { usePostEmailVerify } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

import style from './style.module'

// 인증 메일 전송
const VerifyEmailForm = ({ formik }) => {
    const { mutate } = usePostEmailVerify()
    const { time, actions } = useTimerStore()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isReSend, setIsReSend] = useState(false)

    const handleClickSendEmail = () => {
        formik.setFieldTouched('email')
        if (formik.values.email && !formik.errors.email) {
            setIsButtonDisabled(true)
            actions.setTime(180)
            // mutate(
            //     { email: formik.values.email },
            //     {
            //         onSuccess: () => {
            //             setIsButtonDisabled(true)
            //             action.setTime(180)
            //         },
            //     },
            // )
        }
    }

    const customHelperText = () => {
        if (isButtonDisabled)
            return (
                <FormHelperText sx={{ ml: 2 }}>{t('email_code_send', 'validation')}</FormHelperText>
            )

        if (formik.touched.email && formik.errors.email)
            return (
                <FormHelperText sx={{ ml: 2 }} error>
                    {formik.errors.email}
                </FormHelperText>
            )
    }

    useEffect(() => {
        if (time === 0) {
            setIsButtonDisabled(false)
            setIsReSend(true)
        }
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
                {customHelperText()}
            </Box>
            <Button
                variant="contained"
                onClick={handleClickSendEmail}
                type="button"
                sx={style.btn}
                disabled={isButtonDisabled}
            >
                {isReSend ? t('re_send_mail', 'auth') : t('send_mail_certified', 'auth')}
            </Button>
        </Box>
    )
}

export default VerifyEmailForm
