import MapCategory from '#/components/common/map/MapCategory/index.jsx'
import Box from '@mui/material/Box'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined.js'
import Typography from '@mui/material/Typography'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/MapSearchList/index.jsx'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import MapPoiDetail from '#/components/common/map/MapPoiDetail/index.jsx'

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
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map Search Component</Typography>
                    <MapSearch />
                </Box>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map List Component with No Result</Typography>
                    <MapSearchList isResultNon={true} />
                    <Typography>Map List Component with Result (스크롤 TOP 버튼 존재)</Typography>
                    <MapSearchList isResultNon={false} />
                </Box>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map POI Detail Component</Typography>
                    <MapPoiDetail />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map InfoWindow Component</Typography>
                    <MapInfoWindow />
                </Box>
            </Box>
        </div>
    )
}

export default MapPage
