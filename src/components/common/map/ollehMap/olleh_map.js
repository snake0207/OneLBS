// import ktmap from "#/components/common/map/ollehMap/ktmap-all-desktop-min.js"

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

export default { initMap, drawMarker, setBounceMarker }
