import { useAuthStepState } from '#/store/useAuthStepStore'
import { Step, StepLabel, Stepper } from '@mui/material'

import t from '#/common/libs/trans'

const AuthStepper = () => {
    const authStep = useAuthStepState()
    const steps = [`1.${t('input_infomation', 'auth')}`, t('certified', 'auth'), t('login', 'auth')]
    return (
        <Stepper
            activeStep={authStep}
            alternativeLabel
            nonLinear
            sx={{ alignItems: 'center', mb: 3.8, fontSize: 58 }}
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
