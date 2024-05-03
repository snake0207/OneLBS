import { useEffect, useState } from 'react'
import ollehMap from './olleh_map'
import PositionIcon from '/src/components/common/map/ollehMap/img/position_red.png'
import { Box, ImageList, Stack, Typography } from '@mui/material'

const rssiItems = [
    { img: 'hex50.png', title: 'rssi > -50' },
    { img: 'hex60.png', title: 'rssi -60 ~ -50' },
    { img: 'hex70.png', title: 'rssi -70 ~ -60' },
    { img: 'hex80.png', title: 'rssi -80 ~ -70' },
    { img: 'hex90.png', title: 'rssi -90 ~ -80' },
    { img: 'hex100.png', title: 'rssi < -90' },
]

const OllehMap = ({
    locations = [],
    onMarkerClick,
    bounceMarker = {},
    gridX = null,
    gridY = null,
    rssi = null,
}) => {
    const IMAGE_URL = import.meta.env.VITE_HOME_IMAGE_URL
    // 처음 지도 로딩시에는 marker를 모두 그려준다.
    // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    const _min = Math.min(...locations.map(item => item.latitude))
    const _max = Math.max(...locations.map(item => item.latitude))

    console.log('bounceMarker : ', bounceMarker)
    const _zoom = locations.length > 1 ? 7 : 12

    useEffect(() => {
        let _map = ollehMap.initMap('map_div', locations[locations.length - 1], _zoom)
        // setIsLoading(false)
        //
        ollehMap.drawMarker(_map, PositionIcon, locations, bounceMarker, onMarkerClick)
        Array.isArray(gridX) &&
            Array.isArray(gridY) &&
            Array.isArray(rssi) &&
            ollehMap.drawHexGrid(_map, gridX, gridY, rssi)
    }, [onMarkerClick, bounceMarker, locations])
    // onMarkerClick, bounceMarker

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%' }}>
                {Array.isArray(gridX) && Array.isArray(gridY) && Array.isArray(rssi) && (
                    <Box
                        sx={{
                            zIndex: 999,
                            bottom: 0,
                            position: 'absolute',
                            height: '100px',
                            width: '40%',
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        }}
                    >
                        <ImageList sx={{ ml: 1 }}>
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
                                    {/* <ImageListItemBar
                                    subtitle={<span>{item.title}</span>}
                                    position="below"
                                /> */}
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
