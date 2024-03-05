import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useFormik } from 'formik'
import { Box, Button, TextField, Typography, Icon } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import TextInput from '#/components/common/input/TextInput'
import { otpSchema } from '#/contents/validationSchema'
import AuthStepper from '#/components/auth/AuthStepper'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import OtpGuideModal from '#/components/auth/authForm/CertifiedForm/otpGuideModal'
import { usePostVerifyOtp } from '#/hooks/queries/auth'
import useOtpStore from '#/store/useOtpStore'
import { useAuthActions } from '#/store/useAuthStore'
import { useUserActions } from '#/store/useUserStore'

import t from '#/common/libs/trans'

import style from './style.module'
import LoginIcon from '#/assets/loginIcon.svg'

const CertifiedForm = () => {
    const [isOtpGuideOpen, setIsOtpGuideOpen] = useState(false)
    const { mutate, isPending } = usePostVerifyOtp()
    const { twoFactorAuth, secretKey, twoFactorSecret, qrCodeUrl } = useOtpStore()
    const { setAccessToken } = useAuthActions()
    const { setUserStore } = useUserActions()
    const navigate = useNavigate()

    const handleClickOtpGuideClose = () => {
        setIsOtpGuideOpen(false)
    }

    const handleClickOtpGuideOpen = () => {
        setIsOtpGuideOpen(true)
    }

    const formik = useFormik({
        initialValues: {
            code: '',
        },
        validationSchema: otpSchema,
        onSubmit: (form) => {
            mutate(
                { ...form, twoFactorSecret },
                {
                    onSuccess: ({
                        data: {
                            data: { accessToken, permissions, pwChangeRequired, userId },
                        },
                    }) => {
                        setAccessToken(accessToken)
                        setUserStore(userId, permissions, pwChangeRequired)
                        navigate('/')
                    },
                },
            )
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
            {twoFactorAuth === 'N' && (
                <>
                    <Typography variant="subtitle2" sx={style.subText}>
                        {t('guide.otp_registration_guide', 'auth')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <img
                            src={qrCodeUrl}
                            style={{
                                flexShrink: 0,
                                width: 80,
                                height: 80,
                                backgroundColor: 'white',
                            }}
                        />
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
                                <TextField size="small" value={secretKey} />
                                <CopyToClipboard text={secretKey}>
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
                </>
            )}
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h6" sx={style.labelText}>
                    OTP
                </Typography>
                <TextInput
                    name={'code'}
                    placeholder={t('placeholder.otp', 'auth')}
                    formik={formik}
                />
                <FlexEndButtonContainer>
                    <LoadingButton
                        loading={isPending}
                        variant="contained"
                        type="submit"
                        sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                    >
                        {t('certified', 'auth')}
                    </LoadingButton>
                </FlexEndButtonContainer>
            </form>
            <OtpGuideModal isOpen={isOtpGuideOpen} handleClose={handleClickOtpGuideClose} />
        </>
    )
}

export default CertifiedForm
