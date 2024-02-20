import React from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Drawer, Toolbar } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'

import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import RememberMeIcon from '@mui/icons-material/RememberMe'
import RuleIcon from '@mui/icons-material/Rule'
import ViewModuleIcon from '@mui/icons-material/ViewModule'

import ExpandMenuItem from '#/components/common/menu/ExpandMenuItem'
import UserInfo from './UserInfo'
import t from '#/common/libs/trans'

import { BrowserView, MobileView } from 'react-device-detect'
import { data } from '#/mock/data/side_menu.json'
import { filterMobileMenuItems } from '#/common/libs/menuTools'
import LinkRouter from '#/components/common/menu/LinkRouter'

const drawerWidth = 240

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.down('md')]: {
        width: `0px`,
        left: `-1px`,
    },
})

const VariantDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
)

const getMenuIcon = (key) => {
    switch (key) {
        case 'mypage':
            return <RememberMeIcon />
        case 'search_management':
            return <DashboardIcon />
        case 'poi_search':
            return <BarChartIcon />
        case 'permit_history':
            return <LayersIcon />
        case 'mcp_poi_statistics':
            return <LayersIcon />
        case 'user_management':
            return <LayersIcon />
        case 'permission_management':
            return <RuleIcon />
        case 'common':
            return <ViewModuleIcon />
        default:
            return null
    }
}

const createMenuItems = (menuItems) => {
    return (
        <React.Fragment>
            {menuItems.map((item, index) => {
                if (item.label !== null) {
                    return (
                        <ExpandMenuItem
                            key={index}
                            label={t(`top_menu.${item.label}`)}
                            iconNode={getMenuIcon(item.label)}
                            items={item.children}
                        />
                    )
                }
            })}
            <>
                <LinkRouter to="/components" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <AppRegistrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Components" />
                    </ListItemButton>
                </LinkRouter>
            </>
        </React.Fragment>
    )
}

const SideMenu = ({ open, toggleDrawer }) => {
    return (
        <>
            <BrowserView>
                <VariantDrawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">{createMenuItems(data.menuTree)}</List>
                </VariantDrawer>
            </BrowserView>
            <MobileView>
                <Drawer open={open} onClose={toggleDrawer}>
                    <UserInfo />
                    <List component="nav">
                        {createMenuItems(filterMobileMenuItems(data.menuTree))}
                    </List>
                </Drawer>
            </MobileView>
        </>
    )
}

export default SideMenu
