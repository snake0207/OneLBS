import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import PermissionTableRow from '#/components/permission/PermissionChangeModal/PermissionTable/PermissionTableRow'
import CommonPagination from '#/components/common/pagination/CommonPagination'
import { useGetRoleChangeUserList } from '#/hooks/queries/permission'

import t from '#/common/libs/trans'
import style from './style.module'

import { usePermissionSearchActions } from '#/store/usePermissionSearchStore'

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

    const { data } = useGetRoleChangeUserList()
    const { setPermissionSearchPage } = usePermissionSearchActions()

    const handleChangePage = (page) => {
        setPermissionSearchPage(page)
    }

    return (
        <Box>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        {permissionTableHeader.map((item) => (
                            <TableCell key={item.field}>{item.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.list.map((item) => (
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
            <CommonPagination
                dataLength={data?.totalPages}
                onChangePageFunction={handleChangePage}
            />
        </Box>
    )
}

export default PermissionTable
