import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import { Box, Button, Divider, Link, Typography } from '@mui/material'
import AuthStepper from '#/components/auth/AuthStepper'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'

import t from '#/common/libs/trans'

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
            <Typography variant="h5">{t('login', 'auth')}</Typography>
            <Divider />
            <AuthStepper />
            <Typography>{t('guide.otp_registration_guide', 'auth')}</Typography>
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
                    <Typography>{t('guide.otp_input_guide', 'auth')}</Typography>
                    <Link href="#">{t('guide.otp_registration_button', 'auth')}</Link>
                </Box>
            </Box>
            <Typography variant="h6">OTP</Typography>
            <TextInput name={'otp'} placeholder={t('placeholder.otp', 'auth')} formik={formik} />
            <FlexEndButtonContainer>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ alignSelf: 'flex-end' }}
                >
                    {t('certified', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default CertifiedForm
