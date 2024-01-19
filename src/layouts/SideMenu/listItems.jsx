import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import Link from '@mui/material/Link'

import t from '#/common/libs/trans'

export const mainListItems = () => (
    <React.Fragment>
        <Link href="/" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={t('top_menu.search_management')} />
            </ListItemButton>
        </Link>
        <Link href="/poi" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={t('top_menu.poi_search')} />
            </ListItemButton>
        </Link>
        <Link href="/permit" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={t('top_menu.permit_history')} />
            </ListItemButton>
        </Link>
        <Link href="/mcp" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={t('top_menu.mcp_poi_statistics')} />
            </ListItemButton>
        </Link>
        <Link href="/maintenance" color="inherit" underline="none">
            <ListItemButton>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={t('top_menu.maintenance')} />
            </ListItemButton>
        </Link>
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
