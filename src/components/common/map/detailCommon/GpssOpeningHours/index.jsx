import { Box, Table, TableHead, Typography } from '@mui/material'
import OpeningHour from '#/components/common/map/detailCommon/GpssOpeningHours/OpeningHour/index.jsx'
import t from '#/common/libs/trans.js'

import style from './style.module'

/**
 * dataType: 날짜 데이터 표시 분류 evCharging, h2Charging, parking ...
 * openingHoursData: 운영일자 데이터 array
 */
const GpssOpeningHours = ({ dataType, openingHoursData, formik }) => {
    return (
        <Box>
            <Typography sx={style.title}>{t('opening_hours', 'gpss')}</Typography>
            <Table sx={style.tableBox}>
                <TableHead>
                    {openingHoursData.map((hour, idx) => (
                        <OpeningHour
                            formik={formik}
                            hour={hour}
                            index={idx}
                            dataType={dataType}
                            key={idx}
                        />
                    ))}
                </TableHead>
            </Table>
        </Box>
    )
}

export default GpssOpeningHours
