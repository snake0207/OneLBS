import { HexGrid } from '#/components/common/map/ollehMap/js/jsHexGrid.js'

import PositionIcon from '#/components/common/map/ollehMap/img/position_red.png'
import BtsIcon from '#/components/common/map/ollehMap/img/bts.png'
import WifiGreenIcon from '#/components/common/map/ollehMap/img/map_pin_green.png'
import WifiPuppleIcon from '#/components/common/map/ollehMap/img/map_pin_pupple.png'
import CellIcon from '#/components/common/map/ollehMap/img/cell.png'
import WiFiIcon from '#/components/common/map/ollehMap/img/wifi.png'
import GnssIcon from '#/components/common/map/ollehMap/img/gnss.png'

const initPosKT = { latitude: 37.3998912, longitude: 127.1279874, title: 'KT 분당' }
const initMap = (_div, location = { ...initPosKT }, _zoom) => {
    var mapOpts = {
        center: new olleh.maps.LatLng(location.latitude, location.longitude),
        zoom: _zoom,
        mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
    }
    const map = new olleh.maps.Map(document.getElementById(_div), mapOpts)

    return map
}

const drawMarker = (_mapInstance, locations, bounceMarker, onMarkerClick) => {
    const locArrs = locations[0].latitude > 0 ? locations : [initPosKT]
    locArrs.map((loc) => {
        const _marker =
            loc.id && loc.id === bounceMarker.id ? setBounceMarker(loc) : setIconMarker(loc)
        if (typeof onMarkerClick === 'function') {
            _marker.onEvent('click', () => {
                onMarkerClick(loc.id)
            })
        }
        _marker.setMap(_mapInstance)
    })
}

const getIcon = (_location) => {
    if (_location.id.includes('B_')) return BtsIcon
    else if (_location.id.includes('W_')) {
        return _location.band === 24 ? WifiGreenIcon : WifiPuppleIcon
    } else if (_location.id.includes('P_')) {
        if (_location.posMethod === 'CELL') return CellIcon
        else if (_location.posMethod === 'WIFI') return WiFiIcon
        else return GnssIcon
    } else {
        return PositionIcon
    }
}

const setIconMarker = (location) => {
    const _marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.LatLng(location.latitude, location.longitude),
        icon: {
            url: getIcon(location),
            size: new olleh.maps.Size(28, 40),
        },
        title: location.title || location.address,
    })
    return _marker
}

const setBounceMarker = (location) => {
    const _marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.LatLng(location.latitude, location.longitude),
        animation: olleh.maps.overlay.Marker.BOUNCE, // 제자리에서 통통튀는 Bounce 애니메이션 동작
        title: location.title || location.address,
    })
    _marker.setIcon(getIcon(location))
    return _marker
}

const drawHexGrid = (map, arrGridX, arrGridY, arrRssi) => {
    for (let i = 0; i < arrGridX.length; i++) {
        const grid25 = new HexGrid(10)
        addHexGrid25Layer(map, grid25.getPolygonPaths(arrGridX[i], arrGridY[i]), arrRssi[i])
    }
}

const addHexGrid25Layer = (_map, paths, rssi) => {
    var list = []
    for (var idx in paths) {
        list.push(new olleh.maps.UTMK(paths[idx].x, paths[idx].y))
    }

    var color = ''
    if (rssi >= -50) color = '#ff0000'
    else if (rssi >= -60) color = '#ff6a00'
    else if (rssi >= -70) color = '#ffd800'
    else if (rssi >= -80) color = '#b6ff00'
    else if (rssi >= -90) color = '#4cff00'
    else color = '#0094ff'

    var hexGrid25Layer = new olleh.maps.vector.Polygon({
        map: _map,
        paths: new olleh.maps.Path(list),
        fillColor: color,
        fillOpacity: 0.8,
        strokeColor: '#0000ff',
        strokeOpacity: 1,
        strokeWeight: 1,
    })
    return hexGrid25Layer
}

export default { initMap, drawMarker, setBounceMarker, drawHexGrid }
