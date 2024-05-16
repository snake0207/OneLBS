import { useEffect, useState } from 'react'
import ollehMap from './olleh_map'

import { Box, ImageList, Stack, Typography } from '@mui/material'
import { Refresh } from '@mui/icons-material'

const rssiItems = [
    { img: 'hex50.png', title: 'rssi > -50' },
    { img: 'hex60.png', title: 'rssi -60 ~ -50' },
    { img: 'hex70.png', title: 'rssi -70 ~ -60' },
    { img: 'hex80.png', title: 'rssi -80 ~ -70' },
    { img: 'hex90.png', title: 'rssi -90 ~ -80' },
    { img: 'hex100.png', title: 'rssi < -90' },
]

const OllehMap = ({
    locations,
    onMarkerClick,
    bounceMarker = {},
    gridX = null,
    gridY = null,
    rssi = null,
}) => {
    const [mapInstance, setMapInstance] = useState(null)
    const [markers, setMarkers] = useState([])
    const IMAGE_URL = import.meta.env.VITE_HOME_IMAGE_URL
    // 처음 지도 로딩시에는 marker를 모두 그려준다.
    // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    let _distance = 0
    let _zoom = 14
    let _center = { latitude: locations[0].latitude, longitude: locations[0].longitude }

    if (locations.length > 1) {
        const { minLat, maxLat, minLon, maxLon } = ollehMap.minMax(locations)
        _center = { latitude: (minLat + maxLat) / 2, longitude: (minLon + maxLon) / 2 }
        _distance = ollehMap.getDistance(minLat, minLon, maxLat, maxLon)
        _zoom = ollehMap.setZoomWithDistance(_distance)
    }
    // console.log('locations : ', locations)
    // console.log(`_distance : ${_distance}, _zoom : ${_zoom}`)

    useEffect(() => {
        if (mapInstance === null || mapInstance === undefined) {
            const instance = ollehMap.initMap(
                document.getElementById('map_div'),
                ollehMap.initCenter(_center.latitude, _center.longitude),
                _zoom,
            )
            setMapInstance(instance)
        }

        return () => {
            // console.log('olleh map unmount')
            setMapInstance(null)
            setMarkers([])
        }
    }, [])

    useEffect(() => {
        if (mapInstance) {
            ollehMap.setCenter(
                mapInstance,
                ollehMap.initCenter(_center.latitude, _center.longitude),
            )

            // table click row에 대한 해당 아이콘 위치를 지도 중심으로 이동
            if (bounceMarker.latitude > 0 && bounceMarker.longitude > 0) {
                // 이전에 그려진 모든 마커를 clear
                ollehMap.clearMarker(markers)

                // 일반 마커 그리기
                const _markerArrs = locations
                    .filter((loc) => loc.id !== bounceMarker.id)
                    .map((loc) => {
                        const _marker = ollehMap.drawMarker(mapInstance, loc, false, onMarkerClick)
                        return _marker
                    })

                // bounce 마커 그리기
                const _marker = ollehMap.drawMarker(mapInstance, bounceMarker, true, onMarkerClick)
                setMarkers([..._markerArrs, _marker])

                // 중심 좌표와 지도 레벨 조정
                ollehMap.moveCenter(mapInstance, bounceMarker, 8)
                // ollehMap.setCenter(
                //     mapInstance,
                //     ollehMap.initCenter(bounceMarker.latitude, bounceMarker.longitude),
                // )
                // ollehMap.setZoomLevel(mapInstance, 8)
            } else {
                const _markerArrs = locations.map((loc) => {
                    const _marker = ollehMap.drawMarker(mapInstance, loc, false, onMarkerClick)
                    return _marker
                })
                if (markers.length === 0) setMarkers(_markerArrs)
            }
            // 전파맵 그리기
            Array.isArray(gridX) &&
                gridX.length > 0 &&
                Array.isArray(gridY) &&
                gridY.length > 0 &&
                Array.isArray(rssi) &&
                rssi.length > 0 &&
                ollehMap.drawHexGrid(mapInstance, gridX, gridY, rssi)
        }
    }, [onMarkerClick, bounceMarker, locations, mapInstance])

    // markers.length > 0 && markers.map((marker) => console.log('Markers : ', marker._id))

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%', zIndex: 1 }}>
                {Array.isArray(gridX) && Array.isArray(gridY) && Array.isArray(rssi) && (
                    <Box
                        sx={{
                            zIndex: 999,
                            bottom: 0,
                            position: 'absolute',
                            height: '100px',
                            width: '30%',
                            backgroundColor: `rgba(0, 0, 0, 0.5)`,
                        }}
                    >
                        <ImageList sx={{ ml: 2 }}>
                            {rssiItems.map((item) => (
                                <Stack
                                    direction={`row`}
                                    key={item.img}
                                    sx={{ '& .MuiImageListItem-img': { width: 20 } }}
                                >
                                    <img
                                        src={`${IMAGE_URL}${item.img}`}
                                        width={`20`}
                                        height={`20`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <Typography sx={{ ml: 1, fontSize: '12px', color: 'white' }}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                            ))}
                        </ImageList>
                    </Box>
                )}
            </div>
        </>
    )
}

export default OllehMap
