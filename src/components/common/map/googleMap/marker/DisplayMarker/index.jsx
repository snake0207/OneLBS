import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import { useEffect, useState } from 'react'
import { markerImage } from '#/common/libs/mapMarker.js'

const DisplayMarker = ({ markerData }) => {
    const { basicInfo, category, cpType } = markerData
    const { lat, lon } = basicInfo.position.center
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState(null)
    useEffect(() => {
        map.panTo({ lat: lat, lng: lon })
        map.setZoom(19)
        setTimeout(() => {
            const swLng = map.getBounds().getSouthWest().lng()
            map.panTo({ lat: lat, lng: (swLng + lon) / 2 })
        }, 100)
    }, [map])
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
                <MapInfoWindow markerData={basicInfo} />
            </InfoWindow>
        </Marker>
    )
}

export default DisplayMarker
