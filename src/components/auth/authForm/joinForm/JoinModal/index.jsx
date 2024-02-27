import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    Typography,
} from '@mui/material'
import { usePostJoin } from '#/hooks/queries/auth'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import RadioInput from '#/components/common/Radio'
import { joinSchema } from '#/contents/validationSchema'
import VerifyEmailForm from '#/components/auth/authForm/joinForm/JoinModal/VerifyEmailForm'
import ConfirmEmailForm from '#/components/auth/authForm/joinForm/JoinModal/ConfirmEmailForm'
import PrivacyPolicyModal from '#/components/auth/authForm/joinForm/JoinModal/PrivacyPolicyModal'
import IpInputGroup from '#/components/auth/authForm/joinForm/JoinModal/IpInputGroup'
import { usePopupActions } from '#/store/usePopupStore'
import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'
import CloseIcon from '@mui/icons-material/Close'
import JoinSuccessModal from '#/components/auth/authForm/joinForm/JoinSuccessModal'
import { getLayoutState } from '#/store/useLayoutStore'

import { formatJoinData } from '#/common/libs/formatData'
import t from '#/common/libs/trans'

import BtnArrowIcon from '#/assets/btnArrowIcon.svg'
import BtnArrowIconDark from '#/assets/btnArrowIconDark.svg'

import style from './style.module'

import joinList from './list.json'

const JoinModal = ({ isOpen, onClose }) => {
    const { showPopup } = usePopupActions()
    const { themeMode } = getLayoutState()
    const { mutate } = usePostJoin()
    const [isOpenPrivacyPolicyModal, setIsOpenPrivacyPolicyModal] = useState(false)
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
            console.log(data)
            // mutate(data)
            setIsOpenJoinSuccessModal(true)
        },
    })

    const handleClosePrivacyPolicyModal = () => {
        setIsOpenPrivacyPolicyModal(false)
        formik.setFieldValue('terms', 'Y')
    }

    const handleCloseJoinSuccessModal = () => {
        setIsOpenJoinSuccessModal(false)
        onClose()
    }

    useEffect(() => {
        formik.resetForm()
    }, [isOpen])

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="md" sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon>
                        {themeMode === 'light' ? (
                            <img src={joinIcon} style={{ display: 'flex', width: '24px' }} />
                        ) : (
                            <img src={joinIconDark} style={{ display: 'flex', width: '24px' }} />
                        )}
                    </Icon>
                    {t('join', 'auth')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography sx={style.subTitle}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('guide.required', 'auth')}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 14 }}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('email', 'auth')}
                </Typography>
                <VerifyEmailForm formik={formik} />
                <Typography variant="h6" sx={{ fontSize: 14, mt: 2 }}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('confirm_email_code', 'auth')}
                </Typography>
                <ConfirmEmailForm formik={formik} />
                <Typography variant="h6" sx={{ fontSize: 14, mt: 2 }}>
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
                <TextInput
                    name={'name'}
                    placeholder={t('placeholder.name', 'auth')}
                    formik={formik}
                />
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
                <TextInput
                    name={'team'}
                    placeholder={t('placeholder.team', 'auth')}
                    formik={formik}
                />
                <Typography variant="h6" sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('role', 'auth')}
                </Typography>
                <RadioInput radioList={joinList.roleList} name={'role'} formik={formik} />
                {formik.values.role === '29' && <IpInputGroup formik={formik} />}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                        <span style={{ color: 'red' }}>*</span>
                        {t('consent_terms', 'auth')}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setIsOpenPrivacyPolicyModal(true)}
                        sx={style.btnDetaile}
                    >
                        {t('read_more', 'auth')}
                        {themeMode === 'light' ? (
                            <img src={BtnArrowIcon} style={{ width: '8.5px', marginLeft: '4px' }} />
                        ) : (
                            <img
                                src={BtnArrowIconDark}
                                style={{ width: '10px', marginLeft: '8.5px' }}
                            />
                        )}
                    </Button>
                </Box>
                <Typography variant="overline" component="p" sx={style.infoText}>
                    {t('guide.terms_guide', 'auth')}
                </Typography>
                <RadioInput
                    radioList={joinList.termsList}
                    name={'terms'}
                    formik={formik}
                    isDisabled={true}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                    type="submit"
                    className="{classes.btn}"
                    sx={style.btnLarge}
                >
                    {t('join', 'auth')}
                </Button>
            </DialogActions>
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicyModal}
                onClose={handleClosePrivacyPolicyModal}
            />
            <JoinSuccessModal
                isOpen={isOpenJoinSuccessModal}
                onClose={handleCloseJoinSuccessModal}
            />
        </Dialog>
    )
}

export default JoinModal
