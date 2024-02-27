import { useParams } from 'react-router-dom'

function POISearchDetail() {
    const { id } = useParams()

    return <div>POISearchDetail id: {id}</div>
}

export default POISearchDetail
