import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import t from '#/common/libs/trans'
import Row from './Row'
import CommonPagination from '#/components/common/pagination/CommonPagination'

import style from './style.module'

function IpTabel({ rows, onNextPage, onEdit, onDelete }) {
    const handleEdit = (values) => {
        if (onEdit) onEdit(values)
    }

    const handleDelete = (values) => {
        if (onDelete) onDelete(values)
    }

    const handleNextPage = (page) => {
        if (onNextPage) onNextPage(page)
    }

    return (
        <Box sx={style.contentBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('no', 'users')}</TableCell>
                        <TableCell>{t('email', 'users')}</TableCell>
                        <TableCell>{t('name', 'users')}</TableCell>
                        <TableCell>{t('team_name', 'users')}</TableCell>
                        <TableCell>{t('permission', 'users')}</TableCell>
                        <TableCell>{t('ip', 'users')}</TableCell>
                        <TableCell>{t('description', 'users')}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <Row
                            key={row?.id}
                            row={row}
                            onEdit={(values) => handleEdit(values)}
                            onDelete={(values) => handleDelete(values)}
                        />
                    ))}
                </TableBody>
            </Table>
            <CommonPagination dataLength={rows?.length} onChangePageFunction={handleNextPage} />
        </Box>
    )
}

export default IpTabel
