import MapCategory from '#/components/common/map/MapCategory/index.jsx'
import Box from '@mui/material/Box'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined.js'
import Typography from '@mui/material/Typography'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/MapSearchList/index.jsx'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import MapPoiDetail from '#/components/common/map/MapPoiDetail/index.jsx'
import MapGpssDetail from '#/components/common/map/MapGpssDetail/index.jsx'
import GoogleMapComponent from '#/components/common/map/googleMap/index.jsx'

const markerSampleData = [
    {
        poiId: 'ChIJsTbYQbjLwoARpbZRYUbnEP4',
        address: '12021 Wilmington Ave, Los Angeles, CA 90059, USA',
        position: {
            center: {
                lat: 33.9243791,
                lon: -118.23941569999998,
            },
        },
        title: 'PowerFlex Charging Station',
        category: 'ev',
    },
]

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
                    <MapSearchList searchResultArr={[]} />
                    <Typography>Map List Component with Result (스크롤 TOP 버튼 존재)</Typography>
                    <MapSearchList searchResultArr={markerSampleData} />
                </Box>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map POI Detail Component</Typography>
                    <MapPoiDetail />
                </Box>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map GPSS Detail Component</Typography>
                    <MapGpssDetail />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 2 }}>
                    <Typography>Map InfoWindow Component</Typography>
                    <MapInfoWindow />
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 2 }}>
                    <Typography>Google Map Component</Typography>
                    <Box sx={{ width: '1600px', height: '900px' }}>
                        <GoogleMapComponent markerDataArr={markerSampleData} isGpssSearch={true} />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default MapPage
