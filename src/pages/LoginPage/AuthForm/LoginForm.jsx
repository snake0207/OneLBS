import { Box, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { TextInput } from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import { useLoginProcessActions } from '#/store/authProcessStore'
import { LOGIN_PROCESS, MODAL_TITLE } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/login'
import { useModalActions } from '#/store/modalStore'

const LoginForm = () => {
    const { changeLoginProcess } = useLoginProcessActions()
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
            mutate(form)
            changeLoginProcess(LOGIN_PROCESS.certified)
        },
    })
    return (
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: '1 1 auto',
            }}
        >
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: 110,
                }}
            >
                <Typography>서비스 이용을 위해 회원가입해 주세요.</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button variant="contained" type="submit">
                        로그인
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => openModal(MODAL_TITLE.join)}
                        type="button"
                    >
                        회원가입
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginForm
