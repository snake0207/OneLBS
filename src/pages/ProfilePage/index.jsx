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

import user from '#/mock/data/user.json'
import PasswordInput from '#/components/common/input/PasswordInput'
import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import IPManage from './IPManage'
import * as yup from 'yup'

function ProfilePage() {
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
        },
        onReset: (values) => {
            console.log('onReset', values)
        },
    })

    const handleEdit = (values, index) => {
        console.log('handleEdit', values, index)
    }

    const handleDelete = (values, index) => {
        console.log('handleDelete', values, index)
    }

    return (
        <Box>
            <TitleBar title={t('profile')} />
            <Typography>{t('default_info', 'profile')}</Typography>
            <Typography color="red" fontSize="small">
                *{t('required_field', 'profile')}
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('email', 'profile')}</TableCell>
                        <TableCell>{user?.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>*{t('password', 'profile')}</TableCell>
                        <TableCell>
                            <PasswordInput
                                name="password"
                                formik={formik}
                                placeholder={t('input_password', 'profile')}
                                inputRule={t('input_password_label', 'profile')}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>*{t('confirm_password', 'profile')}</TableCell>
                        <TableCell>
                            <PasswordInput
                                name="confirm_password"
                                formik={formik}
                                placeholder={t('input_confirm_password', 'profile')}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>*{t('name', 'profile')}</TableCell>
                        <TableCell>
                            <TextInput name="name" formik={formik} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>*{t('company_name', 'profile')}</TableCell>
                        <TableCell>
                            <TextInput name="company" formik={formik} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>*{t('team_name', 'profile')}</TableCell>
                        <TableCell>
                            <TextInput name="team" formik={formik} />
                        </TableCell>
                    </TableRow>
                    <IPManage
                        ipAddresses={user?.ip_addresses}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                    <TableRow>
                        <TableCell>{t('permission', 'profile')}</TableCell>
                        <TableCell>{user?.permission}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <Box>
                <Stack spacing={2} direction="row">
                    <Button type="submit" onClick={formik.handleSubmit}>
                        {t('modify', 'profile')}
                    </Button>
                    <Button onClick={formik.handleReset}>{t('withdraw', 'profile')}</Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default ProfilePage
