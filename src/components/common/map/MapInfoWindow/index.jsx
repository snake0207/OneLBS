import { Box, Grid, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const MapInfoWindow = ({ markerData }) => {
    return (
        markerData && (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#444' }}>
                        {markerData.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '12px', color: '#444' }}>
                        {markerData.position.center.lat.toFixed(7)},
                        {markerData.position.center.lon.toFixed(7)}
                    </Typography>
                </Box>
            </Box>
        )
    )
}

export default MapInfoWindow
