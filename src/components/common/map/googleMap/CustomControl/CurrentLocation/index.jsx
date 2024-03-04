import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import { Box } from '@mui/material'
import { Marker, useGoogleMap } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

/**
 * 내 현재 위치 조회 컨트롤러
 */
const CurrentLocation = () => {
    const map = useGoogleMap()
    const [currCoordinate, setCurrCoordinate] = useState({
        lat: null,
        lng: null,
    })
    const [isClicked, setIsClicked] = useState(false)

    const handleClickMoveToCurrentLocation = () => {
        if (!currCoordinate.lat) {
            navigator.geolocation.getCurrentPosition((position) => {
                map.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            })
        } else map.setCenter(currCoordinate)
        setIsClicked(true)
        map.setZoom(17)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrCoordinate({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        })
    }, [])

    return (
        <>
            <Box
                sx={{
                    width: '40px',
                    height: '40px',
                    color: '#666',
                    margin: '10px',
                    margin: '10px',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    boxShadow: '#0000004d 0px 1px 4px -1px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={handleClickMoveToCurrentLocation}
            >
                <GpsFixedIcon sx={{ fontSize: '25px' }} />
            </Box>
            {currCoordinate.lat && isClicked && <Marker position={currCoordinate}></Marker>}
        </>
    )
}
export default CurrentLocation
