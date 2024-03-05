import { useAccessTokenState } from '#/store/useAuthStore'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    // const accessToken = useAccessTokenState()
    const accessToken = true // TODO 테스트용
    return accessToken ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute
