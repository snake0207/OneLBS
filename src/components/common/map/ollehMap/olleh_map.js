// import ktmap from "#/components/common/map/ollehMap/ktmap-all-desktop-min.js"

const initPosKT = { latitude: 37.3998912, longitude: 127.1279874, title: 'KT 분당' }

// 사용하지 않음
const loadScript = () => {
    const API_KEY = `1a395dbbf560c3a6801d1c178e74e3cf9b02d6fbd7eb5d1e66b67c96231e313cd12e4716`
    var script = document.createElement('script')
    script.type = 'text/javascript'
    // script.onload = initialize;
    // script.src = `./ktmap-all-desktop-min.js`

    document.head.appendChild(script)
}

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

const drawMarker = (_mapInstance, iconUrl, locations, onClick) => {
    const locArrs = locations[0].latitude > 0 ? locations : [initPosKT]
    locArrs.map((loc) => {
        const _marker = new olleh.maps.overlay.Marker({
            position: new olleh.maps.LatLng(loc.latitude, loc.longitude),
            icon: {
                url: iconUrl,
                size: new olleh.maps.Size(60, 60),
                anchor: new olleh.maps.Point(60 / 2, 60 / 2),
            },
            title: loc.title || loc.address,
            map: _mapInstance,
        })
        if (typeof onClick === 'function') {
            _marker.onEvent('click', () => {
                onClick(loc.id)
            })
        }
    })
}

export default { loadScript, initMap, drawMarker }
