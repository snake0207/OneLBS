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
    Box,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import * as yup from 'yup'
import { useFormik } from 'formik'
import t from '#/common/libs/trans'
import TextInput from '#/components/common/input/TextInput'
import { IpInput } from '#/components/common/input/IpInput'
import { useEffect } from 'react'
import DetailviewIcon from '#/assets/detailviewIcon.svg'
import DetailviewIconDark from '#/assets/detailviewIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'

import style from './style.module'

function AddIpDialog({ user, open, onClose, onRegister }) {
    const { themeMode } = useLayoutStore()
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
        <Dialog open={open} onClose={onClose} sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? (
                        <img src={DetailviewIcon} style={{ width: '24px' }} />
                    ) : (
                        <img src={DetailviewIconDark} />
                    )}
                    {t('detail', 'users')}
                </Box>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 24,
                    top: 32,
                }}
            >
                <CloseIcon sx={style.close} />
            </IconButton>
            <DialogContent sx={{ pt: 0 }}>
                <Table style={{ marginBottom: '20px' }} sx={style.tableBox}>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('email', 'users')}</TableCell>
                            <TableCell component="td">{user?.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('name', 'users')}</TableCell>
                            <TableCell component="td">{user?.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('company_name', 'users')}</TableCell>
                            <TableCell component="td">{user?.company}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('team_name', 'users')}</TableCell>
                            <TableCell component="td">{user?.team}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Table sx={style.tableBox}>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('ip', 'users')}</TableCell>
                            <TableCell component="td">
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
                            <TableCell component="td">
                                <TextInput name="description" formik={formik} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </DialogContent>
            <DialogActions sx={style.btnBox}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
                    sx={style.btnLarge}
                >
                    {t('register', 'users')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddIpDialog
