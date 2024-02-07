import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import { Box, Button, Divider, Link, Typography } from '@mui/material'
import AuthStepper from '#/components/auth/AuthStepper'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import { Icon } from '@mui/material'
import LoginIcon from '#/assets/loginIcon.svg'

import t from '#/common/libs/trans'

import style from './style.module'

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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 5 }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5" sx={style.loginTitle}>
                    LOGIN
                </Typography>
            </Box>
            <AuthStepper />
            <Typography variant="subtitle2" sx={style.subText}>
                {t('guide.otp_registration_guide', 'auth')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ flexShrink: 0, width: 80, height: 80, bgcolor: 'gray' }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography variant="subtitle2" sx={style.cntText}>
                        {t('guide.otp_input_guide', 'auth')}
                    </Typography>
                    <Link href="#" sx={style.linklText}>
                        {t('guide.otp_registration_button', 'auth')}
                    </Link>
                </Box>
            </Box>
            <Typography variant="h6" sx={style.labelText}>
                OTP
            </Typography>
            <TextInput name={'otp'} placeholder={t('placeholder.otp', 'auth')} formik={formik} />
            <FlexEndButtonContainer>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                >
                    {t('certified', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default CertifiedForm
