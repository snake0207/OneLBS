import CertifiedForm from '#/components/auth/AuthForm/CertifiedForm'
import LoginForm from '#/components/auth/AuthForm/LoginForm'
import PasswordResetForm from '#/components/auth/AuthForm/PasswordResetForm'
import { AUTH_STEP } from '#/contents/constant'
import usePageBack from '#/hooks/usePageBack'
import { useAuthStepActions, useAuthStepState } from '#/store/authStepStore'
import { Box } from '@mui/material'

const AuthFormContainer = () => {
    const { initAuthStep, decreaseAuthStep } = useAuthStepActions()
    const authStep = useAuthStepState()
    usePageBack(authStep === AUTH_STEP.passwordReset ? initAuthStep : decreaseAuthStep)
    return (
        <>
            {authStep === AUTH_STEP.imfomation && <LoginForm />}
            {authStep === AUTH_STEP.certified && <CertifiedForm />}
            {authStep === AUTH_STEP.login && <Box>로그인 완료</Box>}
            {authStep === AUTH_STEP.passwordReset && <PasswordResetForm />}
        </>
    )
}

export default AuthFormContainer
