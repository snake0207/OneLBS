import { useFormik } from 'formik'
import { Typography, Box, Icon } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { passwordResetSchema } from '#/contents/validationSchema'
import { usePostPasswordReset } from '#/hooks/queries/auth'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { usePopupActions } from '#/store/usePopupStore'

import t from '#/common/libs/trans'
import { encryptPasswordSHA256 } from '#/common/libs/encode'

import style from './style.module'
import LoginIcon from '#/assets/loginIcon.svg'

const PasswordResetForm = () => {
    const { mutate, isPending } = usePostPasswordReset()
    const { initAuthStep } = useAuthStepActions()
    const { showPopup } = usePopupActions()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            code: '',
        },
        validationSchema: passwordResetSchema,
        onSubmit: (form) => {
            mutate(
                {
                    email: form.email,
                    password: encryptPasswordSHA256(form.password),
                    code: form.code,
                },
                {
                    onSuccess: () => {
                        showPopup('alert', t('alert.password_reset_complete', 'auth'), () =>
                            initAuthStep(),
                        )
                    },
                },
            )
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                <Icon sx={{ display: 'flex', width: 20, height: 20, alignItems: 'center' }}>
                    <img src={LoginIcon} />
                </Icon>
                <Typography variant="h5" sx={style.passwordTitle}>
                    {t('reset_password', 'auth')}
                </Typography>
            </Box>
            <Typography variant="h6" sx={style.labelText}>
                {t('email', 'auth')}
            </Typography>
            <TextInput
                formik={formik}
                name={'email'}
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
            <TextInput formik={formik} name={'code'} placeholder={t('placeholder.otp', 'auth')} />
            <FlexEndButtonContainer>
                <LoadingButton
                    loading={isPending}
                    variant="contained"
                    type="submit"
                    sx={{ bgcolor: 'button.main', width: '100%', fontWeight: 400 }}
                >
                    {t('reset_password', 'auth')}
                </LoadingButton>
            </FlexEndButtonContainer>
        </form>
    )
}

export default PasswordResetForm
