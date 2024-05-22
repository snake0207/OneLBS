import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
import LoginPage from '#/pages/LoginPage'
import EmptyLayout from '#/layouts/EmptyLayout'
import NotFoundPage from '#/pages/NotFoundPage'
import PrivateRoute from '#/routes/PrivateRoute'
import { ServiceEditPage, ServiceListPage, ServiceRegistPage } from '#/pages/System/ServicePage'
import { UeModelEditPage, UeModelListPage, UeModelRegistPage } from '#/pages/System/UeModelPage'
import { LocTransListPage } from '#/pages/System/LocTransPage'
import { LocViewListPage } from '#/pages/System/LocViewPage'
import { UserEditPage, UserListPage, UserRegistPage } from '#/pages/User/ManagePage'
import { UserHistoryListPage } from '#/pages/User/HistoryPage'
import { PermissionEditPage } from '#/pages/User/PermissionPage'
import { TriggerListPage } from '#/pages/Service/TriggerPage'
import { CrowdStatPage } from '#/pages/Service/CrowdStatPage'
import { ServiceStatPage } from '#/pages/Service/ServiceStatPage'
import { ServiceHistoryDetailPage, ServiceHistoryPage } from '#/pages/Service/HistoryPage'
import { SyncHistoryPage } from '#/pages/Facility/SyncHistoryPage'
import { BtsInfoMapPage } from '#/pages/Facility/BtsInfoPage'
import { WifiInfoMapPage } from '#/pages/Facility/WiFiInfoPage'
import { EngineEditPage } from '#/pages/System/EnginePage'
import { ServiceSubStatPage } from '#/pages/Service/ServiceSubStatPage'
import { DashboardPage } from '#/pages/Dashboard'

const Routes = () => {
    return useRoutes([
        {
            element: <PrivateRoute />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        { path: '/', element: <DashboardPage /> },
                        // 서비스 현황
                        { path: '/service-status/history', element: <ServiceHistoryPage /> },
                        {
                            path: '/service-status/history/detail',
                            element: <ServiceHistoryDetailPage />,
                        },
                        { path: '/service-status/service', element: <ServiceStatPage /> },
                        { path: '/service-status/service-sub', element: <ServiceSubStatPage /> },
                        { path: '/service-status/crowd', element: <CrowdStatPage /> },
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
                        { path: '/system/engine', element: <EngineEditPage /> },
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
