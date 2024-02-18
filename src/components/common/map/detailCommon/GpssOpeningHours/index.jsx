import { Box, Typography } from '@mui/material'
import OpeningHour from '#/components/common/map/detailCommon/GpssOpeningHours/OpeningHour/index.jsx'

const GpssOpeningHours = ({ openingHoursData }) => {
    return (
        <Box>
            <Typography> 이용시간 </Typography>
            {openingHoursData.map((hour, idx) => (
                <OpeningHour hour={hour} index={idx} key={idx} />
            ))}
        </Box>
    )
}

export default GpssOpeningHours
