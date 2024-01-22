import { Box, Button, Divider, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { TextInput } from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import AuthStepper from '#/components/auth/AuthForm/AuthStepper'
import { useAuthStepActions } from '#/store/authStepStore'
import { AUTH_STEP, MODAL_TITLE } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/login'
import { useModalActions } from '#/store/modalStore'

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
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <Typography variant="h5">로그인</Typography>
            <Divider />
            <AuthStepper />
            <Typography>아이디, 비밀번호를 입력해 주세요.</Typography>
            <TextInput
                label={'아이디(이메일)'}
                name={'userMail'}
                placeholder={'E-mail'}
                formik={formik}
            />
            <PasswordInput
                label={'비밀번호'}
                name={'password'}
                placeholder={'Password'}
                formik={formik}
            />
            <FlexEndButtonContainer>
                <Button variant="contained" type="submit">
                    로그인
                </Button>
                <Button
                    variant="contained"
                    type="button"
                    onClick={() => openModal(MODAL_TITLE.join)}
                >
                    회원가입
                </Button>
                <Button variant="contained" onClick={handleClickPasswordReset} type="button">
                    비밀번호 초기화
                </Button>
            </FlexEndButtonContainer>
        </Box>
    )
}

export default LoginForm
