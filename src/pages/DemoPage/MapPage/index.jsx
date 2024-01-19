import MapCategory from '#/components/common/map/MapCategory.jsx'
import Box from '@mui/material/Box'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined.js'
import Typography from '@mui/material/Typography'
import MapSearch from '#/components/common/map/MapSearch.jsx'

const MapPage = () => {
    return (
        <div>
            <h1>map page</h1>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    display: 'inline-block',
                }}
            >
                <Typography sx={{ color: '#ffffff' }}>Map Category Icon</Typography>
                <MapCategory categoryName={'parking'}>
                    <DirectionsCarFilledOutlinedIcon
                        sx={{ width: '16px', height: '16px', gap: '6px' }}
                    />
                </MapCategory>
            </Box>
            <Box>
                <Typography>Map Search Component</Typography>
                <MapSearch />
            </Box>
        </div>
    )
}

export default MapPage
