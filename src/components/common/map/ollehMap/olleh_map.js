// 953755.7, 1949715.52
const mapInit = (lat, lon) => {
    console.log(lat, lon)
    const control = olleh.maps.control.Control
    var mapOpts = {
        zoom: 8,
        center: new olleh.maps.UTMK(lat, lon),
        mapTypeId: 'ROADMAP', // SATELLITE, HYBRID
        mapTypeControl: true,
        zoomControl: true, // 확대/축소 컨트롤 생성
        zoomControlOptions: {
            position: control.BOTTOM_RIGHT, // 컨트롤의 기본위치: 오른쪽 아래
            direction: control.VERTICAL, // 컨트롤의 배치방향: 세로로 배치
            bottom: 10, // 아래쪽 여백: 10px
            style: olleh.maps.control.ZoomControl.LARGE, // 확대/축소 컨트롤의 스타일 지정
        },
    }
    const map = new olleh.maps.Map(document.getElementById('map_div'), mapOpts)

    return map
}

const setMarker = (map, lat, lon) => {
    const _position = new olleh.maps.UTMK(lat, lon)
    console.log('map: ', map)
    console.log('position: ', _position)
    const _marker = new olleh.maps.overlay.Marker({
        position: _position,
        animation: olleh.maps.overlay.Marker.BOUNCE, // 제자리에서 통통튀는 Bounce 애니메이션 동작
        caption: 'Animation',
        map: map,
    })
}

export default { mapInit, setMarker }
