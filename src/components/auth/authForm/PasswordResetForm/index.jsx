import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import PasswordInput from '#/components/common/input/PasswordInput'
import { TextInput } from '#/components/common/input/TextInput'
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
            <Box
                component={'form'}
                onSubmit={formik.handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
            >
                <TextInput
                    formik={formik}
                    label={'이메일'}
                    name={'userMail'}
                    placeholder={'E-mail'}
                />
                <PasswordInput
                    formik={formik}
                    label={'비밀번호'}
                    name={'password'}
                    placeholder={'Password'}
                    inputRule={'6~16자 이내 영문대문자, 숫자, 특수문자가 반드시 포함되야 합니다.'}
                />
                <PasswordInput
                    formik={formik}
                    label={'비밀번호 확인'}
                    name={'confirmPassword'}
                    placeholder={'Password'}
                />
                <TextInput
                    formik={formik}
                    label={'OTP'}
                    name={'otp'}
                    placeholder={'6자리 숫자를 입력해 주세요.'}
                />
                <FlexEndButtonContainer>
                    <Button variant="contained" type="submit" sx={{ alignSelf: 'flex-end' }}>
                        비밀번호 초기화
                    </Button>
                </FlexEndButtonContainer>
            </Box>
        </>
    )
}

export default PasswordResetForm
