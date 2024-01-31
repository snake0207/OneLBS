import { useEffect, useState } from 'react'
import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import { Box, Typography } from '@mui/material'

const ClickMarker = ({ coordinate, setCoordinate }) => {
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState(null)
    useEffect(() => {
        if (infoWindow) infoWindow.close()
        if (marker && infoWindow && coordinate.lat) infoWindow.open({ anchor: marker, map: map })
    }, [infoWindow, coordinate])
    return (
        coordinate.lat && (
            <Marker
                position={coordinate}
                onLoad={(marker) => {
                    setMarker(marker)
                }}
                onUnmount={() => {
                    setMarker(null)
                }}
            >
                <InfoWindow
                    onLoad={(info) => {
                        setInfoWindow(info)
                    }}
                    onUnmount={() => {
                        setInfoWindow(null)
                    }}
                    onCloseClick={() => {
                        setCoordinate({ lat: null, lng: null })
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: '300' }}>
                            {coordinate.lat},{coordinate.lng}
                        </Typography>
                    </Box>
                </InfoWindow>
            </Marker>
        )
    )
}

export default ClickMarker
