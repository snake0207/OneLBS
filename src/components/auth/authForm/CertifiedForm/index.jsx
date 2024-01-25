import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import { Box, Button, Divider, Link, Typography } from '@mui/material'
import AuthStepper from '#/components/auth/AuthStepper'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'

const CertifiedForm = () => {
    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: otpSchema,
        onSubmit: (form) => {
            console.log(form)
        },
    })
    return (
        <>
            <Typography variant="h5">로그인</Typography>
            <Divider />
            <AuthStepper />
            <Typography>인증(OTP) 등록 안내</Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ flexShrink: 0, width: 180, height: 180, bgcolor: 'gray' }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography>
                        구글 OTP 앱에서 QR코드를 스캔한 후 발급받은 6자리 숫자를 입력해 주세요.
                    </Typography>
                    <Link href="#">등록방법</Link>
                </Box>
            </Box>
            <Typography variant="h6">OTP</Typography>
            <TextInput name={'otp'} placeholder={'6자리 숫자를 입력해 주세요.'} formik={formik} />
            <FlexEndButtonContainer>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ alignSelf: 'flex-end' }}
                >
                    인증
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default CertifiedForm
