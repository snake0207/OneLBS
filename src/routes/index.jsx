import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
import MainPage from '#/pages/MainPage'
import LoginPage from '#/pages/LoginPage'
import DemoPage from '#/pages/DemoPage'
import LayoutPage from '#/pages/DemoPage/LayoutPage'
import ButtonPage from '#/pages/DemoPage/ButtonPage'
import PoiMapPage from '#/pages/poiMapPage/index.jsx'
import MapPage from '#/pages/DemoPage/MapPage/index.jsx'
import LoginDemoPage from '#/pages/DemoPage/LoginPage'
import PopupPage from '#/pages/DemoPage/PopupPage'
import InputPage from '#/pages/DemoPage/InputPage'
import ModalPage from '#/pages/DemoPage/ModalPage'
import RadioPage from '#/pages/DemoPage/radioPage'

const Routes = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [
                { path: '/', element: <MainPage /> },
                { path: '/poi-map', element: <PoiMapPage /> },
            ],
        },
        {
            element: <AuthLayout />,
            children: [{ path: '/login', element: <LoginPage /> }],
        },
        {
            element: <MainLayout />,
            children: [
                { path: '/components', element: <DemoPage /> },
                { path: '/components/layouts', element: <LayoutPage /> },
                { path: '/components/inputs', element: <InputPage /> },
                { path: '/components/radios', element: <RadioPage /> },
                { path: '/components/buttons', element: <ButtonPage /> },
                { path: '/components/maps', element: <MapPage /> },
                { path: '/components/logins', element: <LoginDemoPage /> },
                { path: '/components/modals', element: <ModalPage /> },
                { path: '/components/popup', element: <PopupPage /> },
            ],
        },
    ])
}

export default Routes
