import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import ClickMarker from '#/components/common/map/googleMap/marker/ClickMarker/index.jsx'
import CustomControl from '#/components/common/map/googleMap/CustomControl/index.jsx'
import CurrentLocation from '#/components/common/map/googleMap/CustomControl/CurrentLocation/index.jsx'
import CalculateDistance from '#/components/common/map/googleMap/CustomControl/CalculateDistance/index.jsx'
import DisplayMarker from '#/components/common/map/googleMap/marker/DisplayMarker/index.jsx'
import SearchResultMarker from '#/components/common/map/googleMap/marker/SearchResultMarker/index.jsx'
import { BrowserView } from 'react-device-detect'

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
 * 전체화면을 위해 width: 100%,로 처리할 수 있으나 height의 경우 calc를 사용해야 화면에 제대로 랜더링 할 수 있음
 * 사용법 ex :
 * <Box sx={{ width: '1200px', height: 'calc(100vh - 120px)'' }}>
 *     <GoogleMapComponent markerDataArr={sampleDataArr}/>
 * </Box>
 * @param markerDataArr 마커 데이터 array
 * @param isPoiSearch 서치 페이지에서 사용여부 false 일 때, 검색 / 검색결과 컴포넌트 비노출
 * @param isGpssSearch gpss 페이지에서 사용여부 false 일 때, 검색 / 검색결과 컴포넌트 비노출
 */
const GoogleMapComponent = ({
    markerDataArr = null,
    searchResultArr,
    selectedPoi,
    setSelectedPoi,
}) => {
    const [map, setMap] = useState(null)

    // 왼쪽 클릭
    const [clickedCoord, setClickedCoord] = useState({
        lat: null,
        lng: null,
    })

    // 오른쪽 클릭
    const [distanceCoordArr, setDistanceCoordArr] = useState([])
    // 거리측정 기능 활성 여부
    const [isDistanceFunctionOn, setIsDistanceFunctionOn] = useState(false)

    // poi 선택시 해당 poi 위치로 이동및 줌
    useEffect(() => {
        const poiArr = searchResultArr.filter((poiData) => poiData.poiId === selectedPoi)
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

    const getMapBounds = () => {
        if (!map) return
        const bounds = map.getBounds()
        console.log(bounds.getNorthEast().lat())
        console.log(bounds.getNorthEast().lng())
        console.log(bounds.getSouthWest().lat())
        console.log(bounds.getSouthWest().lng())
    }

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
                onIdle={getMapBounds}
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
                <BrowserView>
                    <CustomControl position="TOP_RIGHT" style={{ right: '100px !important' }}>
                        <CalculateDistance
                            isDistanceFunctionOn={isDistanceFunctionOn}
                            setIsDistanceFunctionOn={setIsDistanceFunctionOn}
                            distanceCoordArr={distanceCoordArr}
                            setDistanceCoordArr={setDistanceCoordArr}
                        />
                    </CustomControl>
                </BrowserView>
                {/* 외부 마커 데이터 출력 */}
                {markerDataArr &&
                    markerDataArr.map((data) => (
                        <DisplayMarker key={data.poiId} markerData={data} />
                    ))}
                {/* 지도 검색 결과 마커 데이터 출력*/}
                {searchResultArr &&
                    searchResultArr.map((poiData) => (
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
