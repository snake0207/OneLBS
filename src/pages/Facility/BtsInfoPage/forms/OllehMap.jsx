import { useEffect, useState } from 'react'
import ollehMap from '#/components/common/map/ollehMap/olleh_map'

const OllehMap = ({ locations }) => {
    const [mapInstance, setMapInstance] = useState(null)
    const [markers, setMarkers] = useState([])
    // 처음 지도 로딩시에는 marker를 모두 그려준다.
    // 이후 목록에서 특정 행을 선택 한 경우 해당 marker는 bounce 시킨다
    let _distance = 0
    let _zoom = 13
    let _center = { latitude: locations[0].latitude, longitude: locations[0].longitude }

    if (locations.length > 1) {
        const { minLat, maxLat, minLon, maxLon } = ollehMap.minMax(locations)
        _center = { latitude: (minLat + maxLat) / 2, longitude: (minLon + maxLon) / 2 }
        _distance = ollehMap.getDistance(minLat, minLon, maxLat, maxLon)
        _zoom = ollehMap.setZoomWithDistance(_distance)
    }

    // console.log('OLLEHMAP : ', modeCreate)

    useEffect(() => {
        if (!mapInstance) {
            const map = ollehMap.initMap(
                document.getElementById('map_div'),
                ollehMap.initCenter(_center.latitude, _center.longitude),
                _zoom,
            )
            setMapInstance(map)
        }

        return () => {
            if (mapInstance) {
                console.log('mapInstance unmount...')
                setMapInstance(null)
                setMarkers([])
            }
        }
    }, [])

    useEffect(() => {
        if (mapInstance) {
            ollehMap.setCenter(
                mapInstance,
                ollehMap.initCenter(_center.latitude, _center.longitude),
            )

            const _markerArrs = locations.map((loc) => {
                const _marker = ollehMap.drawMarker(mapInstance, loc, false)
                return _marker
            })
            if (markers.length === 0) setMarkers(_markerArrs)
        }
    }, [locations, mapInstance])

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%', zIndex: 1 }}></div>
        </>
    )
}

export default OllehMap
