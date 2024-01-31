import { Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import t from '#/common/libs/trans'
import Row from './Row'

/*
[
    {
        "id": 1,
        "email": "admin@email.com",
        "name": "관리자",
        "company": "현대자동차",
        "team": "기술연구소",
        "register_date": "2021-09-01 12:00:00",
        "approve_date": "2021-09-01 12:00:00",
        "last_login_date": "2021-09-01 12:00:00",
        "permission": 0,
        "status": 0,
        "remark": "비고"
    }
]
*/

function UserTable({ rows }) {
    const handleResetPassword = (row) => {
        console.log('handleResetPassword', row)
    }

    const handleDeactivate = (row) => {
        console.log('handleDeactivate', row)
    }

    const handleChangePermission = (row, value) => {
        console.log('handleChangePermission', row, value)
    }

    const handleChangeStatus = (row, value) => {
        console.log('handleChangeStatus', row, value)
    }

    const handleChangeRemark = (row, value) => {
        console.log('handleChangeRemark', row, value)
    }

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('no', 'users')}</TableCell>
                        <TableCell>{t('email', 'users')}</TableCell>
                        <TableCell>{t('name', 'users')}</TableCell>
                        <TableCell>{t('company_name', 'users')}</TableCell>
                        <TableCell>{t('team_name', 'users')}</TableCell>
                        <TableCell>{t('register_date', 'users')}</TableCell>
                        <TableCell>{t('approve_date', 'users')}</TableCell>
                        <TableCell>{t('last_login_date', 'users')}</TableCell>
                        <TableCell>{t('permission', 'users')}</TableCell>
                        <TableCell>{t('status', 'users')}</TableCell>
                        <TableCell>{t('remark', 'users')}</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <Row
                            key={row?.id}
                            row={row}
                            onChangePermission={handleChangePermission}
                            onChangeStatus={handleChangeStatus}
                            onChangeRemark={handleChangeRemark}
                            onResetPassword={handleResetPassword}
                            onDeactivate={handleDeactivate}
                        />
                    ))}
                </TableBody>
            </Table>
        </Box>
    )
}

export default UserTable
