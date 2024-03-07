import { TableCell, TableRow } from '@mui/material'
import { useFormik } from 'formik'

import t from '#/common/libs/trans'
import Select from '#/components/common/Select'

const PermissionTableRow = ({
    number,
    userId,
    email,
    name,
    companyName,
    teamName,
    statusName,
    roleId,
}) => {
    const roleList = [
        { value: '25', label: '일반 사용자', key: 1 },
        { value: '26', label: '요청자', key: 2 },
        { value: '27', label: '검토자', key: 3 },
        { value: '28', label: '승인자', key: 4 },
        { value: '29', label: '운영자', key: 5 },
    ]

    const formik = useFormik({
        initialValues: {
            roleId,
        },
        onSubmit: (form) => {
            console.log(form)
            console.log(userId)
        },
    })

    return (
        <TableRow>
            <TableCell>{number}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{companyName}</TableCell>
            <TableCell>{teamName}</TableCell>
            <TableCell>{t(`${statusName}`, 'permission')}</TableCell>
            <TableCell>
                <Select name="roleId" items={roleList} formik={formik} size="small"></Select>
            </TableCell>
        </TableRow>
    )
}

export default PermissionTableRow
