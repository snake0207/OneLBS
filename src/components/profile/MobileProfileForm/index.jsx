import { Box, Button, Stack, Typography, Icon } from '@mui/material'

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
import TitleIcon from '#/assets/title_profile_Icon.svg'

import style from './style.module'

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
            <Icon
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: ' 75px',
                    zIndex: '4',
                }}
            >
                <img src={TitleIcon} />
            </Icon>
            <TitleBar title={t('profile')} />
            <Typography sx={{ color: 'text.darkgray', fontSize: 18, fontWeight: 500, mb: '18px' }}>
                {t('default_info', 'profile')}
            </Typography>
            <Typography fontSize="small" sx={{ color: 'text.darkgray' }}>
                <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                {t('required_field', 'profile')}
            </Typography>
            <Box>
                <Typography sx={style.labelText}>{t('email', 'profile')}</Typography>
                <Typography sx={{ color: 'text.darkgray' }}>{user?.email}</Typography>
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('password', 'profile')}
                </Typography>
                <PasswordInput
                    name="password"
                    formik={formik}
                    placeholder={t('input_password', 'profile')}
                    inputRule={t('input_password_label', 'profile')}
                />
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('confirm_password', 'profile')}
                </Typography>
                <PasswordInput
                    name="confirm_password"
                    formik={formik}
                    placeholder={t('input_confirm_password', 'profile')}
                />
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('name', 'profile')}
                </Typography>
                <TextInput name="name" formik={formik} />
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('company_name', 'profile')}
                </Typography>
                <TextInput name="company" formik={formik} />
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('team_name', 'profile')}
                </Typography>
                <TextInput name="team" formik={formik} />
            </Box>
            <Box>
                <Typography sx={style.labelText}>
                    <span style={{ color: 'red', fontSize: '13px' }}>*</span>
                    {t('ip', 'profile')}
                </Typography>
                <IPManage ipAddresses={user?.ip_addresses} />
            </Box>
            <Box>
                <Typography sx={style.labelText}>{t('permission', 'profile')}</Typography>
                <Typography sx={{ color: 'text.darkgray' }}>{user?.permission}</Typography>
            </Box>
            <Box>
                <Stack spacing={1} direction="row" sx={{ mt: '20px' }}>
                    <Button
                        type="submit"
                        onClick={handleEdit}
                        sx={{
                            width: '50%',
                            height: 50,
                            fontSize: 16,
                            color: '#0A5CBA',
                            border: '1px solid #0A5CBA',
                            backgroundColor: '#E3F0FF',
                            '&:hover': {
                                backgroundColor: '#E3F0FF',
                            },
                        }}
                    >
                        {t('modify', 'profile')}
                    </Button>
                    <Button
                        onClick={handleWithdraw}
                        sx={{
                            width: '50%',
                            height: 50,
                            fontSize: 16,
                            color: '#0A5CBA',
                            border: '1px solid #0A5CBA',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        {t('withdraw', 'profile')}
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default MobileProfileForm
