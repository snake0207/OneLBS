import { useEffect, useState } from 'react'
import { useTimeActions, useTimeState } from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material'
import { usePostEmailVerify } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

import style from './style.module'

// 인증 메일 전송
const VerifyEmailForm = ({ formik }) => {
    const { mutate } = usePostEmailVerify()
    const { setTime } = useTimeActions()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [isReSend, setIsReSend] = useState(false)
    const time = useTimeState()

    const handleClickSendEmail = () => {
        formik.setFieldTouched('email')
        if (formik.values.email && !formik.errors.email) {
            setIsButtonDisabled(true)
            setTime(180)
            // mutate(
            //     { email: formik.values.email },
            //     {
            //         onSuccess: () => {
            //             setIsButtonDisabled(true)
            //             setTime(180)
            //         },
            //     },
            // )
        }
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
                {isButtonDisabled ? (
                    <FormHelperText sx={{ ml: 2 }}>
                        {t('email_code_send', 'validation')}
                    </FormHelperText>
                ) : (
                    formik.touched.email &&
                    formik.errors.email && (
                        <FormHelperText sx={{ ml: 2 }} error>
                            {formik.errors.email}
                        </FormHelperText>
                    )
                )}
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
