import t from '#/common/libs/trans'
import GoogleMapComponent from '#/components/common/map/googleMap'
import TitleBar from '#/components/common/menu/TitleBar'
import { Box, Button, Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/searchList/MapSearchList/index.jsx'
import poiListData from '#/mock/data/poiListData.json'
import MapPoiDetail from '#/components/common/map/MapPoiDetail/index.jsx'
import poiDetailData from '#/mock/data/poiMapDetailData.json'
import PoiSearchIcon from '#/assets/poiSearchIcon.svg'
import PoiSearchIconDark from '#/assets/poiSearchIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'
import FilterIcon from '#/assets/filterIcon.svg'
import SwipeMapSearchList from '#/components/common/map/searchList/SwipeMapSearchList/index.jsx'

function POISearchPage() {
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
        navigate(`/poi-view/map/${id}`)
    }
    const { themeMode } = useLayoutStore()
    return (
        <Box>
            <MobileView>
                <Icon
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: ' 75px',
                        zIndex: '4',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={PoiSearchIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={PoiSearchIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                </Icon>
            </MobileView>
            <TitleBar title={t('top_menu.poi_search')} />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 'calc(100vh - 120px)',
                    '@media (max-width:1024px)': {
                        height: 'calc(100vh - 153px)',
                    },
                }}
            >
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
                                />
                            </Box>
                            {poiDetailData && (
                                <MapPoiDetail
                                    poiData={poiDetailData}
                                    selectedPoi={selectedPoi}
                                    setSelectedPoi={setSelectedPoi}
                                />
                            )}
                        </Box>
                    </BrowserView>
                    <MobileView>
                        <Button
                            onClick={() => setShowSearch(!showSearch)}
                            sx={{
                                width: '40px',
                                height: '40px',
                                minWidth: '40px',
                                mt: '10px',
                                ml: '10px',
                                borderRadius: '8px',
                                backgroundColor: '#0057BB',
                                boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                                ZIndex: '2',
                                '&:hover': {
                                    backgroundColor: '#0057BB',
                                },
                            }}
                        >
                            <img src={FilterIcon} />
                        </Button>
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
                    selectedPoi={selectedPoi}
                    setSelectedPoi={setSelectedPoi}
                    searchResultArr={poiListData}
                />
            </Box>
        </Box>
    )
}

export default POISearchPage
