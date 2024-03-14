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
import t from '#/common/libs/trans'

import { BrowserView, MobileView } from 'react-device-detect'
import { filterMobileMenuItems } from '#/common/libs/menuTools'
import LinkRouter from '#/components/common/menu/LinkRouter'

import useLayoutStore from '#/store/useLayoutStore'
import UserIcon from '#/assets/userIcon.svg'
import UserIconDark from '#/assets/userIconDark.svg'
import SearchIcon from '#/assets/searchIcon.svg'
import SearchIconDark from '#/assets/searchIconDark.svg'
import PoiIcon from '#/assets/poiIcon.svg'
import PoiIconDark from '#/assets/poiIconDark.svg'
import PoiSearchIcon from '#/assets/poiSearchIcon.svg'
import PoiSearchIconDark from '#/assets/poiSearchIconDark.svg'
import PaymentIcon from '#/assets/paymentIcon.svg'
import PaymentIconDark from '#/assets/paymentIconDark.svg'
import LayersIcon from '#/assets/layersIcon.svg'
import LayersIconDark from '#/assets/layersIconDark.svg'
import RuleIcon from '#/assets/ruleIcon.svg'
import RuleIconDark from '#/assets/ruleIconDark.svg'
import ViewModuleIcon from '#/assets/viewModuleIcon.svg'
import ViewModuleIconDark from '#/assets/viewModuleIconDark.svg'
import LogoIcon from '#/assets/logo.svg'
import LogoIconDark from '#/assets/logoDark.svg'
import DashboardIcon from '#/assets/dashboardIcon.svg'
import DashboardIconDark from '#/assets/dashboardIconDark.svg'
import MenuIcon from '#/assets/menuIcon.svg'
import MenuIconDark from '#/assets/menuIconDark.svg'

import { Close } from '@mui/icons-material'

import style from './style.module'
import { useNavigate } from 'react-router-dom'

import { data } from '#/mock/data/side_menu.json'

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
    switch (key) {
        case 'mypage':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? <img src={UserIcon} /> : <img src={UserIconDark} />}
                </Icon>
            )
        case 'dashboard':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={DashboardIcon} />
                    ) : (
                        <img src={DashboardIconDark} />
                    )}
                </Icon>
            )
        case 'search_management':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={SearchIcon} />
                    ) : (
                        <img src={SearchIconDark} />
                    )}
                </Icon>
            )
        case 'poi_search':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '23px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={PoiSearchIcon} />
                    ) : (
                        <img src={PoiSearchIconDark} />
                    )}
                </Icon>
            )
        case 'permit_history':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '21px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={PaymentIcon} />
                    ) : (
                        <img src={PaymentIconDark} />
                    )}
                </Icon>
            )
        case 'mcp_poi_statistics':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? <img src={PoiIcon} /> : <img src={PoiIconDark} />}
                </Icon>
            )
        case 'user_management':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={LayersIcon} />
                    ) : (
                        <img src={LayersIconDark} />
                    )}
                </Icon>
            )
        case 'permission_management':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? <img src={RuleIcon} /> : <img src={RuleIconDark} />}
                </Icon>
            )
        case 'common':
            return (
                <Icon
                    sx={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                    }}
                >
                    {themeMode === 'light' ? (
                        <img src={ViewModuleIcon} />
                    ) : (
                        <img src={ViewModuleIconDark} />
                    )}
                </Icon>
            )
        default:
            return null
    }
}

const createMenuItems = (menuItems, themeMode) => {
    return (
        <React.Fragment>
            {menuItems.map((item, index) => {
                if (item.label !== null) {
                    return (
                        <ExpandMenuItem
                            key={index}
                            label={t(`top_menu.${item.label}`)}
                            to={item.menuUrl}
                            iconNode={getMenuIcon(item.label, themeMode)}
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
    const navigate = useNavigate()
    const { themeMode, openDrawer } = useLayoutStore()
    return (
        <>
            <BrowserView>
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
            </BrowserView>
            <MobileView>
                <Drawer open={open} onClose={toggleDrawer} sx={style.navBox}>
                    <Box
                        sx={{
                            m: '56px 24px 12px 24px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        {themeMode === 'light' ? (
                            <img src={LogoIcon} onClick={() => navigate('/')} />
                        ) : (
                            <img src={LogoIconDark} onClick={() => navigate('/')} />
                        )}
                        <IconButton
                            onClick={toggleDrawer}
                            sx={{
                                width: '30px',
                                height: '30px',
                                color: 'text.gray',
                                borderColor: 'transparent !important',
                                border: 'none !important',
                            }}
                        >
                            {openDrawer && <Close />}
                        </IconButton>
                    </Box>

                    <UserInfo />
                    <List component="nav">
                        {createMenuItems(filterMobileMenuItems(data), themeMode)}
                    </List>
                </Drawer>
            </MobileView>
        </>
    )
}

export default SideMenu
