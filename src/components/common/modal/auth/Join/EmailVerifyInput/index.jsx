import { useTimeActions } from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'

import t from '#/common/libs/trans'
import { usePostEmailVerify } from '#/hooks/queries/auth'

const EmailVerifyInput = ({ name, formik }) => {
    const { mutate } = usePostEmailVerify()
    const { setTime } = useTimeActions()

    const handleClickSendEmail = () => {
        if (!formik.errors[name]) console.log(formik.values[name])
        mutate({ email: formik.values[name] })
        setTime(180)
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
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && !!formik.errors[name]}
                fullWidth
                size="small"
                type="text"
                placeholder={t('placeholder.email', 'auth')}
                helperText={formik.touched[name] && formik.errors[name]}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {formik.values[name] && (
                                <IconButton
                                    edge="end"
                                    onClick={() => formik.setFieldValue(name, '')}
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

export default EmailVerifyInput
