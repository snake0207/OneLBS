import { useEffect, useState } from 'react'
// import ktmap from '#/components/common/map/ollehMap/ktmap-all-desktop-min.js'
// import ollehMap from './olleh_map'
import PositionIcon from '/src/components/common/map/ollehMap/img/position_red.png'

const OllehMap = ({ locations = [], onClick }) => {
    console.log('locations : ', locations)
    const [ollehMap, setOllehMap] = useState(null)
    const ktPosition = { latitude: 37.3998912, longitude: 127.1279874, title: 'KT 분당' }
    const posInit = locations[0].latitude > 0 ? locations[0] : ktPosition

    useEffect(() => {
        loadScript(initMap)

        window.onload = function () {
            const _map = initMap(posInit.latitude, posInit.longitude)
            drawMarker(
                _map,
                PositionIcon,
                // '../src/components/common/map/ollehMap/img/position_red.png',
                locations[0].latitude > 0 ? locations : [posInit],
                onClick,
            )
        }
    }, [])

    const loadScript = (initialize) => {
        const API_KEY = `1a395dbbf560c3a6801d1c178e74e3cf9b02d6fbd7eb5d1e66b67c96231e313cd12e4716`
        var head = document.getElementsByTagName('head')[0]
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = `https://api.ktgis.com:10083/v3/olleh/mapAPI.js?key=${API_KEY}`

        script.onload = initialize

        console.log('head : ', head)
        console.log('script : ', script)
        head.appendChild(script)

        return () => document.body.removeChild(script)
    }

    const initMap = (lat, lon) => {
        console.log(lat, lon)
        var mapOpts = {
            center: new olleh.maps.LatLng(lat, lon),
            zoom: 9,
            mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
        }
        const map = new olleh.maps.Map(document.getElementById('map_div'), mapOpts)

        setOllehMap(map)
        return map
    }

    const drawMarker = (_map, iconUrl, locArrs, onClick) => {
        console.log(iconUrl, locArrs)
        locArrs.map((loc) => {
            const _position = new olleh.maps.LatLng(loc.latitude, loc.longitude)
            const _marker = new olleh.maps.overlay.Marker({
                position: _position,
                icon: {
                    url: iconUrl,
                    size: new olleh.maps.Size(60, 60),
                    anchor: new olleh.maps.Point(60 / 2, 60 / 2),
                },
                shadow: {
                    url: iconUrl,
                    size: new olleh.maps.Size(62, 60),
                    anchor: new olleh.maps.Point(60 / 2, 60 / 2),
                },
                title: loc.title,
                map: _map,
            })
            if (typeof onClick === 'function') {
                _marker.onEvent('click', () => {
                    onClick(loc.id)
                })
            }
        })
    }

    return (
        <>
            {ollehMap && (
                <div id="map_div" style={{ height: '100%', width: '100%' }}>
                    OLLEH MAP
                </div>
            )}
        </>
    )
}

export default OllehMap
