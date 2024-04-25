import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
import MainPage from '#/pages/MainPage'
import LoginPage from '#/pages/LoginPage'
import ProfilePage from '#/pages/ProfilePage'
import EmptyLayout from '#/layouts/EmptyLayout'
import NotFoundPage from '#/pages/NotFoundPage'
import PrivateRoute from '#/routes/PrivateRoute'
import { ServiceEditPage, ServiceListPage, ServiceRegistPage } from '#/pages/OneSystem/ServicePage'
import { UeModelEditPage, UeModelListPage, UeModelRegistPage } from '#/pages/OneSystem/UeModelPage'
import { LocTransListPage } from '#/pages/OneSystem/LocTransPage'
import { LocViewListPage } from '#/pages/OneSystem/LocViewPage'
import { UserEditPage, UserListPage, UserRegistPage } from '#/pages/OneUser/ManagePage'
import { UserHistoryListPage } from '#/pages/OneUser/HistoryPage'
import { PermissionEditPage } from '#/pages/OneUser/PermissionPage'
import { TriggerListPage } from '#/pages/OneService/TriggerPage'
import { CloudStatPage } from '#/pages/OneService/CloudStatPage'
import { ServiceStatPage } from '#/pages/OneService/ServiceStatPage'
import { ServiceHistoryDetailPage, ServiceHistoryPage } from '#/pages/OneService/HistoryPage'
import { SyncHistoryPage } from '#/pages/OneFacility/SyncHistoryPage'
import { BtsInfoMapPage } from '#/pages/OneFacility/BtsInfoPage'
import { WifiInfoMapPage } from '#/pages/OneFacility/WiFiInfoPage'

const Routes = () => {
    return useRoutes([
        {
            element: <PrivateRoute />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        { path: '/', element: <MainPage /> },
                        // 서비스 현황
                        { path: '/service-status/history', element: <ServiceHistoryPage /> },
                        {
                            path: '/service-status/history/detail',
                            element: <ServiceHistoryDetailPage />,
                        },
                        { path: '/service-status/service', element: <ServiceStatPage /> },
                        { path: '/service-status/cloud', element: <CloudStatPage /> },
                        { path: '/service-status/trigger', element: <TriggerListPage /> },
                        // 측위기반 정보 관리
                        { path: '/facility/bts', element: <BtsInfoMapPage /> },
                        { path: '/facility/wifi', element: <WifiInfoMapPage /> },
                        { path: '/facility/sync-history', element: <SyncHistoryPage /> },
                        // 시스템 관리
                        { path: '/system', element: <ServiceListPage /> },
                        { path: '/system/service-list', element: <ServiceListPage /> },
                        { path: '/system/service-regist', element: <ServiceRegistPage /> },
                        { path: '/system/service-edit', element: <ServiceEditPage /> },
                        { path: '/system/ue-list', element: <UeModelListPage /> },
                        { path: '/system/ue-regist', element: <UeModelRegistPage /> },
                        { path: '/system/ue-edit', element: <UeModelEditPage /> },
                        { path: '/system/engine', element: <UeModelRegistPage /> },
                        { path: '/system/loctrans', element: <LocTransListPage /> },
                        { path: '/system/locview', element: <LocViewListPage /> },
                        // 사용자 관리
                        { path: '/user', element: <UserListPage /> },
                        { path: '/user/user-list', element: <UserListPage /> },
                        { path: '/user/user-regist', element: <UserRegistPage /> },
                        { path: '/user/user-edit', element: <UserEditPage /> },
                        { path: '/user/permission', element: <PermissionEditPage /> },
                        { path: '/user/history', element: <UserHistoryListPage /> },
                    ],
                },
            ],
        },
        {
            element: <AuthLayout />,
            children: [{ path: '/login', element: <LoginPage /> }],
        },
        {
            element: <EmptyLayout />,
            children: [{ path: '*', element: <NotFoundPage /> }],
        },
    ])
}

export default Routes
