import { useLocation } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import LinkRouter from '../LinkRouter'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

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
    // permission management
    '/permission-management': t('top_menu.permission_management'),
    '/permission-management/permissions-list': t('top_menu.permission_list'),
    // search management
    '/search-management': t('top_menu.search_management'),
    '/search-management/map': t('top_menu.search_map'),
    '/poi-view': t('top_menu.poi_search'),
    '/poi-view/map': t('top_menu.poi_map'),
    '/components': t('components'),
    '/components/layouts': t('layouts'),
    // approval history
    '/approval': t('list_all', 'approval'),
    '/approval/user-history': t('requester', 'approval'),
    '/approval/reviewer-history': t('reviewer', 'approval'),
    '/approval/manager-history': t('approver', 'approval'),
    '/approval/detail': t('detail', 'approval'),
    '/approval/user-history/detail': t('detail', 'approval'),
    '/approval/reviewer-history/detail': t('detail', 'approval'),
    '/approval/manager-history/detail': t('detail', 'approval'),
})

function isAvailablePath(path) {
    // Exclude paths
    const excludePaths = ['/mypage', '/search-management', '/poi-view', '/user-management']
    return !excludePaths.includes(path)
}

function RouterBreadcrumbs() {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
                position: 'fixed',
                right: '16px',
                top: '60px',
                color: 'text.gray',
                fontSize: '13px',
            }}
            separator={<NavigateNextIcon fontSize="small" />}
        >
            <LinkRouter
                underline="hover"
                color="inherit"
                to="/"
                sx={{ fontSize: '13px', color: 'text.gray' }}
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
                        sx={{ fontSize: '13px', color: 'text.gray' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </Typography>
                ) : isAvailablePath(to) ? (
                    <LinkRouter
                        underline="hover"
                        color="inherit"
                        to={to}
                        key={to}
                        sx={{ fontSize: '13px', color: 'text.gray' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </LinkRouter>
                ) : (
                    <Typography
                        color="text.primary"
                        key={to}
                        sx={{ fontSize: '13px', color: 'text.gray' }}
                    >
                        {breadcrumbNameMap()[to]}
                    </Typography>
                )
            })}
        </Breadcrumbs>
    )
}

export default RouterBreadcrumbs
