import { Box, Typography } from '@mui/material'
import t from '#/common/libs/trans.js'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'
import FormikInput from '#/components/common/input/FormikInput/index.jsx'
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
const OpeningHour = ({ hour, index }) => {
    const [isHourSave, setIsHourSave] = useState(false)
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Box>
                    <Typography>{convertDayNumToString(hour.week)}</Typography>
                </Box>
                <Box>
                    <Typography>
                        {hour.open} ~ {hour.close}
                    </Typography>
                </Box>
                <IconButton
                    sx={{
                        ml: 'auto',
                        minWidth: '15px',
                        width: '30px',
                        minHeight: '15px',
                        height: '30px',
                    }}
                    onClick={() => setIsHourSave(!isHourSave)}
                >
                    {isHourSave ? <SaveIcon /> : <EditIcon />}
                </IconButton>
            </Box>
            {isHourSave && (
                <Box sx={{ display: 'flex', height: '40px' }}>
                    <FormikInput
                        name={`evCharging.openingHours.${index}.open`}
                        IsDisabled={!isHourSave}
                    />
                    <Typography>~</Typography>
                    <FormikInput
                        name={`evCharging.openingHours.${index}.close`}
                        IsDisabled={!isHourSave}
                    />
                </Box>
            )}
        </>
    )
}

export default OpeningHour
