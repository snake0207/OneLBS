import { useRoutes } from 'react-router-dom'
import AuthLayout from '#/layouts/AuthLayout'
import MainLayout from '#/layouts/MainLayout'
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
import UserManagementPage from '#/pages/DemoPage/UserManagementPage'
import UserLoginHistoryPage from '#/pages/DemoPage/UserManagementPage/UserLoginHistoryPage'
import UserPermissionPage from '#/pages/DemoPage/UserManagementPage/UserPermissionPage'
import ApprovalPage from '#/pages/DemoPage/ApprovalPage/index.jsx'
import FullApprovalHistoryPage from '#/pages/DemoPage/ApprovalPage/FullHistoryPage/index.jsx'
import RequestHistoryPage from '#/pages/DemoPage/ApprovalPage/RequestHistoryPage/index.jsx'
import FullHistoryDetailPage from '#/pages/DemoPage/ApprovalPage/FullHistoryPage/DetailPage/index.jsx'
import RequestHistoryDetailPage from '#/pages/DemoPage/ApprovalPage/RequestHistoryPage/DetailPage/index.jsx'
import ReviewHistoryPage from '#/pages/DemoPage/ApprovalPage/ReviewHistoryPage/index.jsx'
import ReviewHistoryDetailPage from '#/pages/DemoPage/ApprovalPage/ReviewHistoryPage/DetailPage/index.jsx'
import ApprovalHistoryPage from '#/pages/DemoPage/ApprovalPage/ApprovalHistoryPage/index.jsx'
import ApprovalHistoryDetailPage from '#/pages/DemoPage/ApprovalPage/ApprovalHistoryPage/DetailPage/index.jsx'

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
                { path: '/components/buttons', element: <ButtonPage /> },
                { path: '/components/select', element: <SelectPage /> },
                { path: '/components/maps', element: <MapPage /> },
                { path: '/components/logins', element: <LoginDemoPage /> },
                { path: '/components/modals', element: <ModalPage /> },
                { path: '/components/popup', element: <PopupPage /> },
                { path: '/components/approval', element: <ApprovalPage /> },
                { path: '/components/approval/all', element: <FullApprovalHistoryPage /> },
                { path: '/components/approval/all/detail/:id', element: <FullHistoryDetailPage /> },
                { path: '/components/approval/requester', element: <RequestHistoryPage /> },
                {
                    path: '/components/approval/requester/detail/:id',
                    element: <RequestHistoryDetailPage />,
                },
                { path: '/components/approval/reviewer', element: <ReviewHistoryPage /> },
                {
                    path: '/components/approval/reviewer/detail/:id',
                    element: <ReviewHistoryDetailPage />,
                },
                { path: '/components/approval/approver', element: <ApprovalHistoryPage /> },
                {
                    path: '/components/approval/approver/detail/:id',
                    element: <ApprovalHistoryDetailPage />,
                },
                { path: '/components/users', element: <UserManagementPage /> },
                { path: '/components/users/login-history', element: <UserLoginHistoryPage /> },
                { path: '/components/users/permission-history', element: <UserPermissionPage /> },
            ],
        },
    ])
}

export default Routes
