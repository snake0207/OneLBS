import { useEffect, useState } from 'react'
import ollehMap from '#/components/common/map/ollehMap/olleh_map'

const OllehMap = ({ locations, onMarkerClick, bounceMarker = {} }) => {
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
    // console.log('locations : ', locations)
    // console.log(`_distance : ${_distance}, _zoom : ${_zoom}`)

    useEffect(() => {
        if (mapInstance === null || mapInstance === undefined) {
            const instance = ollehMap.initMap(
                document.getElementById('map_div'),
                ollehMap.initCenter(_center.latitude, _center.longitude),
                _zoom,
            )
            setMapInstance(instance)
        }

        return () => {
            // console.log('olleh map unmount')
            setMapInstance(null)
            setMarkers([])
        }
    }, [])

    useEffect(() => {
        if (mapInstance) {
            ollehMap.setCenter(
                mapInstance,
                ollehMap.initCenter(_center.latitude, _center.longitude),
            )

            // table click row에 대한 해당 아이콘 위치를 지도 중심으로 이동
            if (bounceMarker.latitude > 0 && bounceMarker.longitude > 0) {
                // 이전에 그려진 모든 마커를 clear
                ollehMap.clearMarker(markers)

                // 일반 마커 그리기
                const _markerArrs = locations
                    .filter((loc) => loc.id !== bounceMarker.id)
                    .map((loc) => {
                        const _marker = ollehMap.drawMarker(mapInstance, loc, false, onMarkerClick)
                        return _marker
                    })

                // bounce 마커 그리기
                const _marker = ollehMap.drawMarker(mapInstance, bounceMarker, true, onMarkerClick)
                setMarkers([..._markerArrs, _marker])

                // 중심 좌표와 지도 레벨 조정
                ollehMap.moveCenter(mapInstance, bounceMarker, 8)
                // ollehMap.setCenter(
                //     mapInstance,
                //     ollehMap.initCenter(bounceMarker.latitude, bounceMarker.longitude),
                // )
                // ollehMap.setZoomLevel(mapInstance, 8)
            } else {
                const _markerArrs = locations.map((loc) => {
                    const _marker = ollehMap.drawMarker(mapInstance, loc, false, onMarkerClick)
                    return _marker
                })
                if (markers.length === 0) setMarkers(_markerArrs)
            }
        }
    }, [onMarkerClick, bounceMarker, locations, mapInstance])

    // markers.length > 0 && markers.map((marker) => console.log('Markers : ', marker._id))

    return (
        <>
            <div id="map_div" style={{ height: '100%', width: '100%', zIndex: 1 }}></div>
        </>
    )
}

export default OllehMap
