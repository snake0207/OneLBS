import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

const MapPoiContent = ({ name, address, isLast }) => {
    return (
        <Box>
            <Typography variant={'h6'}>{name}</Typography>
            <Typography sx={{ color: '#666666', fontWeight: 300 }}>{address}</Typography>
            {isLast ? '' : <Divider />}
        </Box>
    )
}

export default MapPoiContent
