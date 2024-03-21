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
import { LoadingButton } from '@mui/lab'
import { usePostJoin } from '#/hooks/queries/auth'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import RadioInput from '#/components/common/Radio'
import { joinSchema } from '#/contents/validationSchema'
import VerifyEmailForm from '#/components/auth/authForm/joinForm/JoinModal/VerifyEmailForm'
import ConfirmEmailForm from '#/components/auth/authForm/joinForm/JoinModal/ConfirmEmailForm'
import IpInputGroup from '#/components/auth/authForm/joinForm/JoinModal/IpInputGroup'
import { usePopupActions } from '#/store/usePopupStore'
import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'
import CloseIcon from '@mui/icons-material/Close'
import JoinSuccessModal from '#/components/auth/authForm/joinForm/JoinSuccessModal'
import { getLayoutState } from '#/store/useLayoutStore'
import { ROLE_LIST } from '#/contents/constant'

import { formatJoinData } from '#/common/libs/formatData'
import t from '#/common/libs/trans'

import style from './style.module'

const JoinModal = ({ isOpen, onClose }) => {
    const { showPopup } = usePopupActions()
    const { themeMode } = getLayoutState()
    const { mutate, isPending } = usePostJoin()
    const [isOpenJoinSuccessModal, setIsOpenJoinSuccessModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            code: '',
            password: '',
            confirmPassword: '',
            name: '',
            role: '1',  // 운영자, 9: 관리자
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
            ipAddress1_3: '',
            ipAddress2_3: '',
            ipAddress3_3: '',
            ipAddress4_3: '',
            ipDescription_3: '',
            ipAddress1_4: '',
            ipAddress2_4: '',
            ipAddress3_4: '',
            ipAddress4_4: '',
            ipDescription_4: '',
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
                    {`회원가입`}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography sx={style.subTitle}>
                    <span style={{ color: 'red' }}>*</span>
                    {`필수 입력입니다.`}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 14 }}>
                    <span style={{ color: 'red' }}>*</span>
                    {`이메일`}
                </Typography>
                <VerifyEmailForm formik={formik} />
                <Typography variant="h6" sx={{ fontSize: 14, mt: 2 }}>
                    <span style={{ color: 'red' }}>*</span>
                    {`메일인증코드`}
                </Typography>
                <ConfirmEmailForm formik={formik} />
                <Typography variant="h6" sx={{ fontSize: 14, mt: 2 }}>
                    <span style={{ color: 'red' }}>*</span>
                    {`비밀번호`}
                </Typography>
                <PasswordInput
                    name={'password'}
                    placeholder={`비밀번호를 입력하세요`}
                    inputRule={`8~16자 이내 영문대문자, 숫자, 특수문자가 반드시 포함되야 합니다.`}
                    formik={formik}
                />
                <Typography variant="h6" sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {`비밀번호 확인`}
                </Typography>
                <PasswordInput
                    name={'confirmPassword'}
                    placeholder={`비밀번호 확인`}
                    formik={formik}
                />
                <Typography variant="h6" sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {`이름`}
                </Typography>
                <TextInput name={'name'} placeholder={`이름을 입력하세요`} formik={formik} />
                <Typography variant="h6" sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {`권한`}
                </Typography>
                <RadioInput radioList={ROLE_LIST} name={'role'} formik={formik} />
                <IpInputGroup formik={formik} />
            </DialogContent>
            <DialogActions>
                <LoadingButton
                    loading={isPending}
                    variant="contained"
                    onClick={formik.handleSubmit}
                    type="submit"
                    className="{classes.btn}"
                    sx={style.btnLarge}
                >
                    {`회원가입`}
                </LoadingButton>
            </DialogActions>
            <JoinSuccessModal
                isOpen={isOpenJoinSuccessModal}
                onClose={handleCloseJoinSuccessModal}
            />
        </Dialog>
    )
}

export default JoinModal
