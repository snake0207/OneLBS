import TitleBar from '#/components/common/menu/TitleBar'
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Stack,
    Button,
} from '@mui/material'

import t from '#/common/libs/trans'

import PasswordInput from '#/components/common/input/PasswordInput'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import IPManage from './IPManage'
import * as yup from 'yup'
import { usePopupActions } from '#/store/usePopupStore'
import { useNavigate } from 'react-router'

import user from '#/mock/data/user.json'

import style from './style.module'

function ProfileForm() {
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
            <Box sx={style.contentBox}>
                <Typography
                    sx={{ fontSize: '16px', fontWeight: 500, color: '#05141F', mb: '14px' }}
                >
                    {t('default_info', 'profile')}
                </Typography>
                <Typography fontSize="small">
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('required_field', 'profile')}
                </Typography>
                <Table sx={style.tableBox}>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('email', 'profile')}</TableCell>
                            <TableCell component="td">{user?.email}</TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ color: 'red', fontSize: '14px' }}>*</span>
                                {t('password', 'profile')}
                            </TableCell>
                            <TableCell component="td">
                                <PasswordInput
                                    name="password"
                                    formik={formik}
                                    placeholder={t('input_password', 'profile')}
                                    inputRule={t('input_password_label', 'profile')}
                                />
                            </TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ color: 'red', fontSize: '14px' }}>*</span>
                                {t('confirm_password', 'profile')}
                            </TableCell>
                            <TableCell component="td">
                                <PasswordInput
                                    name="confirm_password"
                                    formik={formik}
                                    placeholder={t('input_confirm_password', 'profile')}
                                />
                            </TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ color: 'red', fontSize: '14px' }}>*</span>
                                {t('name', 'profile')}
                            </TableCell>
                            <TableCell component="td">
                                <TextInput name="name" formik={formik} />
                            </TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ color: 'red', fontSize: '14px' }}>*</span>
                                {t('company_name', 'profile')}
                            </TableCell>
                            <TableCell component="td">
                                <TextInput name="company" formik={formik} />
                            </TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ color: 'red', fontSize: '14px' }}>*</span>
                                {t('team_name', 'profile')}
                            </TableCell>
                            <TableCell component="td">
                                <TextInput name="team" formik={formik} />
                            </TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                        <IPManage ipAddresses={user?.ip_addresses} />
                        <TableRow>
                            <TableCell>{t('permission', 'profile')}</TableCell>
                            <TableCell component="td">{user?.permission}</TableCell>
                            <TableCell component="td"></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Box align={'right'}>
                    <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
                        <Button type="submit" onClick={handleEdit} sx={style.bluelineButton}>
                            {t('modify', 'profile')}
                        </Button>
                        <Button onClick={handleWithdraw} sx={style.lineButton}>
                            {t('withdraw', 'profile')}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileForm
