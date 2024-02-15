import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, TextField, Typography, Icon } from '@mui/material'
import { BrowserView } from 'react-device-detect'
import CopyToClipboard from 'react-copy-to-clipboard'
import LoginIcon from '#/assets/loginIcon.svg'
import TextInput from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import AuthStepper from '#/components/auth/AuthStepper'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import OtpGuideModal from '#/components/auth/authForm/CertifiedForm/otpGuideModal'

import t from '#/common/libs/trans'

import style from './style.module'

const CertifiedForm = () => {
    const [isOtpGuideOpen, setIsOtpGuideOpen] = useState(false)

    const handleClickOtpGuideClose = () => {
        setIsOtpGuideOpen(false)
    }

    const handleClickOtpGuideOpen = () => {
        setIsOtpGuideOpen(true)
    }

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
            <BrowserView>
                <AuthStepper />
            </BrowserView>
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
                    <Typography variant="subtitle2" sx={style.contentText}>
                        {t('guide.otp_input_guide', 'auth')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <TextField size="small" value={'123123'} />
                        <CopyToClipboard text="123123">
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: 'button.gray',
                                    '&:hover': {
                                        backgroundColor: 'button.gray',
                                    },
                                }}
                            >
                                {t('copy', 'auth')}
                            </Button>
                        </CopyToClipboard>
                    </Box>
                    <Button onClick={handleClickOtpGuideOpen} sx={style.linklText}>
                        {t('guide.otp_registration_button', 'auth')}
                    </Button>
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
            <OtpGuideModal isOpen={isOtpGuideOpen} handleClose={handleClickOtpGuideClose} />
        </>
    )
}

export default CertifiedForm
