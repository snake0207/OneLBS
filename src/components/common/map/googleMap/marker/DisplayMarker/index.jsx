import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import { useEffect, useState } from 'react'
import { markerImage } from '#/common/libs/mapMarker.js'

const DisplayMarker = ({ markerData }) => {
    const { position, category, cpType } = markerData
    const { lat, lon } = position.center
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState(null)
    useEffect(() => {
        if (!markerData) return
        map.panTo({ lat: lat, lng: lon })
        map.setZoom(15)
    }, [])
    return (
        <Marker
            onLoad={(marker) => {
                setMarker(marker)
            }}
            onClick={() => {
                infoWindow.open({ anchor: marker, map: map })
            }}
            position={{ lat: lat, lng: lon }}
            icon={markerImage(category, cpType)}
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
