import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import SettingsIcon from '@mui/icons-material/Settings'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import NotificationsIcon from '@mui/icons-material/Notifications'
import useLayoutStore from '#/store/useLayoutStore'

import Badge from '@mui/material/Badge'

import t from '#/common/libs/trans'
import Dropdown from '#/components/common/button/Dropdown'

const userMenus = [
    { key: 'profile', label: t('profile') },
    { key: 'logout', label: t('logout') },
]
const languages = [
    { key: 'kr', label: t('KOR'), value: 'kr' },
    { key: 'en', label: t('ENG'), value: 'en' },
]

function Header() {
    const { language, setLanguage } = useLayoutStore()
    const [, setAnchorElNav] = React.useState(null)

    const handleSelectUserMenu = (item) => {
        console.log(item)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleSelectLangMenu = (item) => {
        console.log(item)
        setLanguage(item.value)
    }

    const findLanguage = (lang) => {
        return languages.find((item) => item.value === lang)
    }

    return (
        <AppBar position="absolute">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open notifications">
                            <IconButton color="inherit" size="large">
                                <Badge badgeContent={4} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Dropdown items={userMenus} onSelect={handleSelectUserMenu}>
                            James
                        </Dropdown>
                        <Dropdown
                            items={languages}
                            selectable={true}
                            onSelect={handleSelectLangMenu}
                        >
                            {findLanguage(language)?.label}
                        </Dropdown>
                        <IconButton sx={{ p: 0 }}>
                            <FullscreenIcon />
                        </IconButton>
                        <IconButton sx={{ p: 0 }}>
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
