import CertifiedForm from '#/components/auth/authForm/CertifiedForm'
import EmailAuthForm from '#/components/auth/authForm/EmailAuthForm'
import LoginForm from '#/components/auth/authForm/LoginForm'
import PasswordResetForm from '#/components/auth/authForm/PasswordResetForm'
import { AUTH_STEP } from '#/contents/constant'
import usePageBack from '#/hooks/usePageBack'
import { useAuthStepActions, useAuthStepState } from '#/store/useAuthStepStore'
import { Box } from '@mui/material'

const AuthFormContainer = () => {
    const { initAuthStep, decreaseAuthStep } = useAuthStepActions()
    const authStep = useAuthStepState()
    usePageBack(
        authStep === (AUTH_STEP.passwordReset || AUTH_STEP.emailAuth)
            ? initAuthStep
            : decreaseAuthStep,
    )
    return (
        <>
            {authStep === AUTH_STEP.information && <LoginForm />}
            {authStep === AUTH_STEP.certified && <CertifiedForm />}
            {authStep === AUTH_STEP.login && <Box>로그인 완료</Box>}
            {authStep === AUTH_STEP.passwordReset && <PasswordResetForm />}
            {authStep === AUTH_STEP.emailAuth && <EmailAuthForm />}
        </>
    )
}

export default AuthFormContainer
