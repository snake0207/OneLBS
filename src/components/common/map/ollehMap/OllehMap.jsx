import { useEffect, useState } from 'react'
// import ktmap from "#/components/common/map/ollehMap/ktmap-all-desktop-min"
import ollehMap from './olleh_map'

const OllehMap = ({ lat, lon }) => {
    const [map, setMap] = useState()
    const [init, setInit] = useState(true)

    useEffect(() => {
        const _map = ollehMap.mapInit(lat, lon)
        ollehMap.setMarker(_map, lat, lon)
    }, [lat, lon])

    console.log(map)

    return (
        <div id="map_div" style={{ height: '100%' }}>
            OLLEH MAP
        </div>
    )
}

export default OllehMap
