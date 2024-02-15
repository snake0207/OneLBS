import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import useLayoutStore from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import Dropdown from '#/components/common/button/Dropdown'
import useFullScreen from '#/hooks/useFullScreen'
import Settings from '#/components/layout/Settings'
import Notify from '#/components/layout/Notify'

import notifications from '#/mock/data/notifications.json'
import { useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const userMenus = [
    { key: 'profile', label: t('profile'), value: '/mypage/profile' },
    { key: 'logout', label: t('logout'), value: '/login' },
]
const languages = [
    { key: 'kr', label: t('KOR'), value: 'kr' },
    { key: 'en', label: t('ENG'), value: 'en' },
]

function Header({ toggleDrawer }) {
    const { language, setLanguage } = useLayoutStore()
    const [, toggleFullScreen] = useFullScreen()
    const navigate = useNavigate()

    const handleSelectUserMenu = (item) => {
        console.log(item)

        if (item.value === '/logout') {
            // clear auth token & user data
        }

        navigate(item.value)
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
                            aria-label="open side menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <BrowserView>
                        <Box sx={{ flexGrow: 0 }}>
                            <Notify notifications={notifications} />
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
                            <IconButton sx={{ p: 0 }} onClick={() => toggleFullScreen()}>
                                <FullscreenIcon />
                            </IconButton>
                            <Settings />
                        </Box>
                    </BrowserView>
                    <MobileView>
                        <Box sx={{ flexGrow: 0 }}>
                            <Notify notifications={notifications} />
                            <Dropdown
                                items={userMenus}
                                onSelect={handleSelectUserMenu}
                                iconNode={<AccountCircleIcon />}
                            />
                            <Dropdown
                                items={languages}
                                selectable={true}
                                onSelect={handleSelectLangMenu}
                            >
                                {findLanguage(language)?.label}
                            </Dropdown>
                            <Settings />
                        </Box>
                    </MobileView>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
