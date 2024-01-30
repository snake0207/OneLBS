import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import { Button, Divider, Typography } from '@mui/material'
import { useFormik } from 'formik/dist'

import t from '#/common/libs/trans'

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
            <Typography variant="h5">{t('confirm_password', 'auth')}</Typography>
            <Divider />
            <Typography variant="h6">{t('email', 'auth')}</Typography>
            <TextInput
                formik={formik}
                name={'userMail'}
                placeholder={t('placeholder.email', 'auth')}
            />
            <Typography variant="h6">{t('password', 'auth')}</Typography>
            <PasswordInput
                formik={formik}
                name={'password'}
                placeholder={t('placeholder.password', 'auth')}
                inputRule={t('guide.password_input_guide', 'auth')}
            />
            <Typography variant="h6">{t('confirm_password', 'auth')}</Typography>
            <PasswordInput
                formik={formik}
                name={'confirmPassword'}
                placeholder={t('placeholder.password', 'auth')}
            />
            <Typography variant="h6">OTP</Typography>
            <TextInput formik={formik} name={'otp'} placeholder={t('placeholder.otp', 'auth')} />
            <FlexEndButtonContainer>
                <Button variant="contained" onClick={formik.handleSubmit}>
                    {t('reset_password', 'auth')}
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default PasswordResetForm
