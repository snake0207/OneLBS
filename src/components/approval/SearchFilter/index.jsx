import { Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material'

const SearchFilter = () => {
    return (
        <TableContainer>
            <Table
                size="small"
                sx={{
                    border: '1px solid #e0e0e0',
                }}
            >
                <TableBody>
                    <TableRow>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            명칭
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            국가
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            상태
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            신청자
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            검토자
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            승인자
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            요청일
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            검토일
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                        <TableCell
                            component="th"
                            sx={{ borderInline: '1px solid #e0e0e0', minWidth: '6rem' }}
                        >
                            반려/승인일
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic" variant="outlined" size="small" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SearchFilter
