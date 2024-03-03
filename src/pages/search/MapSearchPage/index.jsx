import t from '#/common/libs/trans'
import GoogleMapComponent from '#/components/common/map/googleMap'
import TitleBar from '#/components/common/menu/TitleBar'
import { Box, Stack } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/MapSearchList/index.jsx'
import { useEffect, useState } from 'react'
import poiDetailData from '#/mock/data/poiDetailData.json'
import TuneIcon from '@mui/icons-material/Tune.js'
import { useNavigate } from 'react-router-dom'
import MapGpssDetail from '#/components/common/map/MapGpssDetail/index.jsx'

const mapSampleData = [
    {
        poiId: 'ChIJm8fw1mfJwoARNzsUmsgD-Ig',
        address: '2268 Firestone Blvd, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.9578479,
                lon: -118.23168319999998,
            },
        },
        title: 'Blink Charging Station',
        category: 'ev',
    },
    {
        poiId: 'ChIJSblb29_LwoARUQWFAR785F4',
        address: '2365 E Century Blvd, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.946781099999995,
                lon: -118.22994750000001,
            },
        },
        title: 'EVCS Charging Station',
        category: 'ev',
    },
    {
        poiId: 'ChIJ5xP4utnLwoARR5thyWQMcI0',
        address: '10320 Wilmington Ave, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.942737099999995,
                lon: -118.2389758,
            },
        },
        title: 'Electric Circuit Charging Station',
        category: 'ev',
    },
    {
        poiId: 'ChIJS-pkdn7JwoARzkOPLkLB0LM',
        address: '1501 E Century Blvd, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.945758000000005,
                lon: -118.246968,
            },
        },
        title: 'Flo Charging Station',
        category: 'ev',
    },
    {
        poiId: 'ChIJMS-G-n3JwoAR2TPD7A6yXoY',
        address: '10104 Compton Ave, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.9448115,
                lon: -118.246128,
            },
        },
        title: 'ChargePoint Charging Station',
        category: 'ev',
    },
    {
        poiId: 'ChIJm6KTpoiIdnLwoARwSZzuHOvyOU',
        address: '10455 Wilmington Ave, Los Angeles, CA 90002, USA',
        position: {
            center: {
                lat: 33.941035899999996,
                lon: -118.239077,
            },
        },
        title: 'Electric Circuit Charging Station',
        category: 'ev',
    },
]

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

function MapSearchPage() {
    const navigate = useNavigate()
    // 검색 결과
    const [searchResultArr, setSearchResultArr] = useState([])
    // TODO 장소 상세 정보 호출 api 연동
    // 선택한 poi
    const [selectedPoi, setSelectedPoi] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    // mobile detail navigate
    const handlePOISelected = (id) => {
        setSelectedPoi(id)
        navigate(`/search-management/map/${id}`)
    }
    return (
        <Box>
            <TitleBar title={t('top_menu.search_management')} />
            <Box sx={{ position: 'relative', width: '100%', height: 'calc(100vh - 120px)' }}>
                <Box sx={{ position: 'absolute', top: 0, zIndex: 1000 }}>
                    <BrowserView>
                        <Box sx={{ display: 'flex', flexDirection: 'colunm' }}>
                            <Box>
                                {/* 지도 검색 */}
                                <MapSearch />
                                {/* 검색 결과 */}
                                <MapSearchList
                                    searchResultArr={mapSampleData}
                                    selectedPoi={selectedPoi}
                                    setSelectedPoi={setSelectedPoi}
                                />
                            </Box>
                            {/* gpss 상세 */}
                            <MapGpssDetail
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                                poiData={poiDetailData}
                            />
                        </Box>
                    </BrowserView>
                    <MobileView>
                        <TuneIcon
                            sx={{
                                fontSize: 32,
                                mt: 1,
                                ml: 2,
                                mb: 1,
                                border: '1px solid black',
                            }}
                            onClick={() => setShowSearch(!showSearch)}
                        />
                        {showSearch && (
                            <Stack spacing={20} sx={{ ml: 2, mr: 2 }}>
                                {/* 지도 검색 */}
                                <MapSearch />
                                {/* 검색 결과 */}
                                <MapSearchList
                                    searchResultArr={mapSampleData}
                                    selectedPoi={selectedPoi}
                                    setSelectedPoi={handlePOISelected}
                                />
                            </Stack>
                        )}
                    </MobileView>
                </Box>
                <GoogleMapComponent
                    markerDataArr={markerSampleData}
                    selectedPoi={selectedPoi}
                    setSelectedPoi={setSelectedPoi}
                    searchResultArr={mapSampleData}
                />
            </Box>
        </Box>
    )
}

export default MapSearchPage
