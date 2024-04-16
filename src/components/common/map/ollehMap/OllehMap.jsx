import { useEffect, useState } from 'react'
import ollehMap from './olleh_map'
import PositionIcon from '/src/components/common/map/ollehMap/img/position_red.png'

const OllehMap = ({
    locations = [],
    onMarkerClick,
    bounceMarker = {},
    gridX = [],
    gridY = [],
    rssi = [],
}) => {
    console.log('locations : ', locations)
    // console.log('gridX : ', gridX)
    // console.log('gridY : ', gridY)
    // console.log('rssi : ', rssi)
    // console.log('bounceMarker : ', bounceMarker)
    const [map, setMap] = useState(null)

    useEffect(() => {
        const onLoad = function () {
            console.log('>>> WINDOW.ONLOAD()...')

            const _map = ollehMap.initMap('map_div', locations[locations.length - 1])
            ollehMap.drawMarker(_map, PositionIcon, locations, bounceMarker, onMarkerClick)
            Array.isArray(gridX) && ollehMap.drawHexGrid(_map, gridX, gridY, rssi)
        }
        onLoad()
    }, [onMarkerClick, bounceMarker, locations])
    // useEffect(() => {
    //     const _map = ollehMap.initMap('map_div', locations[locations.length - 1])
    //     // 처음 지도 로딩시에는 marker를 모두 그려준다.
    //     // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    //     ollehMap.drawMarker(_map, PositionIcon, locations, bounceMarker, onMarkerClick)
    //     Array.isArray(gridX) && ollehMap.drawHexGrid(gridX, gridY, rssi)
    // }, [onMarkerClick, bounceMarker])

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%' }}></div>
        </>
    )
}

export default OllehMap
