import Typography from '@mui/material/Typography'
import { Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'

const HistoryTable = ({ historyList }) => {
    const theme = useTheme()

    return (
        <>
            <Typography>
                {t('total', 'approval')} {historyList?.length || 0}
                {t('case', 'approval')}
            </Typography>
            <Table size={'small'} border={1} sx={{ borderColor: 'divider' }}>
                <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
                    <TableRow>
                        <TableCell align={'center'}>{t('date', 'approval')}</TableCell>
                        <TableCell align={'center'}>{t('state', 'approval')}</TableCell>
                        <TableCell align={'center'}>{t('history', 'approval')}</TableCell>
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
