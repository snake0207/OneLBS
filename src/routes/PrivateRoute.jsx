import { useAccessTokenState } from '#/store/useAuthStore'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const accessToken = useAccessTokenState()

    return <Outlet />
    // return accessToken ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute
