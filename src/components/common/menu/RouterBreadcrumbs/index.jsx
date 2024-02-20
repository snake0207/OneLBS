import { useLocation } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import LinkRouter from '../LinkRouter'

import t from '#/common/libs/trans'

const breadcrumbNameMap = () => ({
    '/mypage': t('mypage'),
    '/mypage/profile': t('profile'),
    // user management
    '/user-management': t('top_menu.user_management'),
    '/user-management/user-list': t('top_menu.user_list'),
    '/user-management/login-history': t('top_menu.user_login_history'),
    '/user-management/role-history': t('top_menu.user_permission_history'),
    '/user-management/ip-access': t('top_menu.user_ip_access_management'),
    '/components': t('components'),
    '/components/layouts': t('layouts'),
    '/components/approval': t('approval', 'approval'),
    '/components/approval/all': t('list_all', 'approval'),
    '/components/approval/requester': t('list_requester', 'approval'),
    '/components/approval/reviewer': t('list_reviewer', 'approval'),
    '/components/approval/approver': t('list_approver', 'approval'),
    '/components/approval/all/detail': t('detail', 'approval'),
    '/components/approval/requester/detail': t('detail', 'approval'),
    '/components/approval/reviewer/detail': t('detail', 'approval'),
    '/components/approval/approver/detail': t('detail', 'approval'),
})

function isAvailablePath(path) {
    // Exclude paths
    const excludePaths = ['/mypage', '/user-management']
    return !excludePaths.includes(path)
}

function RouterBreadcrumbs() {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter
                underline="hover"
                color="inherit"
                to="/"
                sx={{ fontSize: '13px', color: '#888' }}
            >
                {t('home')}
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return last ? (
                    <Typography
                        color="text.primary"
                        key={to}
                        sx={{ fontSize: '13px', color: '#888' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </Typography>
                ) : isAvailablePath(to) ? (
                    <LinkRouter
                        underline="hover"
                        color="inherit"
                        to={to}
                        key={to}
                        sx={{ fontSize: '13px', color: '#888' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </LinkRouter>
                ) : (
                    <Typography
                        color="text.primary"
                        key={to}
                        sx={{ fontSize: '13px', color: '#888' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </Typography>
                )
            })}
        </Breadcrumbs>
    )
}

export default RouterBreadcrumbs
