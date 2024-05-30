import { useRoutes } from 'react-router-dom'

import EmptyRoutes from './EmptyRoutes'
import AuthRoutes from './AuthRoutes'
import PrivateRoutes from './PrivateRoutes'

const Routes = () => {
    return useRoutes([PrivateRoutes, AuthRoutes, EmptyRoutes])
}

export default Routes
