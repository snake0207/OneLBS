import { useParams } from 'react-router-dom'
import poiDetailData from '#/mock/data/poiMapDetailData.json'
import MapPoiDetail from '#/components/common/map/MapPoiDetail/index.jsx'

function POISearchDetail() {
    const { id } = useParams()
    console.log('POISearchDetail id:', id)
    return <MapPoiDetail poiData={poiDetailData} />
}

export default POISearchDetail
