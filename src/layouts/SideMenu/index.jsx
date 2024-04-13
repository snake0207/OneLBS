import React from 'react'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Drawer, Toolbar, Icon, Box } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'

import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandMenuItem from '#/components/common/menu/ExpandMenuItem'
import UserInfo from './UserInfo'

import LinkRouter from '#/components/common/menu/LinkRouter'

import useLayoutStore from '#/store/useLayoutStore'
import LogoIcon from '#/assets/logo.svg'
import LogoIconDark from '#/assets/logoDark.svg'
import MenuIcon from '#/assets/menuIcon.svg'
import MenuIconDark from '#/assets/menuIconDark.svg'

import { Close } from '@mui/icons-material'

import style from './style.module'

import { data } from '#/mock/data/side_menu.json'

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined'
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import { useNavigate } from 'react-router-dom'

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

const getMenuIcon = (key, themeMode) => {
    const iconComponents = {
        dashboard: <SpaceDashboardOutlinedIcon />,
        service: <WorkHistoryOutlinedIcon />,
        facility: <SyncAltOutlinedIcon />,
        system: <HubOutlinedIcon />,
        account: <ManageAccountsOutlinedIcon />,
    }

    const selectedIcon = iconComponents[key] || <ErrorOutlineOutlinedIcon />
    return <Icon>{selectedIcon}</Icon>
}

const createMenuItems = (menuItems, themeMode) => {
    return (
        <React.Fragment>
            {menuItems.map((item, index) => {
                if (item.label !== null) {
                    return (
                        <ExpandMenuItem
                            key={index}
                            label={item.label}
                            to={item.menuUrl}
                            iconNode={getMenuIcon(item.icon, themeMode)}
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
    const { themeMode, openDrawer } = useLayoutStore()
    const navigate = useNavigate()

    return (
        <VariantDrawer variant="permanent" open={open} sx={style.webnavBox}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    minHeight: '50px !important',
                }}
            >
                <Box sx={{ m: '24px 104px 30px 24px' }}>
                    <img src={LogoIcon} onClick={() => navigate('/')} />
                </Box>
                <IconButton
                    onClick={toggleDrawer}
                    sx={{
                        mt: '-30px',
                        color: 'text.gray',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {openDrawer ? (
                        <Close sx={{ width: '20px', hegith: '20px' }} />
                    ) : themeMode === 'light' ? (
                        <img src={MenuIcon} width={20} height={20} />
                    ) : (
                        <img src={MenuIconDark} width={20} height={20} />
                    )}
                </IconButton>
            </Toolbar>
            <List component="nav">{createMenuItems(data, themeMode)}</List>
        </VariantDrawer>
    )
}

export default SideMenu
