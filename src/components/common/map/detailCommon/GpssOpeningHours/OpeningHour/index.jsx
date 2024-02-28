import { Box, TableCell, TableRow, Typography } from '@mui/material'
import t from '#/common/libs/trans.js'

const convertDayNumToString = (num) => {
    let dayStr = ''
    switch (num) {
        case 0:
            dayStr = t('day_of_week.sun', 'common')
            break
        case 1:
            dayStr = t('day_of_week.mon', 'common')
            break
        case 2:
            dayStr = t('day_of_week.tue', 'common')
            break
        case 3:
            dayStr = t('day_of_week.wed', 'common')
            break
        case 4:
            dayStr = t('day_of_week.thu', 'common')
            break
        case 5:
            dayStr = t('day_of_week.fri', 'common')
            break
        case 6:
            dayStr = t('day_of_week.sat', 'common')
            break
    }
    return dayStr
}
const OpeningHour = ({ hour }) => {
    return (
        <TableRow>
            <TableCell>{convertDayNumToString(hour.week)}</TableCell>
            <TableCell component="td">
                <Box sx={{ display: 'flex' }}>
                    <Typography>
                        {hour.open} ~ {hour.close}
                    </Typography>
                </Box>
            </TableCell>
        </TableRow>
    )
}

export default OpeningHour
