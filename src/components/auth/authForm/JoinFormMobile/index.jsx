import { useState } from 'react'
import { useFormik } from 'formik'
import { joinSchema } from '#/contents/validationSchema'
import { usePopupActions } from '#/store/usePopupStore'
import { usePostJoin } from '#/hooks/queries/auth'
import { Box, Button, Typography } from '@mui/material'
import VerifyEmailForm from '#/components/auth/authForm/joinForm/JoinModal/VerifyEmailForm'
import ConfirmEmailForm from '#/components/auth/authForm/joinForm/JoinModal/ConfirmEmailForm'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'
import IpInputGroup from '#/components/auth/authForm/joinForm/JoinModal/IpInputGroup'
import RadioInput from '#/components/common/Radio'
import PrivacyPolicyModal from '#/components/auth/authForm/joinForm/JoinModal/PrivacyPolicyModal'
import JoinSuccessModal from '#/components/auth/authForm/joinForm/JoinSuccessModal'
import { ROLE_LIST, TERMS_LIST } from '#/contents/constant'

import BtnArrowIcon from '#/assets/btnArrowIcon.svg'
import BtnArrowIconDark from '#/assets/btnArrowIconDark.svg'
import { useAuthStepActions } from '#/store/useAuthStepStore'
import { getLayoutState } from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import { formatJoinData } from '#/common/libs/formatData'

import style from './style.module'

const JoinFormMobile = () => {
    const { showPopup } = usePopupActions()
    const { themeMode } = getLayoutState()
    const actions = useAuthStepActions()
    const { mutate } = usePostJoin()
    const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false)
    const [isOpenJoinSuccessModal, setIsOpenJoinSuccessModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            code: '',
            password: '',
            confirmPassword: '',
            name: '',
            company: '',
            team: '',
            role: '25',
            terms: 'N',
            ipAddress1_0: '',
            ipAddress2_0: '',
            ipAddress3_0: '',
            ipAddress4_0: '',
            ipDescription_0: '',
            ipAddress1_1: '',
            ipAddress2_1: '',
            ipAddress3_1: '',
            ipAddress4_1: '',
            ipDescription_1: '',
            ipAddress1_2: '',
            ipAddress2_2: '',
            ipAddress3_2: '',
            ipAddress4_2: '',
            ipDescription_2: '',
            isIpAutoAdd: true,
        },
        validationSchema: joinSchema,
        onSubmit: (form) => {
            if (form.terms === 'N') {
                showPopup('alert', t('terms_disagree', 'validation'))
                return
            }
            const data = formatJoinData(form)
            mutate(data, {
                onSuccess: () => {
                    setIsOpenJoinSuccessModal(true)
                },
            })
        },
    })

    const handleClosePrivacyPolicyDetail = () => {
        setIsOpenPrivacyPolicy(false)
        formik.setFieldValue('terms', 'Y')
    }

    const handleCloseJoinSuccessModal = () => {
        setIsOpenJoinSuccessModal(false)
        actions.initAuthStep()
    }

    return (
        <Box
            sx={{
                height: '100vh',
                mt: 20,
                '@media (max-width:1024px)': {
                    mt: '-40px',
                },
            }}
        >
            <Typography sx={style.subTitle}>
                <span style={{ color: 'red' }}>*</span>
                {t('guide.required', 'auth')}
            </Typography>
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('email', 'auth')}
            </Typography>
            <VerifyEmailForm formik={formik} />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('confirm_email_code', 'auth')}
            </Typography>
            <ConfirmEmailForm formik={formik} />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('password', 'auth')}
            </Typography>
            <PasswordInput
                name={'password'}
                placeholder={t('placeholder.password', 'auth')}
                inputRule={t('guide.password_input_guide', 'auth')}
                formik={formik}
            />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('confirm_password', 'auth')}
            </Typography>
            <PasswordInput
                name={'confirmPassword'}
                placeholder={t('confirm_password', 'auth')}
                formik={formik}
            />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('name', 'auth')}
            </Typography>
            <TextInput name={'name'} placeholder={t('placeholder.name', 'auth')} formik={formik} />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('company', 'auth')}
            </Typography>
            <TextInput
                name={'company'}
                placeholder={t('placeholder.company', 'auth')}
                formik={formik}
            />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('team', 'auth')}
            </Typography>
            <TextInput name={'team'} placeholder={t('placeholder.team', 'auth')} formik={formik} />
            <Typography variant="h6" sx={style.labelText}>
                <span style={{ color: 'red' }}>*</span>
                {t('role', 'auth')}
            </Typography>
            <RadioInput radioList={ROLE_LIST} name={'role'} formik={formik} />
            {formik.values.role === '29' && <IpInputGroup formik={formik} />}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography variant="h6" sx={[style.labelText, { mt: 0 }]}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('consent_terms', 'auth')}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => setIsOpenPrivacyPolicy(true)}
                    sx={style.btnDetaile}
                >
                    {t('read_more', 'auth')}
                    {themeMode === 'light' ? (
                        <img src={BtnArrowIcon} style={{ width: '10px', marginLeft: '4px' }} />
                    ) : (
                        <img src={BtnArrowIconDark} style={{ width: '10px', marginLeft: '4px' }} />
                    )}
                </Button>
            </Box>
            <Typography variant="overline" component="p" sx={style.infoText}>
                {t('guide.terms_guide', 'auth')}
            </Typography>
            <RadioInput radioList={TERMS_LIST} name={'terms'} formik={formik} isDisabled={true} />
            <Box>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    type="submit"
                    className="{classes.btn}"
                    sx={style.btnLarge}
                    fullWidth
                >
                    {t('join', 'auth')}
                </Button>
            </Box>
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicy}
                onClose={handleClosePrivacyPolicyDetail}
            />
            <JoinSuccessModal
                isOpen={isOpenJoinSuccessModal}
                onClose={handleCloseJoinSuccessModal}
            />
        </Box>
    )
}

export default JoinFormMobile
