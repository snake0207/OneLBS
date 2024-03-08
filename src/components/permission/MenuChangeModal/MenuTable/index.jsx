import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MenuTableRow from '#/components/permission/MenuChangeModal/MenuTable/MenuTableRow'

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

    const labelColor = {
        C: '#FA5E41',
        R: '#00418D',
        U: '#5B0584',
        D: '#DB0024',
        A: '#006761',
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {menuTableHeader.map((item) => (
                        <TableCell key={item.field} colSpan={item.colSpan} align="center">
                            <Typography color={labelColor[item.code]}>{item.headerName}</Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.list.map((item) => (
                    <MenuTableRow key={item.menuOrder} menuList={item} />
                ))}
            </TableBody>
        </Table>
    )
}

export default MenuTable
