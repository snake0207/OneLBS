import { InfoWindow, Marker, useGoogleMap } from '@react-google-maps/api'
import MapInfoWindow from '#/components/common/map/MapInfoWindow/index.jsx'
import { useEffect, useState } from 'react'
import useMapStore from '#/store/useMapStore.js'
import { isBrowser } from 'react-device-detect'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import PointBlueFuelIcon from '#/assets/pointBlueFuelIcon.svg'
import PointBlueH2Icon from '#/assets/pointBlueH2Icon.svg'
import PointBlueParkingIcon from '#/assets/pointBlueParkingIcon.svg'
import PointBluePoiIcon from '#/assets/pointBluePoiIcon.svg'
import PointRedEVIcon from '#/assets/pointRedEVIcon.svg'
import PointRedFuelIcon from '#/assets/pointRedFuelIcon.svg'
import PointRedH2Icon from '#/assets/pointRedH2Icon.svg'
import PointRedParkingIcon from '#/assets/pointRedParkingIcon.svg'
import PointRedPoiIcon from '#/assets/pointRedPoiIcon.svg'

const SearchResultMarker = ({ poiData, selectedPoi, setSelectedPoi }) => {
    console.log(poiData)
    const map = useGoogleMap()
    const [marker, setMarker] = useState(null)
    const [infoWindow, setInfoWindow] = useState([])
    const { hoveredPoi } = useMapStore()
    const { poiId, position, cpType, category } = poiData
    const { lat, lon } = position.center
    const markerImage = (category) => {
        switch (category) {
            case 'evCharging':
                return cpType === 'mcp' ? PointBlueEVIcon : PointRedEVIcon
            case 'fuel':
                return cpType === 'mcp' ? PointBlueFuelIcon : PointRedFuelIcon
            case 'h2Charging':
                return cpType === 'mcp' ? PointBlueH2Icon : PointRedH2Icon
            case 'parking':
                return cpType === 'mcp' ? PointBlueParkingIcon : PointRedParkingIcon
            case 'dealerPoi':
                return cpType === 'mcp' ? PointBluePoiIcon : PointRedPoiIcon
            default:
                return cpType === 'mcp' ? PointBluePoiIcon : PointRedPoiIcon
        }
    }
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
            icon={markerImage(category)}
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
