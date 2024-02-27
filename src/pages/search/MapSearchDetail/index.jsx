import { useParams } from 'react-router-dom'

function MapSearchDetail() {
    const { id } = useParams()

    return <div>MapSearchDetail id: {id}</div>
}

export default MapSearchDetail
