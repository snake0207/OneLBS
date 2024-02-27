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
import LoginDemoPage from '#/pages/DemoPage/LoginPage'
import PopupPage from '#/pages/DemoPage/PopupPage'
import InputPage from '#/pages/DemoPage/InputPage'
import ModalPage from '#/pages/DemoPage/ModalPage'
import UserManagementDemo from '#/pages/DemoPage/UserManagementDemo'
import UserLoginHistoryDemo from '#/pages/DemoPage/UserManagementDemo/UserLoginHistoryDemo'
import UserPermissionDemo from '#/pages/DemoPage/UserManagementDemo/UserPermissionDemo'
import UserListDemo from '#/pages/DemoPage/UserManagementDemo/UserListDemo'
import IPManageDemo from '#/pages/DemoPage/UserManagementDemo/IPManageDemo'
import TablePage from '#/pages/DemoPage/TablePage'
import ProfilePage from '#/pages/ProfilePage'
import EmptyLayout from '#/layouts/EmptyLayout'
import NotFoundPage from '#/pages/NotFoundPage'
import UserListPage from '#/pages/users/UserListPage'
import LoginHistoryPage from '#/pages/users/LoginHistoryPage'
import PermissionHistoryPage from '#/pages/users/PermissionHistoryPage'
import IpManagePage from '#/pages/users/IpManagePage'
import DashboardPage from '#/pages/DemoPage/DashboardPage'
import PrivateRoute from '#/routes/PrivateRoute'
import ApprovalHistoryPage from '#/pages/ApprovalHistoryPage/index.jsx'
import ApprovalHistoryDetailPage from '#/pages/ApprovalHistoryPage/DetailPage/index.jsx'
import MapSearchPage from '#/pages/search/MapSearchPage'
import POISearchPage from '#/pages/search/POISearchPage'
import MapSearchDetail from '#/pages/search/MapSearchDetail'
import POISearchDetail from '#/pages/search/POISearchDetail'

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
                        // user management
                        { path: '/user-management/user-list', element: <UserListPage /> },
                        { path: '/user-management/login-history', element: <LoginHistoryPage /> },
                        {
                            path: '/user-management/role-history',
                            element: <PermissionHistoryPage />,
                        },
                        { path: '/user-management/ip-access', element: <IpManagePage /> },
                        // approval history
                        { path: '/approval/:type?', element: <ApprovalHistoryPage /> },
                        {
                            path: '/approval/:type?/detail/:id',
                            element: <ApprovalHistoryDetailPage />,
                        },
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
                { path: '/components/logins', element: <LoginDemoPage /> },
                { path: '/components/modals', element: <ModalPage /> },
                { path: '/components/popup', element: <PopupPage /> },
                { path: '/components/tables', element: <TablePage /> },
                { path: '/components/users', element: <UserManagementDemo /> },
                { path: '/components/users/list', element: <UserListDemo /> },
                { path: '/components/users/login-history', element: <UserLoginHistoryDemo /> },
                { path: '/components/users/permission-history', element: <UserPermissionDemo /> },
                { path: '/components/users/ip-management', element: <IPManageDemo /> },
                { path: '/components/dashboard', element: <DashboardPage /> },
            ],
        },
        {
            element: <EmptyLayout />,
            children: [{ path: '*', element: <NotFoundPage /> }],
        },
    ])
}

export default Routes
