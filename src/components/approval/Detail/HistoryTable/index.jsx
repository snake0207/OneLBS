import Typography from '@mui/material/Typography'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { tokens } from '#/theme/index.js'

const HistoryTable = ({ historyList }) => {
    return (
        <>
            <Typography>총 {historyList?.length || 0}건</Typography>
            <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                <TableHead sx={{ backgroundColor: tokens.grey[100] }}>
                    <TableRow>
                        <TableCell align={'center'}>일시</TableCell>
                        <TableCell align={'center'}>상태</TableCell>
                        <TableCell align={'center'}>이력</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {historyList.map((history, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align={'center'}>{history.date}</TableCell>
                                <TableCell align={'center'}>{history.status}</TableCell>
                                <TableCell>{history.history}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}

export default HistoryTable
