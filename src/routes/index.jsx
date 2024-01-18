import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
import MainPage from '#/pages/MainPage'
import LoginPage from '#/pages/LoginPage'

const Routes = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [{ path: '/', element: <MainPage /> }],
        },
        {
            element: <AuthLayout />,
            children: [{ path: '/login', element: <LoginPage /> }],
        },
    ])
}

export default Routes
