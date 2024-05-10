import { HexGrid } from '#/components/common/map/ollehMap/jsHexGrid.js'

import PositionIcon from '#/components/common/map/ollehMap/img/position_red.png'
import BtsIcon from '#/components/common/map/ollehMap/img/bts.png'
import WifiGreenIcon from '#/components/common/map/ollehMap/img/map_pin_green.png'
import WifiPuppleIcon from '#/components/common/map/ollehMap/img/map_pin_pupple.png'
import CellIcon from '#/components/common/map/ollehMap/img/cell.png'
import WiFiIcon from '#/components/common/map/ollehMap/img/wifi.png'
import GnssIcon from '#/components/common/map/ollehMap/img/gnss.png'

const initMap = (_div, location, _zoom) => {
    const mapOpts = {
        center: location,
        zoom: _zoom,
        mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
        panControl: false,
    }

    const map = new olleh.maps.Map(_div, mapOpts)
    return map || null
}

const initCenter = (lat, lng) => new olleh.maps.LatLng(lat, lng)

const setCenter = (_mapInstance, _center) => {
    if (!_mapInstance || !_center) return
    _mapInstance.setCenter(_center)
}

const getCenter = (_mapInstance) => _mapInstance.getCenter()

const drawMarker = (_mapInstance, locations, bounceMarker, onMarkerClick) => {
    // console.log('drawMarker mapInstance', _mapInstance, locations, bounceMarker)
    locations.map((loc) => {
        const _marker = setIconMarker(loc)

        _marker.setAnimation(loc.id === bounceMarker?.id ? olleh.maps.overlay.Marker.BOUNCE : null)
        _marker.setMap(_mapInstance)

        if (typeof onMarkerClick === 'function') {
            _marker.onEvent('click', () => {
                onMarkerClick(loc.id)
            })
        }
    })
}

const getIcon = (_location) => {
    if (_location.hasOwnProperty('id')) {
        if (typeof _location.id === 'string') {
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
        return PositionIcon
    } else {
        return PositionIcon
    }
}

const setIconMarker = (location) => {
    const _marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.LatLng(location.latitude, location.longitude),
        icon: {
            url: getIcon(location),
        },
        title: location.title || location.address,
    })
    return _marker
}

const drawHexGrid = (map, arrGridX, arrGridY, arrRssi) => {
    // console.log('drawHexGrid : ', map, arrGridX)
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

const toRadians = (degrees) => {
    return (degrees * Math.PI) / 180
}

const getDistance = (minLat, minLon, maxLat, maxLon) => {
    return calcDistance(minLat, minLon, maxLat, maxLon)
}

const calcDistance = (minLat, minLon, maxLat, maxLon) => {
    const earthRadiusKm = 6371

    const dLat = toRadians(maxLat - minLat)
    const dLon = toRadians(maxLon - minLon)

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(minLat)) *
            Math.cos(toRadians(maxLat)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = earthRadiusKm * c
    return distance
}

const getZoomLevel = (distance) => {
    const miter = Math.floor(distance * 1000)
    if (miter > 660000) return 1
    else if (miter > 460000) return 2
    else if (miter > 230000) return 3
    else if (miter > 120000) return 4
    else if (miter > 60000) return 5
    else if (miter > 30000) return 6
    else if (miter > 15000) return 8
    else if (miter > 7000) return 9
    else if (miter > 3500) return 10
    else if (miter > 1900) return 11
    else if (miter > 900) return 12
    else if (miter > 400) return 13
    else return 14
}

const minMax = (locations) => {
    if (!Array.isArray(locations)) return
    const xArrs = locations.map((row) => row.longitude)
    const yArrs = locations.map((row) => row.latitude)

    return {
        minLat: Math.min(...yArrs), // 위도 최소
        minLon: Math.min(...xArrs), // 경도 최소
        maxLat: Math.max(...yArrs), // 위도 최대
        maxLon: Math.max(...xArrs), // 경도 최대
    }
}

export default {
    initMap,
    initCenter,
    setCenter,
    getCenter,
    drawMarker,
    drawHexGrid,
    getDistance,
    getZoomLevel,
    minMax,
}
