import { Box, Button, Stack, Typography } from '@mui/material'

import TitleBar from '#/components/common/menu/TitleBar'
import PasswordInput from '#/components/common/input/PasswordInput'
import TextInput from '#/components/common/input/TextInput'

import { usePopupActions } from '#/store/usePopupStore'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'

import t from '#/common/libs/trans'
import user from '#/mock/data/user.json'
import IPManage from './IPManage'

function MobileProfileForm() {
    const navigate = useNavigate()
    const popupActions = usePopupActions()
    const formik = useFormik({
        initialValues: {
            email: user?.email,
            name: user?.name,
            company: user?.company,
            team: user?.team,
            password: '',
            confirm_password: '',
        },
        validationSchema: yup.object().shape({
            password: yup
                .string()
                .required(t('required_field', 'profile'))
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                    t('password_complexity', 'profile'),
                ),
            confirm_password: yup
                .string()
                .required(t('required_field', 'profile'))
                .oneOf([yup.ref('password'), null], t('password_not_match', 'profile')),
            name: yup.string().required(t('required_field', 'profile')),
            company: yup.string().required(t('required_field', 'profile')),
            team: yup.string().required(t('required_field', 'profile')),
        }),
        onSubmit: (values) => {
            console.log('onSubmit', values)
            popupActions.showPopup('alert', t('popup_modify', 'profile'))
        },
        onReset: (values) => {
            console.log('onReset', values)
        },
    })

    const handleEdit = () => {
        console.log('handleEdit')
        formik.handleSubmit()
    }

    const handleWithdraw = () => {
        console.log('handleWithdraw')

        formik.handleReset()
        popupActions.showPopup('confirm', t('popup_withdraw_confirm', 'profile'), () => {
            // TODO: 회원탈퇴 API 호출
            popupActions.showPopup('alert', t('popup_withdraw', 'profile'))
            navigate('/login')
        })
    }
    return (
        <Box>
            <TitleBar title={t('profile')} />
            <Typography>{t('default_info', 'profile')}</Typography>
            <Typography color="red" fontSize="small">
                *{t('required_field', 'profile')}
            </Typography>
            <Box sx={{ mt: 1 }}>
                <Typography>{t('email', 'profile')}</Typography>
                <Typography>{user?.email}</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('password', 'profile')}</Typography>
                <PasswordInput
                    name="password"
                    formik={formik}
                    placeholder={t('input_password', 'profile')}
                    inputRule={t('input_password_label', 'profile')}
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('confirm_password', 'profile')}</Typography>
                <PasswordInput
                    name="confirm_password"
                    formik={formik}
                    placeholder={t('input_confirm_password', 'profile')}
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('name', 'profile')}</Typography>
                <TextInput name="name" formik={formik} />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('company_name', 'profile')}</Typography>
                <TextInput name="company" formik={formik} />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('team_name', 'profile')}</Typography>
                <TextInput name="team" formik={formik} />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>*{t('ip', 'profile')}</Typography>
                <IPManage ipAddresses={user?.ip_addresses} />
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography>{t('permission', 'profile')}</Typography>
                <Typography>{user?.permission}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Stack spacing={2} direction="row">
                    <Button type="submit" onClick={handleEdit}>
                        {t('modify', 'profile')}
                    </Button>
                    <Button onClick={handleWithdraw}>{t('withdraw', 'profile')}</Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default MobileProfileForm
