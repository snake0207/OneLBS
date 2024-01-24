import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ExpandMenuItem from '#/components/common/menu/ExpandMenuItem'

import Link from '@mui/material/Link'

import t from '#/common/libs/trans'

const menuItems = {
    search_management: [{ label: t('top_menu.map'), link: '/map' }],
    poi_search: [{ label: t('top_menu.map'), link: '/poi' }],
    permi_history: [
        { label: t('top_menu.all_history'), link: '/permit' },
        { label: t('top_menu.user_history'), link: '/permit' },
        { label: t('top_menu.admin_history'), link: '/permit' },
    ],
    mcp_poi_statistics: [
        { label: t('top_menu.time_statistics'), link: '/mcp' },
        { label: t('top_menu.area_statistics'), link: '/mcp' },
        { label: t('top_menu.cp_statistics'), link: '/mcp' },
    ],
    user_management: [
        { label: t('top_menu.user_list'), link: '/users' },
        { label: t('top_menu.user_login_history'), link: '/users' },
        { label: t('top_menu.user_permission_history'), link: '/users' },
    ],
}

export const mainListItems = () => (
    <React.Fragment>
        <ExpandMenuItem
            label={t('top_menu.search_management')}
            iconNode={<DashboardIcon />}
            items={menuItems['search_management']}
        />
        <ExpandMenuItem
            label={t('top_menu.poi_search')}
            iconNode={<BarChartIcon />}
            items={menuItems['poi_search']}
        />
        <ExpandMenuItem
            label={t('top_menu.permit_history')}
            iconNode={<LayersIcon />}
            items={menuItems['permi_history']}
        />
        <ExpandMenuItem
            label={t('top_menu.mcp_poi_statistics')}
            iconNode={<LayersIcon />}
            items={menuItems['mcp_poi_statistics']}
        />
        <ExpandMenuItem
            label={t('top_menu.user_management')}
            iconNode={<LayersIcon />}
            items={menuItems['user_management']}
        />
        <Link href="/components" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText primary="Components" />
            </ListItemButton>
        </Link>
    </React.Fragment>
)
