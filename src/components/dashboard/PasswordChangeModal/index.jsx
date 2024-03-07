import useLayoutStore from '#/store/useLayoutStore'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useFormik } from 'formik'
import PasswordInput from '#/components/common/input/PasswordInput'
import { passwordChangeSchema } from '#/contents/validationSchema'
import { useUserActions } from '#/store/useUserStore'
import { usePostDeferChange, usePostPasswordChange } from '#/hooks/queries/auth'

import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'

import style from './style.module'

import t from '#/common/libs/trans'
import {
    encryptPasswordBase64WithTime,
    encryptPasswordSHA256,
    encryptPasswordSHA256WithTime,
} from '#/common/libs/encode'
import { LoadingButton } from '@mui/lab'

const PasswordChangeModal = ({ isOpen }) => {
    const { themeMode } = useLayoutStore()
    const { setPwChangeRequired } = useUserActions()
    const { mutate: passwordChangeMutate, isPending: isPasswordChangePending } =
        usePostPasswordChange()
    const { mutate: deferChangeMutate, isPending: isDeferChangePending } = usePostDeferChange()

    const email = 'work@acro.com'

    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: passwordChangeSchema,
        onSubmit: (form) => {
            const newPassword = encryptPasswordSHA256(form.currentPassword)
            const oldPassword = encryptPasswordBase64WithTime(
                encryptPasswordSHA256WithTime(encryptPasswordSHA256(form.currentPassword)),
            )
            passwordChangeMutate(
                {
                    oldPassword,
                    newPassword,
                },
                {
                    onSuccess: () => {
                        setPwChangeRequired(false)
                    },
                },
            )
        },
    })

    const handleClickDeferChange = () => {
        deferChangeMutate(
            {},
            {
                onSuccess: () => {
                    setPwChangeRequired(false)
                },
            },
        )
    }

    return (
        <Dialog open={isOpen} sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? (
                        <img src={joinIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={joinIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                    {t('password_change', 'auth')}
                </Box>
            </DialogTitle>
            <DialogContent>
                <Typography sx={style.subTitle}>{t('password_change_desc', 'auth')}</Typography>
                <Typography sx={style.labelText}>
                    {t('email', 'auth')} : {email}
                </Typography>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('current_password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'currentPassword'}
                    formik={formik}
                    placeholder={t('placeholder.current_password', 'auth')}
                />
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'password'}
                    formik={formik}
                    placeholder={t('placeholder.password', 'auth')}
                    inputRule={t('guide.password_input_guide', 'auth')}
                />
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red' }}>*</span>
                    {t('confirm_password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'confirmPassword'}
                    formik={formik}
                    placeholder={t('placeholder.confirm_password', 'auth')}
                />
            </DialogContent>
            <DialogActions sx={style.btnBox}>
                <LoadingButton
                    loading={isDeferChangePending}
                    variant="contained"
                    onClick={handleClickDeferChange}
                    sx={style.lightButton}
                >
                    {t('after_change', 'auth')}
                </LoadingButton>
                <LoadingButton
                    loading={isPasswordChangePending}
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={style.darkLarge}
                >
                    {t('password_change', 'auth')}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default PasswordChangeModal
