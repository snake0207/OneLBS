import { TableCell, TableRow } from '@mui/material'

function Row({ row, columns, onItemClick }) {
    const handleItemClick = (row) => {
        if (onItemClick) onItemClick(row)
    }

    return (
        <TableRow onClick={() => handleItemClick(row)}>
            {columns?.map((column) => (
                <TableCell key={column?.field}>{row[column?.field]}</TableCell>
            ))}
        </TableRow>
    )
}

export default Row
