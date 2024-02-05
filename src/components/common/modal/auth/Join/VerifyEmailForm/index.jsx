import { useTimeActions } from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { usePostEmailVerify } from '#/hooks/queries/auth'

import t from '#/common/libs/trans'

// 인증 메일 전송
const VerifyEmailForm = ({ formik }) => {
    const { mutate } = usePostEmailVerify()
    const { setTime } = useTimeActions()

    const handleClickSendEmail = () => {
        formik.setFieldTouched('email')
        if (formik.values.email && !formik.errors.email) {
            mutate({ email: formik.values[name] })
            setTime(180)
        }
    }

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
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && !!formik.errors.email}
                fullWidth
                size="small"
                type="text"
                placeholder={t('placeholder.email', 'auth')}
                helperText={formik.touched.email && formik.errors.email}
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
                sx={{ flex: '0 0 auto' }}
            >
                {t('send_mail_certified', 'auth')}
            </Button>
        </Box>
    )
}

export default VerifyEmailForm
