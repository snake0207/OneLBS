import { Suspense, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from '#/layouts/MainLayout'
import { useAccessTokenState } from '#/store/useAuthStore'

// 대시보드
const DashboardPage = lazy(() =>
    import('#/pages/Dashboard').then((module) => ({ default: module.DashboardPage })),
)

// 서비스 현황
const ServiceHistoryPage = lazy(() =>
    import('#/pages/Service/HistoryPage').then((module) => ({
        default: module.ServiceHistoryPage,
    })),
)
const ServiceHistoryDetailPage = lazy(() =>
    import('#/pages/Service/HistoryPage').then((module) => ({
        default: module.ServiceHistoryDetailPage,
    })),
)
const ServiceStatPage = lazy(() =>
    import('#/pages/Service/ServiceStatPage').then((module) => ({
        default: module.ServiceStatPage,
    })),
)
const ServiceSubStatPage = lazy(() =>
    import('#/pages/Service/ServiceSubStatPage').then((module) => ({
        default: module.ServiceSubStatPage,
    })),
)
const CrowdStatPage = lazy(() =>
    import('#/pages/Service/CrowdStatPage').then((module) => ({ default: module.CrowdStatPage })),
)
const TriggerListPage = lazy(() =>
    import('#/pages/Service/TriggerPage').then((module) => ({ default: module.TriggerListPage })),
)

// 측위기반 정보관리
const BtsInfoMapPage = lazy(() =>
    import('#/pages/Facility/BtsInfoPage').then((module) => ({
        default: module.BtsInfoMapPage,
    })),
)
const WifiInfoMapPage = lazy(() =>
    import('#/pages/Facility/WiFiInfoPage').then((module) => ({
        default: module.WifiInfoMapPage,
    })),
)
const SyncHistoryPage = lazy(() =>
    import('#/pages/Facility/SyncHistoryPage').then((module) => ({
        default: module.SyncHistoryPage,
    })),
)

// 시스템 관리
const ServiceListPage = lazy(() =>
    import('#/pages/System/ServicePage').then((module) => ({ default: module.ServiceListPage })),
)
const ServiceEditPage = lazy(() =>
    import('#/pages/System/ServicePage').then((module) => ({ default: module.ServiceEditPage })),
)
const ServiceRegistPage = lazy(() =>
    import('#/pages/System/ServicePage').then((module) => ({ default: module.ServiceRegistPage })),
)
const UeModelListPage = lazy(() =>
    import('#/pages/System/UeModelPage').then((module) => ({ default: module.UeModelListPage })),
)
const UeModelEditPage = lazy(() =>
    import('#/pages/System/UeModelPage').then((module) => ({ default: module.UeModelEditPage })),
)
const UeModelRegistPage = lazy(() =>
    import('#/pages/System/UeModelPage').then((module) => ({ default: module.UeModelRegistPage })),
)
const EngineEditPage = lazy(() =>
    import('#/pages/System/EnginePage').then((module) => ({ default: module.EngineEditPage })),
)
const LocTransListPage = lazy(() =>
    import('#/pages/System/LocTransPage').then((module) => ({ default: module.LocTransListPage })),
)
const LocViewListPage = lazy(() =>
    import('#/pages/System/LocViewPage').then((module) => ({ default: module.LocViewListPage })),
)

// 사용자관리
const UserListPage = lazy(() =>
    import('#/pages/User/ManagePage').then((module) => ({ default: module.UserListPage })),
)
const UserEditPage = lazy(() =>
    import('#/pages/User/ManagePage').then((module) => ({ default: module.UserEditPage })),
)
const UserRegistPage = lazy(() =>
    import('#/pages/User/ManagePage').then((module) => ({ default: module.UserRegistPage })),
)
const PermissionEditPage = lazy(() =>
    import('#/pages/User/PermissionPage').then((module) => ({
        default: module.PermissionEditPage,
    })),
)
const UserHistoryListPage = lazy(() =>
    import('#/pages/User/HistoryPage').then((module) => ({ default: module.UserHistoryListPage })),
)

// 사용자 로그인 token 체크
const ValidAccessToken = () => {
    const accessToken = import.meta.env.VITE_PERMISSION_CHECK === 'Y' ? useAccessTokenState() : true
    return accessToken ? <Outlet /> : <Navigate to={'/login'} />
}

const PrivateRoutes = {
    element: <ValidAccessToken />,
    children: [
        {
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <DashboardPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/history',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceHistoryPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/history/detail',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceHistoryDetailPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/service',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceStatPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/service-sub',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceSubStatPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/crowd',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <CrowdStatPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/service-status/trigger',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <TriggerListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/facility/bts',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BtsInfoMapPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/facility/wifi',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <WifiInfoMapPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/facility/sync-history',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <SyncHistoryPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/service-list',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/service-regist',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceRegistPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/service-edit',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ServiceEditPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/ue-list',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UeModelListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/ue-regist',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UeModelRegistPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/ue-edit',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UeModelEditPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/engine',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <EngineEditPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/loctrans',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LocTransListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/system/locview',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <LocViewListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user/user-list',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserListPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user/user-regist',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserRegistPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user/user-edit',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserEditPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user/permission',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PermissionEditPage />
                        </Suspense>
                    ),
                },
                {
                    path: '/user/history',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserHistoryListPage />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
}

export default PrivateRoutes
