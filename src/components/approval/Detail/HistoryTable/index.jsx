import Typography from '@mui/material/Typography'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from '@mui/material'
import t from '#/common/libs/trans.js'
import Headline from '#/components/approval/Detail/Headline/index.jsx'

import style from './style.module'

const HistoryTable = ({ historyList }) => {
    const theme = useTheme()

    return (
        <Box>
            <Headline title={t('history', 'approval')} />
            <Typography sx={{ fontSize: 15, mb: '4px', mt: '8px', color: 'text.main' }}>
                {t('total', 'approval')} {historyList?.length || 0}
                {t('case', 'approval')}
            </Typography>
            <Table size={'small'} sx={style.tableBox}>
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
        </Box>
    )
}

export default HistoryTable
