import { useLocation } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import LinkRouter from '../LinkRouter'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const breadcrumbNameMap = () => ({
    // 측위기반 정보관리
    '/facility': `측위기반정보 관리`,
    '/facility/bts': `기지국 시설정보`,
    '/facility/wifi': `WiFi 시설정보`,
    '/facility/sync-history': `정보현행화 이력`,
    // 시스템 관리
    '/system': `시스템 관리`,
    '/system/service-list': `서비스 현황`,
    '/system/service-regist': `서비스 등록`,
    '/system/service-edit': `서비스 상세정보`,
    '/system/ue-list': `단말모델 현황`,
    '/system/ue-regist': `단말모델 등록`,
    '/system/ue-edit': `단말모델 상세정보`,
    '/system/engine': `엔진설정관리`,
    '/system/loctrans': `위치정보 처리내역`,
    '/system/locview': `위치정보 열람내역`,
    // 사용자 관리
    '/user': `사용자 관리`,
    '/user/user-list': `사용자 현황`,
    '/user/user-regist': `사용자 등록`,
    '/user/user-edit': `사용자 상세정보`,
    '/user/permission': `권한 관리`,
    '/user/history': `사용자 이력관리`,
})

function isAvailablePath(path) {
    // Exclude paths
    const excludePaths = [
        '/mypage',
        '/search-management',
        '/poi-view',
        '/user-management',
        '/permission-management',
    ]
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
                sx={{ fontSize: '14px', color: 'text.darkgray', fontWeight: 'bold' }}
            >
                {`Home`}
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
