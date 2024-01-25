import useTimerStore from '#/store/useTimerStore'
import Close from '@mui/icons-material/Close'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'

const VerifyCodeInput = ({ name, formik }) => {
    const { time, actions } = useTimerStore()
    const handleClickSendVerifyCode = () => {
        if (!formik.errors.emailverifyCode) console.log(formik.values.emailverifyCode)
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
        <Box sx={{ my: 1 }}>
            <Typography variant="h6">
                <span style={{ color: 'red' }}>*</span>
                메일인증코드
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
                    placeholder={'인증코드를 입력해 주세요'}
                    helperText={formik.touched[name] && formik.errors[name]}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" sx={{ gap: 2 }}>
                                {formik.values[name] && (
                                    <IconButton
                                        edge="end"
                                        onClick={() => formik.setFieldValue(name, '')}
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
                    onClick={handleClickSendVerifyCode}
                    type="button"
                    sx={{ flex: '0 0 auto' }}
                >
                    인증하기
                </Button>
            </Box>
        </Box>
    )
}

export default VerifyCodeInput
