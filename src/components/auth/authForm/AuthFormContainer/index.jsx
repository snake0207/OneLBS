import CertifiedForm from '#/components/auth/authForm/CertifiedForm'
import LoginForm from '#/components/auth/authForm/LoginForm'
import PasswordResetForm from '#/components/auth/authForm/PasswordResetForm'
import { AUTH_STEP } from '#/contents/constant'
import usePageBack from '#/hooks/usePageBack'
import { useAuthStepActions, useAuthStepState } from '#/store/authStepStore'
import { Box, Stack } from '@mui/material'

const AuthFormContainer = () => {
    const { initAuthStep, decreaseAuthStep } = useAuthStepActions()
    const authStep = useAuthStepState()
    usePageBack(authStep === AUTH_STEP.passwordReset ? initAuthStep : decreaseAuthStep)
    return (
        <Stack sx={{ p: 4, height: '100%' }}>
            {authStep === AUTH_STEP.imfomation && <LoginForm />}
            {authStep === AUTH_STEP.certified && <CertifiedForm />}
            {authStep === AUTH_STEP.login && <Box>로그인 완료</Box>}
            {authStep === AUTH_STEP.passwordReset && <PasswordResetForm />}
        </Stack>
    )
}

export default AuthFormContainer
