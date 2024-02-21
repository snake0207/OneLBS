import { Box, Table, TableCell, TableRow, Typography } from '@mui/material'
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
const OpeningHour = ({ hour, index, dataType, formik }) => {
    const [isHourSave, setIsHourSave] = useState(false)
    return (
        <TableRow>
            <TableCell>{convertDayNumToString(hour.week)}</TableCell>
            <TableCell component="td">
                <Box sx={{ display: 'flex' }}>
                    <Typography>
                        {hour.open} ~ {hour.close}
                    </Typography>
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
                {(isHourSave ||
                    (!isHourSave &&
                        (formik.values[`${dataType}`].openingHours[`${index}`].open !==
                            formik.initialValues[`${dataType}`].openingHours[`${index}`].open ||
                            formik.values[`${dataType}`].openingHours[`${index}`].close !==
                                formik.initialValues[`${dataType}`].openingHours[`${index}`]
                                    .close))) && (
                    <Box sx={{ display: 'flex', height: '40px' }}>
                        <FormikInput
                            name={`${dataType}.openingHours.${index}.open`}
                            IsDisabled={!isHourSave}
                        />
                        <Typography>~</Typography>
                        <FormikInput
                            name={`${dataType}.openingHours.${index}.close`}
                            IsDisabled={!isHourSave}
                        />
                    </Box>
                )}
            </TableCell>
        </TableRow>
    )
}

export default OpeningHour
