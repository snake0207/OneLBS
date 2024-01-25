import { useTimeActions } from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

const EmailSubmitInput = ({ name, formik }) => {
    const { setTime } = useTimeActions()
    const handleClickSendEmail = () => {
        if (!formik.errors[name]) console.log(formik.values[name])
        setTime(180)
    }
    return (
        <Box sx={{ my: 1 }}>
            <Typography variant="h6">
                <span style={{ color: 'red' }}>*</span>
                이메일
            </Typography>
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
                    placeholder={'이메일을 입력하세요'}
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
                    인증메일전송
                </Button>
            </Box>
        </Box>
    )
}

export default EmailSubmitInput
