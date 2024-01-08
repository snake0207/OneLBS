import { useState } from 'react'
import { useFormik } from 'formik'
import JoinModal from '#/components/loginContainer/modal/JoinModal'
import { TextInput } from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import { useLoginProcessActions } from '#/store/loginProcessStore'
import { LOGIN_PROCESS } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/login'
import * as S from '../styled'

const LoginForm = () => {
    const { changeLoginProcess } = useLoginProcessActions()
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
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
            changeLoginProcess(LOGIN_PROCESS.CERTIFIED)
        },
    })
    return (
        <S.FormContainer onSubmit={formik.handleSubmit}>
            <S.MediumText>아이디, 비밀번호를 입력해 주세요.</S.MediumText>
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
            <S.ActionContainer>
                <S.MediumText>서비스 이용을 위해 회원가입해 주세요.</S.MediumText>
                <S.Actions>
                    <S.Button type="submit">로그인</S.Button>
                    <S.Button onClick={() => setIsJoinModalOpen(true)} type="button">
                        회원가입
                    </S.Button>
                </S.Actions>
            </S.ActionContainer>
            <JoinModal isJoinModalOpen={isJoinModalOpen} setIsJoinModalOpen={setIsJoinModalOpen} />
        </S.FormContainer>
    )
}

export default LoginForm
