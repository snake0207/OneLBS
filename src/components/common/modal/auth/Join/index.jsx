import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, DialogActions, DialogContent, Typography } from '@mui/material'
import { usePostJoin } from '#/hooks/queries/auth'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import RadioInput from '#/components/common/Radio'
import { joinSchema } from '#/contents/validationSchema'
import EmailVerifyInput from '#/components/common/modal/auth/Join/EmailVerifyInput/index.jsx'
import VerifyCodeInput from '#/components/common/modal/auth/Join/VerifyCodeInput'
import JoinSuccessModal from '#/components/common/modal/auth/JoinSuccess'
import PrivacyPolicyModal from '#/components/common/modal/auth/Join/PrivacyPolicy'
import IpInputGroup from '#/components/common/modal/auth/Join/IpInputGroup'

import t from '#/common/libs/trans'
import { formatJoinData } from '#/common/libs/formatData'

const JoinModal = () => {
    const dummyAuthorityArr = [
        { value: 'GUEST', label: '일반 사용자' },
        { value: 'USER', label: '요청자' },
        { value: 'REVIEWER', label: '검토자' },
        { value: 'MANAGER', label: '승인자' },
        { value: 'ADMIN', label: '운영자' },
    ]
    const dummyTermsArr = [
        { value: 'Y', label: '개인정보 수집이용동의' },
        { value: 'N', label: '동의하지 않음' },
    ]
    const { mutate } = usePostJoin()
    const [isJoinSuccess, setIsJoinSuccess] = useState(false)
    const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            confirmEmailCode: '',
            password: '',
            confirmPassword: '',
            name: '',
            company: '',
            team: '',
            role: 'GUEST',
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
        },
        validationSchema: joinSchema,
        onSubmit: (form) => {
            console.log(form)
            const data = formatJoinData(form)
            console.log(data)
            setIsJoinSuccess(true)
            // mutate(form)
        },
    })

    return (
        <>
            <DialogContent dividers>
                <Typography>
                    <span style={{ color: 'red' }}>*</span>
                    {t('guide.required', 'auth')}
                </Typography>
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('email', 'auth')}
                </Typography>
                <EmailVerifyInput name={'email'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('confirm_email_code', 'auth')}
                </Typography>
                <VerifyCodeInput name={'confirmEmailCode'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'password'}
                    placeholder={t('placeholder.password', 'auth')}
                    inputRule={t('guide.password_input_guide', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('confirm_password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'confirmPassword'}
                    placeholder={t('confirm_password', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('name', 'auth')}
                </Typography>
                <TextInput
                    name={'name'}
                    placeholder={t('placeholder.name', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('company', 'auth')}
                </Typography>
                <TextInput
                    name={'company'}
                    placeholder={t('placeholder.company', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('team', 'auth')}
                </Typography>
                <TextInput
                    name={'team'}
                    placeholder={t('placeholder.team', 'auth')}
                    formik={formik}
                />
                {formik.values.role === 'GUEST' && <IpInputGroup formik={formik} />}
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>
                    {t('role', 'auth')}
                </Typography>
                <RadioInput radioList={dummyAuthorityArr} name={'role'} formik={formik} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        <span style={{ color: 'red' }}>*</span>
                        {t('consent_terms', 'auth')}
                    </Typography>
                    <Button variant="contained" onClick={() => setIsOpenPrivacyPolicy(true)}>
                        {t('read_more', 'auth')}
                    </Button>
                </Box>
                <Typography>{t('guide.terms_guide', 'auth')}</Typography>
                <RadioInput
                    radioList={dummyTermsArr}
                    name={'terms'}
                    formik={formik}
                    isDisabled={true}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={formik.handleSubmit} type="submit">
                    {t('join', 'auth')}
                </Button>
            </DialogActions>
            <JoinSuccessModal isOpen={isJoinSuccess} onClose={() => setIsJoinSuccess(false)} />
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicy}
                onClose={() => setIsOpenPrivacyPolicy(false)}
            />
        </>
    )
}

export default JoinModal
