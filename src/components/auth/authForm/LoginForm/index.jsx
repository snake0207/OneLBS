import { useState } from 'react'
import { BrowserView, isBrowser, isMobile } from 'react-device-detect'
import { useFormik } from 'formik'
import { Button, Typography, Box } from '@mui/material'
import { Icon } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import AuthStepper from '#/components/auth/AuthStepper'
import JoinModal from '#/components/auth/authForm/joinForm/JoinModal'
import { AUTH_STEP } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/auth'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { getLayoutState } from '#/store/useLayoutStore'
import useOtpStore from '#/store/useOtpStore'

import {
    encryptPasswordBase64WithTime,
    encryptPasswordSHA256,
    encryptPasswordSHA256WithTime,
} from '#/common/libs/encode'
import t from '#/common/libs/trans'

import style from './style.module'
import LoginIcon from '#/assets/loginIcon.svg'
import LoginIconDark from '#/assets/loginIconDark.svg'

const LoginForm = () => {
    const { changeAuthStep } = useAuthStepActions()
    const { mutate, isPending } = usePostLogin()
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false)
    const {
        actions: { setOtpStore, setTwoFactorSecret, setTwoFactorAuth },
    } = useOtpStore()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (form) => {
            const password = encryptPasswordBase64WithTime(
                encryptPasswordSHA256WithTime(encryptPasswordSHA256(form.password)),
            )
            mutate(
                { ...form, password },
                {
                    onSuccess: ({
                        data: {
                            data: { twoFactorAuth, twoFactorSecret, secretKey, qrCodeUrl },
                        },
                    }) => {
                        if (twoFactorAuth === 'Y') {
                            setTwoFactorSecret(twoFactorSecret)
                            setTwoFactorAuth(twoFactorAuth)
                        } else if (twoFactorAuth === 'N') {
                            setOtpStore(twoFactorAuth, secretKey, twoFactorSecret, qrCodeUrl)
                        }
                        changeAuthStep(AUTH_STEP.certified)
                    },
                },
            )
        },
    })

    const handleClickPasswordReset = () => {
        changeAuthStep(AUTH_STEP.passwordReset)
    }

    const handleClickJoin = () => {
        if (isBrowser) setIsOpenJoinModal(true)

        if (isMobile) changeAuthStep(AUTH_STEP.join)
    }

    const handleCloseJoinModal = () => {
        setIsOpenJoinModal(false)
    }
    const { themeMode } = getLayoutState()

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 5 }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    {themeMode === 'light' ? (
                        <img
                            src={LoginIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                    ) : (
                        <img
                            src={LoginIconDark}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                        />
                    )}
                </Icon>
                <Typography variant="h5" sx={style.loginTitle}>
                    LOGIN
                </Typography>
            </Box>
            <BrowserView>
                <AuthStepper />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Typography sx={{ color: 'red' }}>*</Typography>
                    <Typography variant="subtitle2" sx={style.subText}>
                        {t('guide.login_input_guide', 'auth')}
                    </Typography>
                </Box>
            </BrowserView>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h6" sx={style.labelText}>
                    {t('email', 'auth')}
                </Typography>
                <TextInput
                    name={'email'}
                    placeholder={t('placeholder.email', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6" sx={style.labelText}>
                    {t('password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'password'}
                    placeholder={t('placeholder.password', 'auth')}
                    formik={formik}
                />
                <FlexEndButtonContainer>
                    <LoadingButton
                        loading={isPending}
                        variant="contained"
                        type="submit"
                        sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                    >
                        {t('login', 'auth')}
                    </LoadingButton>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 0.5,
                            height: 36,
                        }}
                    >
                        <Button
                            variant="contained"
                            type="button"
                            onClick={handleClickJoin}
                            sx={{ bgcolor: 'button.light', width: '100%', fontWeight: 400 }}
                        >
                            {t('join', 'auth')}
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleClickPasswordReset}
                            type="button"
                            sx={{
                                bgcolor: 'button.light',
                                width: '100%',
                                fontWeight: 400,
                                textWrap: 'nowrap',
                            }}
                        >
                            {t('reset_password', 'auth')}
                        </Button>
                    </Box>
                </FlexEndButtonContainer>
            </form>
            <JoinModal isOpen={isOpenJoinModal} onClose={handleCloseJoinModal} />
        </>
    )
}

export default LoginForm
