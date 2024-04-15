import { HexGrid } from '#/components/common/map/ollehMap/js/jsHexGrid'

const initPosKT = { latitude: 37.3998912, longitude: 127.1279874, title: 'KT 분당' }

const initMap = (_div, location = { ...initPosKT }) => {
    // console.log('initMap-location : ', location)
    var mapOpts = {
        center: new olleh.maps.LatLng(location.latitude, location.longitude),
        zoom: 9,
        mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
    }
    const map = new olleh.maps.Map(document.getElementById(_div), mapOpts)

    return map
}

const drawMarker = (_mapInstance, iconUrl, locations, bounceMarker, onMarkerClick) => {
    const locArrs = locations[0].latitude > 0 ? locations : [initPosKT]
    locArrs.map((loc) => {
        const _marker =
            loc.id && loc.id === bounceMarker.id
                ? setBounceMarker(loc)
                : setIconMarker(loc, iconUrl)
        if (typeof onMarkerClick === 'function') {
            _marker.onEvent('click', () => {
                onMarkerClick(loc.id)
            })
        }
        _marker.setMap(_mapInstance)
    })
}

const setIconMarker = (location, iconUrl) => {
    console.log('setIconMarker : ', location)
    const _marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.LatLng(location.latitude, location.longitude),
        icon: {
            url: iconUrl,
            size: new olleh.maps.Size(50, 50),
        },
        title: location.title || location.address,
    })
    return _marker
}

const setBounceMarker = (location) => {
    console.log('setBounceMarker : ', location)
    const _marker = new olleh.maps.overlay.Marker({
        position: new olleh.maps.LatLng(location.latitude, location.longitude),
        animation: olleh.maps.overlay.Marker.BOUNCE, // 제자리에서 통통튀는 Bounce 애니메이션 동작
        title: location.title || location.address,
    })
    return _marker
}

const initHexGrid = () => {
    var gridX = 127830;
    var gridY = 224404;
    var rssi = -80;
    const grid25 = new HexGrid(10)
    addHexGrid25Layer(grid25.getPolygonPaths(gridX, gridY), rssi);
}

const addHexGrid25Layer = (paths, rssi) => {
    var list = [];
    for (var idx in paths) {
        list.push(new olleh.maps.UTMK(paths[idx].x, paths[idx].y));
    }
    
    var color = "";
    if (rssi >= -50) color = '#ff0000';
    else if (rssi >= -60) color = '#ff6a00';
    else if (rssi >= -70) color = '#ffd800';
    else if (rssi >= -80) color = '#b6ff00';
    else if (rssi >= -90) color = '#4cff00';
    else color = '#0094ff';
    
    var hexGrid25Layer = new olleh.maps.vector.Polygon({
        map: map,
        paths: new olleh.maps.Path(list),
        fillColor: color,
        fillOpacity: 0.8,
        strokeColor: '#0000ff',
        strokeOpacity: 1,
        strokeWeight: 1
    });
    return hexGrid25Layer;
}

export default { initMap, drawMarker, setBounceMarker }
