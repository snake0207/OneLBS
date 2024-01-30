import { Button, Divider, Typography } from '@mui/material'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import AuthStepper from '#/components/auth/AuthStepper'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { AUTH_STEP, MODAL_TITLE } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/auth'
import { useModalActions } from '#/store/useModalStore'

import t from '#/common/libs/trans'

const LoginForm = () => {
    const { changeAuthStep } = useAuthStepActions()
    const { openModal } = useModalActions()
    const { mutate } = usePostLogin()

    const formik = useFormik({
        initialValues: {
            userMail: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (form) => {
            console.log(form)
            // mutate(form)
            changeAuthStep(AUTH_STEP.certified)
        },
    })

    const handleClickPasswordReset = () => {
        changeAuthStep(AUTH_STEP.passwordReset)
    }

    return (
        <>
            <Typography variant="h5">{t('login', 'auth')}</Typography>
            <Divider />
            <AuthStepper />
            <Typography>{t('guide.login_input_guide', 'auth')}</Typography>
            <Typography variant="h6">{t('email', 'auth')}</Typography>
            <TextInput
                name={'userMail'}
                placeholder={t('placeholder.email', 'auth')}
                formik={formik}
            />
            <Typography variant="h6">{t('password', 'auth')}</Typography>
            <PasswordInput
                name={'password'}
                placeholder={t('placeholder.password', 'auth')}
                formik={formik}
            />
            <FlexEndButtonContainer>
                <Button variant="contained" onClick={formik.handleSubmit}>
                    {t('login', 'auth')}
                </Button>
                <Button
                    variant="contained"
                    type="button"
                    onClick={() => openModal(MODAL_TITLE.join)}
                >
                    {t('join', 'auth')}
                </Button>
                <Button variant="contained" onClick={handleClickPasswordReset} type="button">
                    {t('reset_password', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default LoginForm
