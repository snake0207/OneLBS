import { useEffect, useState } from 'react'
import ollehMap from './olleh_map'
import PositionIcon from '/src/components/common/map/ollehMap/img/position_red.png'

const OllehMap = ({ locations = [], onClick }) => {
    console.log('locations : ', locations)
    const [map, setMap] = useState(null)

    useEffect(() => {
        const _map = ollehMap.initMap('map_div', locations[0])
        ollehMap.drawMarker(
            _map,
            PositionIcon,
            locations,
            // locations[0].latitude > 0 ? locations : [posInit],
            onClick,
        )
    }, [])

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%' }}>
                OLLEH MAP
            </div>
        </>
    )
}

export default OllehMap
