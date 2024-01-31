import { Box } from '@mui/material'
import { GoogleMap, InfoBox, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useState } from 'react'
import ClickMarker from '#/components/common/map/googleMap/ClickMarker/index.jsx'
import CustomControl from '#/components/common/map/googleMap/CustomControl/index.jsx'
import CurrentLocation from '#/components/common/map/googleMap/CustomControl/CurrentLocation/index.jsx'
import CalculateDistance from '#/components/common/map/googleMap/CustomControl/CalculateDistance/index.jsx'

const mapStyle = {
    width: '100%',
    height: '100%',
}

const seoul = {
    lat: 37.501919,
    lng: 127.008098,
}

const GoogleMapComponent = () => {
    const [map, setMap] = useState(null)
    const [clickedCoord, setClickedCoord] = useState({
        lat: null,
        lng: null,
    })
    const [distanceCoordArr, setDistanceCoordArr] = useState([])
    const [isDistanceFunctionOn, setIsDistanceFunctionOn] = useState(false)
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
            <Box sx={{ width: '800px', height: '800px' }}>
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
                    zoom={4}
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
                </GoogleMap>
            </Box>
        )
    )
}

export default GoogleMapComponent
