import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Table,
    TableHead,
    TableRow,
    TableCell,
    IconButton,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import * as yup from 'yup'
import { useFormik } from 'formik'
import t from '#/common/libs/trans'
import TextInput from '#/components/common/input/TextInput'
import { IpInput } from '#/components/common/input/IpInput'
import { useEffect } from 'react'

function AddIpDialog({ user, open, onClose, onRegister }) {
    const formik = useFormik({
        initialValues: {
            ip1: '',
            ip2: '',
            ip3: '',
            ip4: '',
            description: '',
        },
        validationSchema: yup.object().shape({
            ip1: yup.number().required('Required'),
            ip2: yup.number().required('Required'),
            ip3: yup.number().required('Required'),
            ip4: yup.number().required('Required'),
        }),
        onSubmit: (values) => {
            if (onRegister) onRegister(values)
        },
    })

    useEffect(() => {
        if (open) {
            formik.resetForm()
        }
    }, [open])

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{t('detail', 'users')}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('email', 'users')}</TableCell>
                            <TableCell>{user?.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('name', 'users')}</TableCell>
                            <TableCell>{user?.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('company_name', 'users')}</TableCell>
                            <TableCell>{user?.company}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('team_name', 'users')}</TableCell>
                            <TableCell>{user?.team}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('ip', 'users')}</TableCell>
                            <TableCell>
                                <IpInput
                                    name="ip_address"
                                    ipName1="ip1"
                                    ipName2="ip2"
                                    ipName3="ip3"
                                    ipName4="ip4"
                                    formik={formik}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('description', 'users')}</TableCell>
                            <TableCell>
                                <TextInput name="description" formik={formik} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={formik.handleSubmit}>
                    {t('register', 'users')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddIpDialog
