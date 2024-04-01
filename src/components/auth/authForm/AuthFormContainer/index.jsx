import LoginForm from '#/components/auth/authForm/LoginForm'
import { AUTH_STEP } from '#/contents/constant'
import usePageBack from '#/hooks/usePageBack'
import { useAuthStepActions, useAuthStepState } from '#/store/useAuthStepStore'

const AuthFormContainer = () => {
    const { decreaseAuthStep } = useAuthStepActions()
    const authStep = useAuthStepState()
    usePageBack(decreaseAuthStep)

    return <>{authStep === AUTH_STEP.information && <LoginForm />}</>
}

export default AuthFormContainer
