import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
//import FullscreenIcon from '@mui/icons-material/Fullscreen'
import useLayoutStore from '#/store/useLayoutStore'
import { usePostLogout } from '#/hooks/queries/auth'
import { Icon } from '@mui/material'

import t from '#/common/libs/trans'
import Dropdown from '#/components/common/button/Dropdown'
import useFullScreen from '#/hooks/useFullScreen'
import Settings from '#/components/layout/Settings'
import Notify from '#/components/layout/Notify'

import notifications from '#/mock/data/notifications.json'
import { useNavigate } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'

import MenuIcon from '#/assets/menuIcon.svg'
import MenuIconDark from '#/assets/menuIconDark.svg'
import UserIcon from '#/assets/userIcon.svg'
import UserIconDark from '#/assets/userIconDark.svg'
import LanguagesIcon from '#/assets/languagesIcon.svg'
import LanguagesIconDark from '#/assets/languagesIconDark.svg'
import FullscreenIcon from '#/assets/fullscreenIcon.svg'
import FullscreenIconDark from '#/assets/fullscreenIconDark.svg'

import style from './style.module'

const userMenus = [
    { key: 'profile', label: t('profile'), value: '/mypage/profile' },
    { key: 'logout', label: t('logout'), value: '/login' },
]
const languages = [
    { key: 'kr', label: t('KOR'), value: 'kr' },
    { key: 'en', label: t('ENG'), value: 'en' },
]

function Header({ toggleDrawer }) {
    const { language, setLanguage, themeMode } = useLayoutStore()
    const { mutate } = usePostLogout()
    const [, toggleFullScreen] = useFullScreen()
    const navigate = useNavigate()

    const handleSelectUserMenu = (item) => {
        console.log(item)

        if (item.key === 'logout') {
            // clear auth token & user data
            mutate()
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
        <AppBar position="absolute" sx={style.header}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open side menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer}
                        >
                            {themeMode === 'light' ? (
                                <img src={MenuIcon} />
                            ) : (
                                <img src={MenuIconDark} />
                            )}
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <BrowserView>
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            <Notify notifications={notifications} />
                            <Dropdown
                                items={userMenus}
                                onSelect={handleSelectUserMenu}
                                sx={style.dropdownText}
                            >
                                김승일
                            </Dropdown>
                            <Dropdown
                                items={languages}
                                selectable={true}
                                onSelect={handleSelectLangMenu}
                                sx={style.languagText}
                            >
                                {findLanguage(language)?.label}
                            </Dropdown>
                            <IconButton sx={{ p: 0 }} onClick={() => toggleFullScreen()}>
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '17px',
                                        height: '16px',
                                        mr: '12px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={FullscreenIcon} />
                                    ) : (
                                        <img src={FullscreenIconDark} />
                                    )}
                                </Icon>
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
                                sx={style.dropdownMobText}
                            >
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '20px',
                                        height: '20px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={UserIcon} />
                                    ) : (
                                        <img src={UserIconDark} />
                                    )}
                                </Icon>
                            </Dropdown>
                            <Dropdown
                                items={languages}
                                onSelect={handleSelectLangMenu}
                                sx={style.languagMobText}
                            >
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '21px',
                                        height: '20px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={LanguagesIcon} />
                                    ) : (
                                        <img src={LanguagesIconDark} />
                                    )}
                                </Icon>
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
