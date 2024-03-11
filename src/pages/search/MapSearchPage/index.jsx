import t from '#/common/libs/trans'
import GoogleMapComponent from '#/components/common/map/googleMap'
import TitleBar from '#/components/common/menu/TitleBar'

import { Box, Button, Icon } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/searchList/MapSearchList/index.jsx'
import { useEffect, useState } from 'react'
import poiDetailData from '#/mock/data/poiDetailData.json'
import poiListData from '#/mock/data/poiListData.json'
import { useNavigate } from 'react-router-dom'
import MapGpssDetail from '#/components/common/map/MapGpssDetail/index.jsx'
import MapPoiAdd from '#/components/common/map/MapPoiAdd/index.jsx'
import SearchIcon from '#/assets/searchIcon.svg'
import SearchIconDark from '#/assets/searchIconDark.svg'
import FilterIcon from '#/assets/filterIcon.svg'
import useLayoutStore from '#/store/useLayoutStore'
import SwipeMapSearchList from '#/components/common/map/searchList/SwipeMapSearchList/index.jsx'
import { useFormik } from 'formik'
import { mapSearchSchema } from '#/contents/validationSchema.js'
import {
    useGetGpssSuggestions,
    usePostGpssDetail,
    usePostGpssSearch,
} from '#/hooks/queries/gpss.js'
import useMapStore from '#/store/useMapStore.js'
import { useDebounce } from '#/hooks/useDebounce.js'

function MapSearchPage() {
    const navigate = useNavigate()
    const { themeMode } = useLayoutStore()
    // 선택한 poi
    const [selectedPoi, setSelectedPoi] = useState(null)
    // 신규 poi 생성 컴포넌트 표출
    const [isNewPoiCreateOpen, setIsNewPoiCreateOpen] = useState(false)
    // mobile search toggle
    const [showSearch, setShowSearch] = useState(false)
    const { actions: mapStoreActions, lat, lon, seLat, seLon, neLat, neLon } = useMapStore()

    const searchFormik = useFormik({
        initialValues: {
            country: [],
            lat: '',
            lon: '',
            category: [],
            keyword: '',
            language: 'ENG',
            vehicleCode: 'ICE',
            polygonFilter: [],
        },
        validationSchema: mapSearchSchema,
        onSubmit: (form) => {
            console.log(form)
            console.log('mapBound =>', seLat, seLon, neLat, neLon)
        },
    })
    // 추천어 검색
    const { data: suggestionsData } = useGetGpssSuggestions(useDebounce(searchFormik.values, 400))
    // poi 리스트 검색
    const {
        data: poiListData,
        refetch: fetchPoiList,
        fetchNextPage,
    } = usePostGpssSearch(searchFormik.values)
    // poi 상세 검색
    const { data: poiDetailData, refetch: fetchPoiDetail } = usePostGpssDetail({
        ...searchFormik.values,
        poiId: [selectedPoi],
    })

    // poi 리스트 검색
    const onHandleSubmitSearch = () => {
        fetchPoiList()
    }
    // poi 상세 검색
    useEffect(() => {
        if (selectedPoi) fetchPoiDetail()
    }, [selectedPoi])

    // 위경도 좌표 초기화
    useEffect(() => {
        mapStoreActions.resetCoordinates()
        mapStoreActions.resetMapBounds()
    }, [])
    useEffect(() => {
        searchFormik.setFieldValue('lat', lat)
        searchFormik.setFieldValue('lon', lon)
    }, [lat])
    useEffect(() => {
        searchFormik.setFieldValue('polygonFilter', [seLat, seLon, neLat, neLon])
    }, [seLat])

    // mobile detail navigate
    const handlePOISelected = (id) => {
        setSelectedPoi(id)
        navigate(`/search-management/map/${id}`)
    }

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
                        <img src={SearchIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={SearchIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                </Icon>
            </MobileView>
            <TitleBar title={t('top_menu.search_management')} />
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
                                <MapSearch
                                    formik={searchFormik}
                                    onHandleSubmitSearch={onHandleSubmitSearch}
                                />
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
                            isGpssSearch={true}
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

export default MapSearchPage
