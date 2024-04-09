var mapInstance

const getMapInstance = () => mapInstance

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

export default { getMapInstance, initMap, drawMarker }
