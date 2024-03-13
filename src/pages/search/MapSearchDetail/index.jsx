import { useParams } from 'react-router-dom'
import MapGpssDetail from '#/components/common/map/MapGpssDetail/index.jsx'
import poiDetailData from '#/mock/data/poiMapDetailData.json'

function MapSearchDetail() {
    const { id } = useParams()
    console.log('MapSearchDetail id:', id)
    // TODO 장소 상세 정보 호출 api 연동
    return <MapGpssDetail poiData={poiDetailData} />
}

export default MapSearchDetail
