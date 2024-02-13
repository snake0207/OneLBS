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
    Icon,
} from '@mui/material'
import { useState } from 'react'
import Select from '#/components/common/Select'
import { gstStatusLabel, getPermissionList } from '#/common/libs/permission'

import CloseIcon from '@mui/icons-material/Close'

import DetailviewIconIcon from '#/assets/detailviewIcon.svg'
import ResetIcon from '#/assets/resetIcon.svg'
import style from './style.module'

import t from '#/common/libs/trans'
import { useEffect } from 'react'

function UserDetail({
    user,
    open,
    onClose,
    onApprove,
    onResume,
    onResetPassword,
    onDeactivate,
    onChangePermission,
}) {
    const [permission, setPermission] = useState(0)

    useEffect(() => {
        if (open) {
            setPermission(user?.permission)
        }
    }, [open, user])

    const handleChangePermission = (item) => {
        setPermission(item.value)

        if (onChangePermission) onChangePermission(user, item)
    }

    const handleStatusChange = (status) => {
        switch (status) {
            case 1:
                if (onApprove) onApprove(user, 1)
                break
            case 2:
                if (onResume) onResume(user, 1)
                break
            case 3:
                if (onDeactivate) onDeactivate(user, 1)
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
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
                    <img src={DetailviewIconIcon} style={{ width: '24px' }} />
                    {t('detail', 'users')}
                </Box>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 24,
                    top: 30,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ pt: 0 }}>
                <Table sx={style.tableBox}>
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
                        <TableRow>
                            <TableCell>{t('permission', 'users')}</TableCell>
                            <TableCell component="td">
                                <Select
                                    name="permission"
                                    value={permission}
                                    items={getPermissionList()}
                                    onChange={handleChangePermission}
                                    style={{ height: '40px', width: 200, fontSize: 14 }}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('status', 'users')}</TableCell>
                            <TableCell component="td">{gstStatusLabel(user?.status)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('register_date', 'users')}</TableCell>
                            <TableCell component="td">{user?.register_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('approve_date', 'users')}</TableCell>
                            <TableCell component="td">{user?.approve_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('last_login_date', 'users')}</TableCell>
                            <TableCell component="td">{user?.last_login_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('remark', 'users')}</TableCell>
                            <TableCell component="td">{user?.remark}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </DialogContent>
            <DialogActions sx={style.btnBox}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStatusChange(1)}
                    sx={style.darkLarge}
                >
                    {t('approve', 'users')}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStatusChange(2)}
                    sx={style.bluelineButton}
                >
                    {t('resume', 'users')}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onResetPassword}
                    sx={style.resetButton}
                >
                    <Icon
                        sx={{
                            display: 'flex',
                            width: 20,
                            height: 20,
                            mr: 0.5,
                            alignItems: 'center',
                        }}
                    >
                        <img src={ResetIcon} />
                    </Icon>
                    {t('reset_password', 'users')}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStatusChange(3)}
                    sx={style.lineButton}
                >
                    {t('deactivate', 'users')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserDetail
