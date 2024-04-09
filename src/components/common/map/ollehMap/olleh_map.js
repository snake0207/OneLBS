var mapInstance

const loadScript = () => {
    const API_KEY = `1a395dbbf560c3a6801d1c178e74e3cf9b02d6fbd7eb5d1e66b67c96231e313cd12e4716`
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    // script.onload = initialize;
    script.src = `https://api.ktgis.com:10083/v3/olleh/mapAPI.js?key=${API_KEY}`

    console.log('head : ', head)
    console.log('script : ', script)
    head.appendChild(script)
}

const initMap = (lat, lon) => {
    console.log(lat, lon)
    var mapOpts = {
        center: new olleh.maps.LatLng(lat, lon),
        zoom: 9,
        mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
    }
    mapInstance = new olleh.maps.Map(document.getElementById('map_div'), mapOpts)

    return mapInstance
}

const drawMarker = (_map, iconUrl, locArrs, onClick) => {
    locArrs.map((loc) => {
        const _marker = new olleh.maps.overlay.Marker({
            position: new olleh.maps.LatLng(loc.latitude, loc.longitude),
            icon: {
                url: iconUrl,
                size: new olleh.maps.Size(60, 60),
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

export default { loadScript, initMap, drawMarker }
