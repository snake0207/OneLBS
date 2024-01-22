import { useAuthStepState } from '#/store/authStepStore'
import { Step, StepLabel, Stepper } from '@mui/material'

const AuthStepper = () => {
    const authProcess = useAuthStepState()
    const steps = ['정보입력', '인증', '로그인']
    return (
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
    )
}

export default AuthStepper
