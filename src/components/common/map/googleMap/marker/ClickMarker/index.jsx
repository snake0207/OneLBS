import { useState } from 'react'
import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import { Box, Typography } from '@mui/material'

/**
 * 지도내 클릭 위치 마커 표시
 */
const ClickMarker = ({ clickedCoord, setClickedCoord }) => {
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    return (
        clickedCoord.lat && (
            <Marker
                position={clickedCoord}
                onLoad={(marker) => {
                    setMarker(marker)
                }}
                onUnmount={() => {
                    setMarker(null)
                }}
            >
                <InfoWindow
                    onLoad={(info) => {
                        info.open({ anchor: marker, map: map })
                    }}
                    onCloseClick={() => {
                        setClickedCoord({ lat: null, lng: null })
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: '12px', color: '#444' }}>
                            {clickedCoord.lat},{clickedCoord.lng}
                        </Typography>
                    </Box>
                </InfoWindow>
            </Marker>
        )
    )
}

export default ClickMarker
