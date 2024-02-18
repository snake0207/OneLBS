import { Box, Typography } from '@mui/material'
import OpeningHour from '#/components/common/map/detailCommon/GpssOpeningHours/OpeningHour/index.jsx'

/**
 * dataType: 날짜 데이터 표시 분류 evCharging, h2Charging, parking ...
 * openingHoursData: 운영일자 데이터 array
 */
const GpssOpeningHours = ({ dataType, openingHoursData, formik }) => {
    return (
        <Box>
            <Typography> 이용시간 </Typography>
            {openingHoursData.map((hour, idx) => (
                <OpeningHour
                    formik={formik}
                    hour={hour}
                    index={idx}
                    dataType={dataType}
                    key={idx}
                />
            ))}
        </Box>
    )
}

export default GpssOpeningHours
