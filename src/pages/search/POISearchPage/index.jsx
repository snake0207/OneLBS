import t from '#/common/libs/trans'
import GoogleMapComponent from '#/components/common/map/googleMap'
import TitleBar from '#/components/common/menu/TitleBar'
import { Box } from '@mui/material'

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

function POISearchPage() {
    return (
        <Box>
            <TitleBar title={t('top_menu.poi_search')} />
            <Box sx={{ width: '100%', height: 'calc(100vh - 120px)' }}>
                <GoogleMapComponent markerDataArr={markerSampleData} isPoiSearch={true} />
            </Box>
        </Box>
    )
}

export default POISearchPage
