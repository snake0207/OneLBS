import { Box } from '@mui/material'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useState } from 'react'

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
                    options={{
                        fullscreenControlOptions: {
                            position: window.google.maps.ControlPosition.TOP_RIGHT,
                        },
                        scaleControl: true,
                    }}
                    mapContainerStyle={mapStyle}
                    center={seoul}
                    zoom={4}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                ></GoogleMap>
            </Box>
        )
    )
}

export default GoogleMapComponent
