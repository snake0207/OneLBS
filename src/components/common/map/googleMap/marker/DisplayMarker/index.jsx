import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import { useState } from 'react'

const DisplayMarker = ({ markerData }) => {
    const { lat, lon } = markerData.position.center
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState(null)
    return (
        <Marker
            onLoad={(marker) => {
                setMarker(marker)
            }}
            onClick={() => {
                infoWindow.open({ anchor: marker, map: map })
            }}
            position={{ lat: lat, lng: lon }}
        >
            <InfoWindow
                onLoad={(info) => {
                    setInfoWindow(info)
                    info.open({ anchor: marker, map: map })
                }}
            >
                <MapInfoWindow markerData={markerData} />
            </InfoWindow>
        </Marker>
    )
}

export default DisplayMarker
