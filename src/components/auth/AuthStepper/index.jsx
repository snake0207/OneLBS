import { useAuthStepState } from '#/store/useAuthStepStore'
import { Step, StepLabel, Stepper } from '@mui/material'

import t from '#/common/libs/trans'

const AuthStepper = () => {
    const authStep = useAuthStepState()
    const steps = [t('input_infomation', 'auth'), t('certified', 'auth'), t('login', 'auth')]
    return (
        <Stepper
            activeStep={authStep}
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
