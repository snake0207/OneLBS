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
import PoiMapPage from '#/pages/poiMapPage/index.jsx'
import MapPage from '#/pages/DemoPage/MapPage/index.jsx'
import LoginDemoPage from '#/pages/DemoPage/LoginPage'
import PopupPage from '#/pages/DemoPage/PopupPage'
import InputPage from '#/pages/DemoPage/InputPage'
import ModalPage from '#/pages/DemoPage/ModalPage'
import UserManagementDemo from '#/pages/DemoPage/UserManagementDemo'
import UserLoginHistoryDemo from '#/pages/DemoPage/UserManagementDemo/UserLoginHistoryDemo'
import UserPermissionDemo from '#/pages/DemoPage/UserManagementDemo/UserPermissionDemo'
import ApprovalPage from '#/pages/DemoPage/ApprovalPage/index.jsx'
import ApprovalHistoryPage from '#/pages/DemoPage/ApprovalPage/ApprovalHistoryPage/index.jsx'
import ApprovalHistoryDetailPage from '#/pages/DemoPage/ApprovalPage/ApprovalHistoryPage/DetailPage/index.jsx'
import UserListDemo from '#/pages/DemoPage/UserManagementDemo/UserListDemo'
import IPManageDemo from '#/pages/DemoPage/UserManagementDemo/IPManageDemo'
import TablePage from '#/pages/DemoPage/TablePage'
import ProfilePage from '#/pages/ProfilePage'
import EmptyLayout from '#/layouts/EmptyLayout'
import NotFoundPage from '#/pages/NotFoundPage'

const Routes = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [
                { path: '/', element: <MainPage /> },
                { path: '/mypage/profile', element: <ProfilePage /> },
                { path: '/poi-map', element: <PoiMapPage /> },
            ],
        },
        {
            element: <AuthLayout />,
            children: [{ path: '/login', element: <LoginPage /> }],
        },
        {
            element: <DetailLayout />,
            children: [{ path: '/components/layouts/detail', element: <MainPage /> }],
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
                { path: '/components/logins', element: <LoginDemoPage /> },
                { path: '/components/modals', element: <ModalPage /> },
                { path: '/components/popup', element: <PopupPage /> },
                { path: '/components/approval', element: <ApprovalPage /> },
                { path: '/components/approval/:type', element: <ApprovalHistoryPage /> },
                {
                    path: '/components/approval/:type/detail/:id',
                    element: <ApprovalHistoryDetailPage />,
                },
                { path: '/components/tables', element: <TablePage /> },
                { path: '/components/users', element: <UserManagementDemo /> },
                { path: '/components/users/list', element: <UserListDemo /> },
                { path: '/components/users/login-history', element: <UserLoginHistoryDemo /> },
                { path: '/components/users/permission-history', element: <UserPermissionDemo /> },
                { path: '/components/users/ip-management', element: <IPManageDemo /> },
            ],
        },
        {
            element: <EmptyLayout />,
            children: [{ path: '*', element: <NotFoundPage /> }],
        },
    ])
}

export default Routes
