import { useEffect } from 'react'
import useTimerStore from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { EmailCodeSchema } from '#/contents/validationSchema'
import { usePostConfirmEmail } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

// 메일 인증 코드
const ConfirmEmailForm = ({ formik }) => {
    const { time, actions } = useTimerStore()
    const { mutate } = usePostConfirmEmail()

    const codeFormik = useFormik({
        initialValues: { code: '' },
        validationSchema: EmailCodeSchema,
        onSubmit: (form) => {
            formik.setFieldTouched('email')
            if (formik.values.email && !formik.errors.email) {
                console.log({ email: formik.values.email, ...form })
                mutate({ email: formik.values.email, ...form })
            }
        },
    })

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
                height: 60,
            }}
        >
            <TextField
                name="code"
                value={codeFormik.values.code}
                onChange={codeFormik.handleChange}
                onBlur={codeFormik.handleBlur}
                error={codeFormik.touched.code && !!codeFormik.errors.code}
                fullWidth
                size="small"
                type="text"
                placeholder={t('placeholder.confirm_email', 'auth')}
                helperText={codeFormik.touched.code && codeFormik.errors.code}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ gap: 2 }}>
                            {codeFormik.values.code && (
                                <IconButton
                                    edge="end"
                                    onClick={() => codeFormik.setFieldValue('code', '')}
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
                onClick={codeFormik.handleSubmit}
                type="button"
                sx={{ flex: '0 0 auto' }}
            >
                {t('to_authenticate', 'auth')}
            </Button>
        </Box>
    )
}

export default ConfirmEmailForm
