import CertifiedForm from '#/pages/LoginPage/AuthForm/CertifiedForm'
import LoginForm from '#/pages/LoginPage/AuthForm/LoginForm'
import { AUTH_PROCESS } from '#/contents/constant'
import { useAuthProcessState } from '#/store/authProcessStore'
import { Box, Divider, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'

const AuthFormContainer = () => {
    const authProcess = useAuthProcessState()
    const steps = ['정보입력', '인증', '로그인']
    return (
        <Stack sx={{ p: 4 }}>
            <Box>
                <Typography variant="h5">로그인</Typography>
                <Divider />
            </Box>
            <Stepper
                activeStep={authProcess}
                alternativeLabel
                nonLinear
                sx={{ height: 120, alignItems: 'center' }}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ display: 'flex', flex: '1 1 auto', height: 400 }}>
                {authProcess === AUTH_PROCESS.imfomation && <LoginForm />}
                {authProcess === AUTH_PROCESS.certified && <CertifiedForm />}
            </Box>
        </Stack>
    )
}

export default AuthFormContainer
