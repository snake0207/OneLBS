import { Link as RouterLink, useLocation } from 'react-router-dom'

import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

import t from '#/common/libs/trans'

const breadcrumbNameMap = () => ({
    '/components': t('components'),
    '/components/layouts': t('layouts'),
})

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />
}

function RouterBreadcrumbs() {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter underline="hover" color="inherit" to="/">
                {t('home')}
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {breadcrumbNameMap()[to]}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                        {breadcrumbNameMap()[to]}
                    </LinkRouter>
                )
            })}
        </Breadcrumbs>
    )
}

export default RouterBreadcrumbs
