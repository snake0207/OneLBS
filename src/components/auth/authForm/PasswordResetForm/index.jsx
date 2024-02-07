import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { Button, Divider, Typography, Box } from '@mui/material'
import { useFormik } from 'formik/dist'
import { Icon } from '@mui/material'
import LoginIcon from '#/assets/loginIcon.svg'

import t from '#/common/libs/trans'

import style from './style.module'

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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5" sx={style.passwordTitle}>
                    비밀번호 확인
                </Typography>
            </Box>
            <Typography variant="h6" sx={style.labelText}>
                {t('email', 'auth')}
            </Typography>
            <TextInput
                formik={formik}
                name={'userMail'}
                placeholder={t('placeholder.email', 'auth')}
            />
            <Typography variant="h6" sx={style.labelText}>
                {t('password', 'auth')}
            </Typography>
            <PasswordInput
                formik={formik}
                name={'password'}
                placeholder={t('placeholder.password', 'auth')}
                inputRule={t('guide.password_input_guide', 'auth')}
            />
            <Typography variant="h6" sx={style.labelText}>
                {t('confirm_password', 'auth')}
            </Typography>
            <PasswordInput
                formik={formik}
                name={'confirmPassword'}
                placeholder={t('placeholder.password', 'auth')}
            />
            <Typography variant="h6" sx={style.labelText}>
                OTP
            </Typography>
            <TextInput formik={formik} name={'otp'} placeholder={t('placeholder.otp', 'auth')} />
            <FlexEndButtonContainer>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                >
                    {t('reset_password', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default PasswordResetForm
