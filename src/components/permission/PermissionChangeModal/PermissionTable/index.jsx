import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

import t from '#/common/libs/trans'

import tableData from '#/components/permission/PermissionChangeModal/PermissionTable/table.json'
import PermissionTableRow from '#/components/permission/PermissionChangeModal/PermissionTable/PermissionTableRow'

const PermissionTable = () => {
    const permissionTableHeader = [
        { field: 'No', headerName: 'No.' },
        { field: 'email', headerName: t('email', 'permission') },
        { field: 'name', headerName: t('name', 'permission') },
        { field: 'company_name', headerName: t('company_name', 'permission') },
        { field: 'team_name', headerName: t('team_name', 'permission') },
        { field: 'status', headerName: t('status', 'permission') },
        { field: 'permission', headerName: t('permission', 'permission') },
    ]

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        {permissionTableHeader.map((item) => (
                            <TableCell key={item.field}>{item.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.list.map((item) => (
                        <PermissionTableRow
                            key={item.number}
                            number={item.number}
                            companyName={item.companyName}
                            email={item.email}
                            name={item.name}
                            statusName={item.statusName}
                            teamName={item.teamName}
                            userId={item.userId}
                            roleId={item.roleId}
                        />
                    ))}
                </TableBody>
            </Table>
        </Box>
    )
}

export default PermissionTable
