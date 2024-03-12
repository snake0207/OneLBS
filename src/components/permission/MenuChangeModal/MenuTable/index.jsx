import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MenuTableRow from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow'
import { permissionLabelColor } from '#/contents/color'
import style from './style.module'

import t from '#/common/libs/trans'

import tableData from '#/components/permission/MenuChangeModal/MenuTable/table.json'

const MenuTable = () => {
    const menuTableHeader = [
        { field: 'No', headerName: 'No.', colSpan: 1 },
        { field: 'menu', headerName: t('menu_table_header.menu', 'permission'), colSpan: 2 },
        {
            field: 'approval',
            headerName: t('menu_table_header.approval', 'permission'),
            colSpan: 1,
            code: 'A',
        },
        {
            field: 'create',
            headerName: t('menu_table_header.create', 'permission'),
            colSpan: 1,
            code: 'C',
        },
        {
            field: 'read',
            headerName: t('menu_table_header.read', 'permission'),
            colSpan: 1,
            code: 'R',
        },
        {
            field: 'update',
            headerName: t('menu_table_header.update', 'permission'),
            colSpan: 1,
            code: 'U',
        },
        {
            field: 'delete',
            headerName: t('menu_table_header.delete', 'permission'),
            colSpan: 1,
            code: 'D',
        },
    ]

    return (
        <Table sx={style.tableBox}>
            <TableHead>
                <TableRow>
                    {menuTableHeader.map((item) => (
                        <TableCell key={item.field} colSpan={item.colSpan} align="center">
                            <Typography color={permissionLabelColor[item.code]}>
                                {item.headerName}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map((item) => (
                    <MenuTableRow key={item.number} menuList={item} />
                ))}
            </TableBody>
        </Table>
    )
}

export default MenuTable
