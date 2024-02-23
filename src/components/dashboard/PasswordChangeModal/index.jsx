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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close'
import { useFormik } from 'formik'
import PasswordInput from '#/components/common/input/PasswordInput'
import { passwordChangeSchema } from '#/contents/validationSchema'

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
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 16,
                    backgroundColor: 'primary.lightBlue',
                    borderRadius: 20,
                    mt: 3.8,
                    ml: 2.5,
                    mr: 2.5,
                    mb: 1.3,
                    height: 42,
                    pl: 1,
                    pr: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? <AccountCircleIcon /> : <AccountCircleIcon />}
                    {t('password_change', 'auth')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography>{t('password_change_desc', 'auth')}</Typography>
                <Typography>
                    {t('email', 'auth')} : {email}
                </Typography>
                <Typography>
                    <span style={{ color: 'red' }}>*</span>
                    {t('current_password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'currentPassword'}
                    formik={formik}
                    placeholder={t('placeholder.current_password', 'auth')}
                />
                <Typography>
                    <span style={{ color: 'red' }}>*</span>
                    {t('password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'password'}
                    formik={formik}
                    placeholder={t('placeholder.password', 'auth')}
                    inputRule={t('guide.password_input_guide', 'auth')}
                />
                <Typography>
                    <span style={{ color: 'red' }}>*</span>
                    {t('confirm_password', 'auth')}
                </Typography>
                <PasswordInput
                    name={'confirmPassword'}
                    formik={formik}
                    placeholder={t('placeholder.confirm_password', 'auth')}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained">{t('after_change', 'auth')}</Button>
                <Button variant="contained" onClick={formik.handleSubmit}>
                    {t('password_change', 'auth')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PasswordChangeModal
