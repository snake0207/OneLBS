import { TableRow, TableCell, Button, Stack } from '@mui/material'
import t from '#/common/libs/trans'
import { useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import Select from '#/components/common/Select'
import { getPermissionList, gstStatusLabel, getAgainstStatus } from '#/common/libs/permission'
import { Icon } from '@mui/material'
import ResetIcon from '#/assets/resetIcon.svg'
import EditIconWhite from '#/assets/editIconWhite.svg'

import style from './style.module'

function Row({
    row,
    onClick,
    onChangePermission,
    onChangeStatus,
    onChangeRemark,
    onResetPassword,
    onWithdraw,
}) {
    const formik = useFormik({
        initialValues: {
            permission: row?.permission,
            remark: row?.remark,
        },
    })

    const [editable, setEditable] = useState(false)
    const handleChangePermission = (item) => {
        onChangePermission(row, item)
    }

    const handleChangeStatus = (status) => {
        onChangeStatus(row, status)
    }

    const handleEditable = (event) => {
        event.stopPropagation()
        setEditable(!editable)

        if (editable) {
            if (onChangeRemark) onChangeRemark(row, formik.values.remark)
        }
    }

    const handleResetPassword = (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (onResetPassword) onResetPassword(row)
    }

    const handleWithdraw = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (onWithdraw) onWithdraw(row)
    }

    return (
        <TableRow>
            <TableCell onClick={onClick}>{row?.id}</TableCell>
            <TableCell onClick={onClick}>{row?.email}</TableCell>
            <TableCell onClick={onClick}>{row?.name}</TableCell>
            <TableCell onClick={onClick}>{row?.company}</TableCell>
            <TableCell onClick={onClick}>{row?.team}</TableCell>
            <TableCell onClick={onClick}>{row?.register_date}</TableCell>
            <TableCell onClick={onClick}>{row?.approve_date}</TableCell>
            <TableCell onClick={onClick}>{row?.last_login_date}</TableCell>
            <TableCell>
                <Select
                    name="permission"
                    formik={formik}
                    items={getPermissionList()}
                    onChange={handleChangePermission}
                    sx={style.select}
                />
            </TableCell>
            <TableCell>
                {gstStatusLabel(row?.status)}
                {row?.status !== 3 && row?.status !== 1 && (
                    <Button
                        onClick={() => handleChangeStatus(getAgainstStatus(row?.status))}
                        sx={style.lineButton}
                    >
                        {gstStatusLabel(getAgainstStatus(row?.status))}
                    </Button>
                )}
            </TableCell>
            <TableCell>
                <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {editable ? <TextInput name="remark" formik={formik} /> : row?.remark}
                    <Button onClick={handleEditable} sx={style.lightButton}>
                        <img src={EditIconWhite} width={22} />
                    </Button>
                </Stack>
            </TableCell>
            <TableCell>
                <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Button onClick={handleResetPassword} sx={style.resetButton}>
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
                    <Button onClick={handleWithdraw} sx={style.lineButton}>
                        {t('withdraw', 'users')}
                    </Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default Row
