import { Button, Typography, Box } from '@mui/material'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import AuthStepper from '#/components/auth/AuthStepper'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { AUTH_STEP } from '#/contents/constant'
import { loginSchema } from '#/contents/validationSchema'
import { usePostLogin } from '#/hooks/queries/auth'
import { Icon } from '@mui/material'
import LoginIcon from '#/assets/loginIcon.svg'
import { BrowserView, isBrowser, isMobile } from 'react-device-detect'

import t from '#/common/libs/trans'

import style from './style.module'
import JoinModal from '#/components/auth/authForm/joinForm/JoinModal'
import { useState } from 'react'

const LoginForm = () => {
    const { changeAuthStep } = useAuthStepActions()
    const { mutate } = usePostLogin()
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            userMail: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (form) => {
            console.log(form)
            // mutate(form)
            changeAuthStep(AUTH_STEP.certified)
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
                <Typography variant="subtitle2" sx={style.subText}>
                    {t('guide.login_input_guide', 'auth')}
                </Typography>
            </BrowserView>
            <Typography variant="h6" sx={style.labelText}>
                {t('email', 'auth')}
            </Typography>
            <TextInput
                name={'userMail'}
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
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                >
                    {t('login', 'auth')}
                </Button>
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
                        sx={{ bgcolor: 'button.light', width: '100%', fontWeight: 400 }}
                    >
                        {t('reset_password', 'auth')}
                    </Button>
                </Box>
            </FlexEndButtonContainer>
            <JoinModal isOpen={isOpenJoinModal} onClose={handleCloseJoinModal} />
        </>
    )
}

export default LoginForm
