import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import PermissionTableRow from '#/components/permission/PermissionChangeModal/PermissionTable/PermissionTableRow'
import CommonPagination from '#/components/common/pagination/CommonPagination'
import { useGetRoleChangeUserList } from '#/hooks/queries/permission'
import { userPermissionTableHeader } from '#/contents/tableHeader'
import { usePermissionSearchActions } from '#/store/usePermissionSearchStore'

import style from './style.module'

const PermissionTable = () => {
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
                        {userPermissionTableHeader.map((item) => (
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
