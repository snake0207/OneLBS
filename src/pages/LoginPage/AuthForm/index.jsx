import CertifiedForm from '#/pages/LoginPage/AuthForm/CertifiedForm'
import LoginForm from '#/pages/LoginPage/AuthForm/LoginForm'
import { LOGIN_PROCESS } from '#/contents/constant'
import { useLoginProcessState } from '#/store/authProcessStore'
import { Box, Divider, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'

const LoginFormContainer = () => {
    const loginProcess = useLoginProcessState()
    const steps = ['정보입력', '인증', '로그인']
    return (
        <Stack sx={{ p: 4 }}>
            <Box>
                <Typography variant="h5">로그인</Typography>
                <Divider />
            </Box>
            <Stepper alternativeLabel nonLinear sx={{ height: 120, alignItems: 'center' }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {/* 고려 중인 코드 */}
            {/* <Stack
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 120,
                    px: 4,
                }}
            >
                {steps.map((label, idx) => (
                    <Stack
                        key={idx}
                        isProcess={loginProcess === LOGIN_PROCESS.imfomation}
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            width: 80,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                bgcolor: 'lightgray',
                                borderRadius: '50%',
                            }}
                        >
                            {idx + 1}
                        </Box>
                        <Typography>{label}</Typography>
                    </Stack>
                ))}
            </Stack> */}
            <Box sx={{ display: 'flex', flex: '1 1 auto', height: 400 }}>
                {loginProcess === LOGIN_PROCESS.imfomation && <LoginForm />}
                {loginProcess === LOGIN_PROCESS.certified && <CertifiedForm />}
            </Box>
        </Stack>
    )
}

export default LoginFormContainer
