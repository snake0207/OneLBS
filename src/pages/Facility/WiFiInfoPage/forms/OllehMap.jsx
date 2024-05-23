import { useEffect, useState } from 'react'
import ollehMap from '#/components/common/map/ollehMap/olleh_map'

import { Box, ImageList, Stack, Typography } from '@mui/material'
import PositionBlackIcon from '#/components/common/map/ollehMap/img/position_black.png'

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
    modeCreate = false,
    onMapClick,
    gridX = null,
    gridY = null,
    rssi,
}) => {
    const [mapInstance, setMapInstance] = useState(null)
    const IMAGE_URL = import.meta.env.VITE_HOME_IMAGE_URL
    // 처음 지도 로딩시에는 marker를 모두 그려준다.
    // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    const _zoom = 13
    const _center = {
        longitude: locations[0].longitude,
        latitude: locations[0].latitude,
        title: locations[0].title,
    }

    console.log('locations : ', locations)

    let _marker

    const callback = (map, coord, onMapClick) => {
        if (_marker) {
            _marker.detach()
            _marker.setMap(null)
            console.log('[detach marker] : ', _marker._id)
        }

        let { y: latitude, x: longitude } = ollehMap.getLatLng(coord)
        latitude = latitude.toFixed(6)
        longitude = longitude.toFixed(6)

        const _wgs84 = {
            latitude,
            longitude,
            title: `${latitude},${longitude}`,
        }
        _marker = ollehMap.drawMarker(map, _wgs84, false)
        _marker.setIcon(PositionBlackIcon)
        console.log('[create click-marker] : ', _marker._id)
        onMapClick(_wgs84)
    }

    const clearMarker = () => {
        if (_marker) {
            console.log('[destory] : ', _marker._id)
            _marker.detach()
            _marker.setMap(null)
        }
    }

    useEffect(() => {
        if (!mapInstance) {
            const map = ollehMap.initMap(
                document.getElementById('map_div'),
                ollehMap.initCenter(_center.latitude, _center.longitude),
                _zoom,
            )
            // MAP 생성시 click 이벤트 활성화
            map.onEvent('click', (e) => {
                console.log('MAP Click Enable')
                callback(map, e.getCoord(), onMapClick)
            })
            setMapInstance(map)
        }

        return () => {
            if (mapInstance) {
                console.log('mapInstance unmount...')
                setMapInstance(null)
            }
        }
    }, [])

    useEffect(() => {
        if (mapInstance) {
            if (!modeCreate && (_marker === null || _marker === undefined)) {
                _marker = ollehMap.drawMarker(mapInstance, _center, false)
                console.log('[create default-marker] : ', _marker._id)
            }

            Array.isArray(gridX) &&
                gridX.length > 0 &&
                Array.isArray(gridY) &&
                gridY.length > 0 &&
                Array.isArray(rssi) &&
                rssi.length > 0 &&
                ollehMap.drawHexGrid(mapInstance, gridX, gridY, rssi)
        }
        return () => {
            clearMarker()
        }
    }, [locations, mapInstance])

    // 등록 화면일 경우에만 click 이벤트 활성화
    // useEffect(() => {
    //     if (modeCreate) {
    //         mapInstance.onEvent('click', (e) => {
    //             console.log('Click event occured')
    //             callback(mapInstance, e.getCoord(), onMapClick)
    //         })
    //     } else {
    //         console.log('olleh map unregister event')
    //         if (mapInstance) mapInstance.unsubscribeEvent('click')
    //     }

    //     return () => {
    //         clearMarker()
    //     }
    // }, [modeCreate])

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%', zIndex: 1 }}>
                {Array.isArray(gridX) &&
                    gridX.length > 0 &&
                    Array.isArray(gridY) &&
                    Array.isArray(rssi) && (
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
                                        <Typography
                                            sx={{ ml: 1, fontSize: '12px', color: 'white' }}
                                        >
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
