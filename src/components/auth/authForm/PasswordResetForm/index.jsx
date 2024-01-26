import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { Box, Button, Divider, Typography } from '@mui/material'
import { useFormik } from 'formik/dist'

const PasswordResetForm = () => {
    const formik = useFormik({
        initialValues: {
            userMail: '',
            password: '',
            confirmPassword: '',
            otp: '',
        },
        onSubmit: (form) => {
            console.log(form)
        },
    })
    return (
        <>
            <Typography variant="h5">비밀번호 초기화</Typography>
            <Divider />
            <Typography variant="h6">이메일</Typography>
            <TextInput formik={formik} name={'userMail'} placeholder={'E-mail'} />
            <Typography variant="h6">비밀번호</Typography>
            <PasswordInput
                formik={formik}
                name={'password'}
                placeholder={'Password'}
                inputRule={'6~16자 이내 영문대문자, 숫자, 특수문자가 반드시 포함되야 합니다.'}
            />
            <Typography variant="h6">비밀번호 확인</Typography>
            <PasswordInput formik={formik} name={'confirmPassword'} placeholder={'Password'} />
            <Typography variant="h6">OTP</Typography>
            <TextInput formik={formik} name={'otp'} placeholder={'6자리 숫자를 입력해 주세요.'} />
            <FlexEndButtonContainer>
                <Button variant="contained" onClick={formik.handleSubmit}>
                    비밀번호 초기화
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default PasswordResetForm
