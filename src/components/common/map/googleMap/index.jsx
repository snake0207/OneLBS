import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import ClickMarker from '#/components/common/map/googleMap/marker/ClickMarker/index.jsx'
import CustomControl from '#/components/common/map/googleMap/CustomControl/index.jsx'
import CurrentLocation from '#/components/common/map/googleMap/CustomControl/CurrentLocation/index.jsx'
import CalculateDistance from '#/components/common/map/googleMap/CustomControl/CalculateDistance/index.jsx'
import MapSearch from '#/components/common/map/MapSearch/index.jsx'
import MapSearchList from '#/components/common/map/MapSearchList/index.jsx'
import MapPoiDetail from '#/components/common/map/MapPoiDetail/index.jsx'
import DisplayMarker from '#/components/common/map/googleMap/marker/DisplayMarker/index.jsx'
import SearchResultMarker from '#/components/common/map/googleMap/marker/SearchResultMarker/index.jsx'
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

const mapStyle = {
    width: '100%',
    height: '100%',
}

const seoul = {
    lat: 33.9326825,
    lng: -118.2727244,
}

/**
 * 지도 컴포넌트는 지도 외부 div의 width / height만 선언하면 됨
 * isSearch 와 isGpss는 둘 다 true면 안됨
 * 둘 다 false 거나 둘 중 하나만 true로 사용
 * 사용법 ex :
 * <Box sx={{ width: '1200px', height: '900px' }}>
 *     <GoogleMapComponent markerDataArr={sampleDataArr} isPoiSearch={true} isGpssSearch={false}/>
 * </Box>
 * @param markerDataArr 마커 데이터 array
 * @param isPoiSearch 서치 페이지에서 사용여부 false 일 때, 검색 / 검색결과 컴포넌트 비노출
 * @param isGpssSearch gpss 페이지에서 사용여부 false 일 때, 검색 / 검색결과 컴포넌트 비노출
 */
const GoogleMapComponent = ({
    markerDataArr = null,
    isPoiSearch = false,
    isGpssSearch = false,
}) => {
    const [map, setMap] = useState(null)
    // 구글 검색 결과
    const [searchResultArr, setSearchResultArr] = useState([])
    // 선택한 poi
    const [selectedPoi, setSelectedPoi] = useState(null)
    // 왼쪽 클릭
    const [clickedCoord, setClickedCoord] = useState({
        lat: null,
        lng: null,
    })
    // 오른쪽 클릭
    const [distanceCoordArr, setDistanceCoordArr] = useState([])
    // 거리측정 기능 활성 여부
    const [isDistanceFunctionOn, setIsDistanceFunctionOn] = useState(false)

    // searchResultArr 샘플용 더미데이터 푸시 추후 삭제
    useEffect(() => {
        setSearchResultArr(...searchResultArr, {
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
        })
    }, [])

    // poi 선택시 해당 poi 위치로 이동및 줌
    useEffect(() => {
        const poiArr = mapSampleData.filter((poiData) => poiData.poiId === selectedPoi)
        if (poiArr.length === 0) return
        const { lat, lon } = poiArr[0].position.center
        map.panTo({ lat: lat, lng: lon })
        map.setZoom(15)
    }, [selectedPoi])

    // 구글지도 라이브러리 init
    const { isLoaded } = useJsApiLoader({
        id: 'google-map',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
    })
    const onLoad = useCallback((map) => {
        setMap(map)
    }, [])
    const onUnmount = useCallback(() => {
        setMap(null)
    }, [])

    return (
        isLoaded && (
            <GoogleMap
                onClick={(event) => {
                    setClickedCoord({
                        lat: parseFloat(event.latLng.lat().toFixed(7)),
                        lng: parseFloat(event.latLng.lng().toFixed(7)),
                    })
                }}
                onRightClick={(event) => {
                    if (isDistanceFunctionOn) {
                        setDistanceCoordArr([
                            ...distanceCoordArr,
                            {
                                lat: parseFloat(event.latLng.lat().toFixed(7)),
                                lng: parseFloat(event.latLng.lng().toFixed(7)),
                            },
                        ])
                    }
                }}
                options={{
                    fullscreenControlOptions: {
                        position: window.google.maps.ControlPosition.TOP_RIGHT,
                    },
                    mapTypeControl: false,
                    clickableIcons: false,
                    scaleControl: true,
                }}
                mapContainerStyle={mapStyle}
                center={seoul}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* 지도내 클릭 위치 표시 마커 */}
                <ClickMarker clickedCoord={clickedCoord} setClickedCoord={setClickedCoord} />
                {/* 내 현재 위치 표시 마커 */}
                <CustomControl position="TOP_RIGHT" style={{ right: '50px !important' }}>
                    <CurrentLocation />
                </CustomControl>
                {/* 지도내 거리측정 */}
                <CustomControl position="TOP_RIGHT" style={{ right: '100px !important' }}>
                    <CalculateDistance
                        isDistanceFunctionOn={isDistanceFunctionOn}
                        setIsDistanceFunctionOn={setIsDistanceFunctionOn}
                        distanceCoordArr={distanceCoordArr}
                        setDistanceCoordArr={setDistanceCoordArr}
                    />
                </CustomControl>
                {/* poi / gpss 조회 공통 */}
                {(isPoiSearch || isGpssSearch) && (
                    <>
                        {/* 지도 검색 */}
                        <CustomControl position="TOP_LEFT" style={{ left: '0px !important' }}>
                            <MapSearch />
                        </CustomControl>
                        {/* 검색 결과 */}
                        <CustomControl
                            position="TOP_LEFT"
                            style={{ left: '0px !important', top: '320px !important' }}
                        >
                            <MapSearchList
                                searchResultArr={mapSampleData}
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                            />
                        </CustomControl>
                    </>
                )}

                {/* 상세정보 */}
                <CustomControl position="TOP_LEFT" style={{ left: '355px !important' }}>
                    {/* poi 상세  */}
                    {isPoiSearch && <MapPoiDetail selectedPoi={selectedPoi} />}
                    {/* gpss 상세 */}
                    {isGpssSearch && <MapGpssDetail selectedPoi={selectedPoi} />}
                </CustomControl>

                {/* 외부 마커 데이터 출력 */}
                {markerDataArr &&
                    markerDataArr.map((data) => (
                        <DisplayMarker key={data.poiId} markerData={data} />
                    ))}
                {/* 지도 검색 결과 마커 데이터 출력*/}
                {(isPoiSearch || isGpssSearch) &&
                    searchResultArr &&
                    mapSampleData.map((poiData) => (
                        <SearchResultMarker
                            key={poiData.poiId}
                            poiData={poiData}
                            selectedPoi={selectedPoi}
                            setSelectedPoi={setSelectedPoi}
                        />
                    ))}
            </GoogleMap>
        )
    )
}

export default GoogleMapComponent
