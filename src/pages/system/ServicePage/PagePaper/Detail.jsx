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

import ResetIcon from '#/assets/resetIcon.svg'
import DetailviewIcon from '#/assets/detailviewIcon.svg'
import DetailviewIconDark from '#/assets/detailviewIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import style from './style-detail.module'

import { useEffect } from 'react'

const ServiceDetail = ({
    row,
    open,
    onClose,
    onResetPassword,
    onApprove,
    onDeactivate,
    onChangePermission,
}) => {
    const [permission, setPermission] = useState(0)

    useEffect(() => {
        if (open) {
            setPermission(0)
        }
    }, [open, row])

    const handleChangePermission = (item) => {
        setPermission(item.value)

        if (onChangePermission) onChangePermission(row, item)
    }

    const handleStatusChange = (status) => {
        switch (status) {
            case 1:
                if (onApprove) onApprove(row, 1)
                break
            case 3:
                if (onDeactivate) onDeactivate(row, 1)
        }
    }
    const { themeMode } = useLayoutStore()

    return (
        <Dialog open={open} onClose={onClose} sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? (
                        <img src={DetailviewIcon} style={{ width: '24px' }} />
                    ) : (
                        <img src={DetailviewIconDark} />
                    )}
                    {`상세 정보`}
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
                <CloseIcon sx={style.close} />
            </IconButton>
            <DialogContent sx={{ pt: 0 }}>
                <Table sx={style.tableBox}>
                    <TableHead>
                        <TableRow>
                            <TableCell>{`서비스명`}</TableCell>
                            <TableCell component="td">{row?.serviceName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`서비스코드`}</TableCell>
                            <TableCell component="td">{row?.serviceCode}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`CP명`}</TableCell>
                            <TableCell component="td">{row?.cpName}</TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell>{`서비스제공자`}</TableCell>
                            <TableCell component="td">{row?.serviceProvider}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`권한`}</TableCell>
                            <TableCell component="td">
                                <Select
                                    name="permission"
                                    value={permission}
                                    items={getPermissionList()}
                                    onChange={handleChangePermission}
                                    style={{
                                        height: '40px',
                                        width: '80%',
                                        fontSize: 14,
                                        backgroundColor: 'form.main',
                                        borderRadius: '4px',
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`상태`}</TableCell>
                            <TableCell component="td">{gstStatusLabel(row?.status)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`등록일`}</TableCell>
                            <TableCell component="td">{row?.register_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`승인일`}</TableCell>
                            <TableCell component="td">{row?.approve_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`마지막 로그인`}</TableCell>
                            <TableCell component="td">{row?.last_login_date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`비고`}</TableCell>
                            <TableCell component="td">{row?.remark}</TableCell>
                        </TableRow> */}
                    </TableHead>
                </Table>
            </DialogContent>
            <DialogActions sx={style.btnBox}>
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
                            alignItems: 'center',
                        }}
                    >
                        <img src={ResetIcon} />
                    </Icon>
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStatusChange(1)}
                    sx={style.darkLarge}
                >
                    {`승인`}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStatusChange(3)}
                    sx={style.lineButton}
                >
                    {`비활성화`}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ServiceDetail
