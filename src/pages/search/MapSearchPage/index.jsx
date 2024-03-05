import t from '#/common/libs/trans'
import GoogleMapComponent from '#/components/common/map/googleMap'
import TitleBar from '#/components/common/menu/TitleBar'
import { Box, SwipeableDrawer } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/searchList/MapSearchList/index.jsx'
import { useState } from 'react'
import poiDetailData from '#/mock/data/poiDetailData.json'
import poiListData from '#/mock/data/poiListData.json'
import TuneIcon from '@mui/icons-material/Tune.js'
import { useNavigate } from 'react-router-dom'
import MapGpssDetail from '#/components/common/map/MapGpssDetail/index.jsx'
import MapPoiAdd from '#/components/common/map/MapPoiAdd/index.jsx'
import SwipeMapSearchList from '#/components/common/map/searchList/SwipeMapSearchList/index.jsx'

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
    // 신규 poi 생성 컴포넌트 표출
    const [isNewPoiCreateOpen, setIsNewPoiCreateOpen] = useState(false)
    // mobile search toggle
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
                                    searchResultArr={poiListData}
                                    selectedPoi={selectedPoi}
                                    setSelectedPoi={setSelectedPoi}
                                    isGpssSearch={true}
                                    setIsNewPoiCreateOpen={setIsNewPoiCreateOpen}
                                />
                            </Box>
                            {/* gpss 상세 */}
                            {poiDetailData && (
                                <MapGpssDetail
                                    selectedPoi={selectedPoi}
                                    setSelectedPoi={setSelectedPoi}
                                    poiData={poiDetailData}
                                />
                            )}
                            {/* 신규 poi 생성 요청 */}
                            {isNewPoiCreateOpen && (
                                <MapPoiAdd
                                    setIsOpen={setIsNewPoiCreateOpen}
                                    selectedPoi={selectedPoi}
                                />
                            )}
                        </Box>
                    </BrowserView>
                    <MobileView>
                        <TuneIcon
                            sx={{
                                fontSize: 32,
                                mt: 1,
                                ml: 1,
                                border: '1px solid black',
                            }}
                            onClick={() => setShowSearch(!showSearch)}
                        />
                        {showSearch && (
                            <Box
                                sx={{
                                    ml: '-5px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                {/* 지도 검색 */}
                                <MapSearch />
                            </Box>
                        )}
                        {/* 검색 결과 */}
                        <SwipeMapSearchList
                            searchResultArr={poiListData}
                            selectedPoi={selectedPoi}
                            setSelectedPoi={handlePOISelected}
                        />
                    </MobileView>
                </Box>
                <GoogleMapComponent
                    markerDataArr={markerSampleData}
                    selectedPoi={selectedPoi}
                    setSelectedPoi={setSelectedPoi}
                    searchResultArr={poiListData}
                />
            </Box>
        </Box>
    )
}

export default MapSearchPage
