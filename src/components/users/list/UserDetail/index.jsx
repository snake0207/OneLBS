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
import { useState } from 'react'
import Select from '#/components/common/Select'
import { gstStatusLabel, getPermissionList } from '#/common/libs/permission'

import CloseIcon from '@mui/icons-material/Close'

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
                        <TableRow>
                            <TableCell>{t('permission', 'users')}</TableCell>
                            <TableCell>
                                <Select
                                    name="permission"
                                    value={permission}
                                    items={getPermissionList()}
                                    onChange={handleChangePermission}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('status', 'users')}</TableCell>
                            <TableCell>{gstStatusLabel(user?.status)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('register_date', 'users')}</TableCell>
                            <TableCell>{user?.register_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('approve_date', 'users')}</TableCell>
                            <TableCell>{user?.approve_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('last_login_date', 'users')}</TableCell>
                            <TableCell>{user?.last_login_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{t('remark', 'users')}</TableCell>
                            <TableCell>{user?.remark}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={() => handleStatusChange(1)}>
                    {t('approve', 'users')}
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleStatusChange(2)}>
                    {t('resume', 'users')}
                </Button>
                <Button variant="contained" color="primary" onClick={onResetPassword}>
                    {t('reset_password', 'users')}
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleStatusChange(3)}>
                    {t('deactivate', 'users')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserDetail
