import { TableRow, TableCell, Button, Stack } from '@mui/material'
import t from '#/common/libs/trans'
import { useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import Select from '#/components/common/Select'
import { getPermissionList, gstStatusLabel, getAgainstStatus } from '#/common/libs/permission'

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
                />
            </TableCell>
            <TableCell>
                {gstStatusLabel(row?.status)}
                {row?.status !== 3 && row?.status !== 1 && (
                    <Button onClick={() => handleChangeStatus(getAgainstStatus(row?.status))}>
                        {gstStatusLabel(getAgainstStatus(row?.status))}
                    </Button>
                )}
            </TableCell>
            <TableCell>
                <Stack direction={'row'}>
                    {editable ? <TextInput name="remark" formik={formik} /> : row?.remark}
                    <ErrorOutlineIcon onClick={handleEditable} />
                </Stack>
            </TableCell>
            <TableCell>
                <Stack direction={'row'}>
                    <Button onClick={handleResetPassword}>{t('reset_password', 'users')}</Button>
                    <Button onClick={handleWithdraw}>{t('withdraw', 'users')}</Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default Row
