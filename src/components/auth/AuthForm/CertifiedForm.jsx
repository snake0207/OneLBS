import { useFormik } from 'formik'
import { TextInput } from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import { Box, Button, Link, Typography } from '@mui/material'

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
            <Typography>인증(OTP) 등록 안내</Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ flexShrink: 0, width: 180, height: 180, bgcolor: 'gray' }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography>
                        구글 OTP 앱에서 QR코드를 스캔한 후 발급받은 6자리 숫자를 입력해 주세요.
                    </Typography>
                    <Link href="#">등록방법</Link>
                </Box>
            </Box>
            <TextInput
                label={'OTP'}
                name={'otp'}
                placeholder={'6자리 숫자를 입력해 주세요.'}
                formik={formik}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end' }}>
                <Button variant="contained" type="submit" sx={{ alignSelf: 'flex-end' }}>
                    인증
                </Button>
            </Box>
        </Box>
    )
}

export default CertifiedForm
