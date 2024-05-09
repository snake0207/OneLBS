import { useEffect, useState } from 'react'
import ollehMap from './olleh_map'

const OllehMapIcons = ({ locations, onMarkerClick, bounceMarker = {} }) => {
    const [mapInstance, setMapInstance] = useState(null)
    // 처음 지도 로딩시에는 marker를 모두 그려준다.
    // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    const _zoom = locations.length > 1 ? 7 : 13
    // console.log(locations)
    console.log(locations)
    useEffect(() => {
        const _center = ollehMap.initCenter(Array.isArray(locations) ? locations[0] : locations)
        if (mapInstance === null) {
            console.log(`mapInstance is create...`)
            const instance = ollehMap.initMap(document.getElementById('map_div'), _center, _zoom)
            setMapInstance(instance)
        }
        ollehMap.setCenter(mapInstance, _center)

        ollehMap.drawMarker(mapInstance, locations, bounceMarker, onMarkerClick)
        // 전파맵 그리기
    }, [onMarkerClick, bounceMarker, locations])
    // onMarkerClick, bounceMarker

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%', zIndex: 1 }}></div>
        </>
    )
}

export default OllehMapIcons
