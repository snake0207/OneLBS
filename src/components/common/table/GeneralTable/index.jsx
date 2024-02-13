import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import CommonPagination from '../../pagination/CommonPagination'
import Row from './Row'

import style from './style.module'

function GeneralTable({ columns, rows, onItemClick, onPageChange }) {
    const handleItemClick = (row) => {
        if (onItemClick) onItemClick(row)
    }

    const handlePageChange = (page) => {
        if (onPageChange) onPageChange(page)
    }

    return (
        <Box sx={style.contentBox}>
            <Table sx={style.tableBox}>
                <TableHead>
                    <TableRow>
                        {columns?.map((column) => (
                            <TableCell key={column?.field}>{column?.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, index) => (
                        <Row
                            key={index}
                            row={row}
                            columns={columns}
                            onItemClick={handleItemClick}
                        />
                    ))}
                </TableBody>
            </Table>
            <CommonPagination dataLength={rows?.length} onChangePageFunction={handlePageChange} />
        </Box>
    )
}

export default GeneralTable
