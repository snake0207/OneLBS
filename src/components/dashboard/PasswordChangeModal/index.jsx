import useLayoutStore from '#/store/useLayoutStore'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from 'formik'
import PasswordInput from '#/components/common/input/PasswordInput'
import { passwordChangeSchema } from '#/contents/validationSchema'
import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'

import style from './style.module'

import t from '#/common/libs/trans'
import { encryptPasswordSHA256 } from '#/common/libs/encode'

const PasswordChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = useLayoutStore()

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
            console.log(newPassword)
        },
    })

    return (
        <Dialog open={isOpen} onClose={onClose} sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? (
                        <img src={joinIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={joinIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                    {t('password_change', 'auth')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
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
                <Button variant="contained" sx={style.lightButton}>
                    {t('after_change', 'auth')}
                </Button>
                <Button variant="contained" onClick={formik.handleSubmit} sx={style.darkLarge}>
                    {t('password_change', 'auth')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PasswordChangeModal
