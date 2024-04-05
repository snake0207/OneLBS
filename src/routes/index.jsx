import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
import DetailLayout from '#/layouts/DetailLayout'
import MainPage from '#/pages/MainPage'
import LoginPage from '#/pages/LoginPage'
import DemoPage from '#/pages/DemoPage'
import LayoutPage from '#/pages/DemoPage/LayoutPage'
import ButtonPage from '#/pages/DemoPage/ButtonPage'
import SelectPage from '#/pages/DemoPage/SelectPage'
import MapPage from '#/pages/DemoPage/MapPage/index.jsx'
import PopupPage from '#/pages/DemoPage/PopupPage'
import InputPage from '#/pages/DemoPage/InputPage'
import UserManagementDemo from '#/pages/DemoPage/UserManagementDemo'
import UserLoginHistoryDemo from '#/pages/DemoPage/UserManagementDemo/UserLoginHistoryDemo'
import UserPermissionDemo from '#/pages/DemoPage/UserManagementDemo/UserPermissionDemo'
import UserListDemo from '#/pages/DemoPage/UserManagementDemo/UserListDemo'
import IPManageDemo from '#/pages/DemoPage/UserManagementDemo/IPManageDemo'
import TablePage from '#/pages/DemoPage/TablePage'
import ProfilePage from '#/pages/ProfilePage'
import EmptyLayout from '#/layouts/EmptyLayout'
import NotFoundPage from '#/pages/NotFoundPage'
import DashboardPage from '#/pages/DemoPage/DashboardPage'
import PrivateRoute from '#/routes/PrivateRoute'
import PermissionManagementDemoPage from '#/pages/DemoPage/PermissionManagementDemoPage'
import ApprovalHistoryPage from '#/pages/ApprovalHistoryPage/index.jsx'
import ApprovalHistoryDetailPage from '#/pages/ApprovalHistoryPage/DetailPage/index.jsx'
import MapSearchPage from '#/pages/search/MapSearchPage'
import POISearchPage from '#/pages/search/POISearchPage'
import MapSearchDetail from '#/pages/search/MapSearchDetail'
import POISearchDetail from '#/pages/search/POISearchDetail'
import DetailWithMobileLayout from '#/layouts/DetailWithMobileLayout/index.jsx'
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

const Routes = () => {
    return useRoutes([
        {
            element: <PrivateRoute />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        { path: '/', element: <MainPage /> },
                        { path: '/mypage/profile', element: <ProfilePage /> },
                        // search management
                        { path: '/search-management/map', element: <MapSearchPage /> },
                        { path: '/poi-view/map', element: <POISearchPage /> },
                        // approval history
                        { path: '/approval/:type?', element: <ApprovalHistoryPage /> },

                        // 측위기반 정보 관리
                        { path: '/facility/bts', element: <BtsInfoMapPage /> },
                        { path: '/facility/sync-history', element: <SyncHistoryPage /> },
                        // 서비스 현황
                        { path: '/service-status/history', element: <ServiceHistoryPage /> },
                        {
                            path: '/service-status/history/detail',
                            element: <ServiceHistoryDetailPage />,
                        },
                        { path: '/service-status/service', element: <ServiceStatPage /> },
                        { path: '/service-status/cloud', element: <CloudStatPage /> },
                        { path: '/service-status/trigger', element: <TriggerListPage /> },
                        // 시스템 관리
                        { path: '/system/service/list', element: <ServiceListPage /> },
                        { path: '/system/service/regist', element: <ServiceRegistPage /> },
                        { path: '/system/service/edit', element: <ServiceEditPage /> },
                        { path: '/system/ue/list', element: <UeModelListPage /> },
                        { path: '/system/ue/regist', element: <UeModelRegistPage /> },
                        { path: '/system/ue/edit', element: <UeModelEditPage /> },
                        { path: '/system/engine', element: <ApprovalHistoryPage /> },
                        { path: '/system/loctrans', element: <LocTransListPage /> },
                        { path: '/system/locview', element: <LocViewListPage /> },
                        // 사용자 관리
                        { path: '/user/manage/regist', element: <UserRegistPage /> },
                        { path: '/user/manage/list', element: <UserListPage /> },
                        { path: '/user/manage/edit', element: <UserEditPage /> },
                        { path: '/user/permission', element: <PermissionEditPage /> },
                        { path: '/user/history', element: <UserHistoryListPage /> },
                    ],
                },
                {
                    element: <DetailLayout />,
                    children: [
                        { path: '/components/layouts/detail', element: <MainPage /> },
                        { path: '/search-management/map/:id', element: <MapSearchDetail /> },
                        { path: '/poi-view/map/:id', element: <POISearchDetail /> },
                    ],
                },
                {
                    element: <DetailWithMobileLayout />,
                    children: [
                        {
                            path: '/approval/:type?/detail/:id',
                            element: <ApprovalHistoryDetailPage />,
                        },
                    ],
                },
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
                { path: '/components/buttons', element: <ButtonPage /> },
                { path: '/components/select', element: <SelectPage /> },
                { path: '/components/maps', element: <MapPage /> },
                { path: '/components/popup', element: <PopupPage /> },
                { path: '/components/tables', element: <TablePage /> },
                { path: '/components/users', element: <UserManagementDemo /> },
                { path: '/components/users/list', element: <UserListDemo /> },
                { path: '/components/users/login-history', element: <UserLoginHistoryDemo /> },
                { path: '/components/users/permission-history', element: <UserPermissionDemo /> },
                { path: '/components/users/ip-management', element: <IPManageDemo /> },
                { path: '/components/dashboard', element: <DashboardPage /> },
                { path: '/components/permission', element: <PermissionManagementDemoPage /> },
            ],
        },
        {
            element: <EmptyLayout />,
            children: [{ path: '*', element: <NotFoundPage /> }],
        },
    ])
}

export default Routes
