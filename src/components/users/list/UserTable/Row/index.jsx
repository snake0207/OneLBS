import { TableRow, TableCell, Button, Stack } from '@mui/material'
import t from '#/common/libs/trans'
import { useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import TextInput from '#/components/common/input/TextInput'
import { useFormik } from 'formik'
import Select from '#/components/common/Select'
import { gstStatusLabel, getAgainstStatus } from '#/common/libs/permission'

function Row({
    row,
    onChangePermission,
    onChangeStatus,
    onChangeRemark,
    onResetPassword,
    onDeactivate,
}) {
    const formik = useFormik({
        initialValues: {
            permission: row?.permission,
            remark: row?.remark,
        },
    })

    const [editable, setEditable] = useState(false)
    const getPermissionList = () => [
        { key: 0, value: 0, label: t('all', 'users') },
        { key: 1, value: 1, label: t('general_user', 'users') },
        { key: 2, value: 2, label: t('request_user', 'users') },
        { key: 3, value: 3, label: t('reviewer', 'users') },
        { key: 4, value: 4, label: t('approver', 'users') },
        { key: 5, value: 5, label: t('admin', 'users') },
    ]

    const handleChangePermission = (item) => {
        onChangePermission(row, item)
    }

    const handleChangeStatus = (status) => {
        onChangeStatus(row, status)
    }

    const handleEditable = () => {
        setEditable(!editable)

        if (editable) {
            if (onChangeRemark) onChangeRemark(row, formik.values.remark)
        }
    }

    const handleResetPassword = (event) => {
        event.preventDefault()
        if (onResetPassword) onResetPassword(row)
    }

    const handleDeactivate = (event) => {
        event.preventDefault()
        if (onDeactivate) onDeactivate(row)
    }

    return (
        <TableRow>
            <TableCell>{row?.id}</TableCell>
            <TableCell>{row?.email}</TableCell>
            <TableCell>{row?.name}</TableCell>
            <TableCell>{row?.company}</TableCell>
            <TableCell>{row?.team}</TableCell>
            <TableCell>{row?.register_date}</TableCell>
            <TableCell>{row?.approve_date}</TableCell>
            <TableCell>{row?.last_login_date}</TableCell>
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
                    <Button onClick={handleDeactivate}>{t('deactivate', 'users')}</Button>
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default Row
