import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import { useEffect, useState } from 'react'
import useMapStore from '#/store/useMapStore.js'
import { isBrowser } from 'react-device-detect'

const SearchResultMarker = ({ poiData, selectedPoi, setSelectedPoi }) => {
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState([])
    const { hoveredPoi } = useMapStore()
    const { poiId, position } = poiData
    const { lat, lon } = position.center
    useEffect(() => {
        // poi가 같으면 단일 infoWindow만 엶
        if (selectedPoi === poiId && infoWindow.length !== 0) {
            const resultWindow = infoWindow.filter((info) => info.content.outerText !== '')[0]
            resultWindow.open({ anchor: marker, map: map })
        }
        // poi가 다르면 모든 infoWindow를 닫음
        if (selectedPoi !== poiId && infoWindow.length !== 0) {
            infoWindow.map((info) => info.close())
            setInfoWindow([])
        }
    }, [selectedPoi, infoWindow])
    return (
        <Marker
            position={{ lat: lat, lng: lon }}
            onLoad={(marker) => {
                setMarker(marker)
            }}
            onClick={() => {
                setSelectedPoi(poiId)
            }}
            animation={isBrowser && hoveredPoi === poiId && window.google.maps.Animation.BOUNCE}
        >
            {selectedPoi === poiId && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedPoi(null)
                    }}
                    onLoad={(info) => {
                        setInfoWindow([...infoWindow, info])
                        info.close()
                    }}
                >
                    <MapInfoWindow markerData={poiData} />
                </InfoWindow>
            )}
        </Marker>
    )
}

export default SearchResultMarker
