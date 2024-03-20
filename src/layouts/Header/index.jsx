import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
//import FullscreenIcon from '@mui/icons-material/Fullscreen'
import useLayoutStore from '#/store/useLayoutStore'
import { useGetAskUserInfo, usePostLogout } from '#/hooks/queries/auth'
import { Icon, Tooltip } from '@mui/material'

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
import FullscreenIcon from '#/assets/fullscreenIcon.svg'
import FullscreenIconDark from '#/assets/fullscreenIconDark.svg'

import style from './style.module'

const userMenus = [
    { key: 'profile', label: t('profile'), value: '/mypage/profile' },
    { key: 'logout', label: t('logout'), value: '/login' },
]

function Header({ toggleDrawer }) {
    const { themeMode } = useLayoutStore()
    const { mutate } = usePostLogout()
    const [, toggleFullScreen] = useFullScreen()
    const navigate = useNavigate()
    const { data } = useGetAskUserInfo()
    const handleSelectUserMenu = (item) => {
        console.log(item)

        if (item.key === 'logout') {
            // clear auth token & user data
            mutate()
        }

        navigate(item.value)
    }

    return (
        <AppBar position="absolute" sx={style.header}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none' } }}></Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Notify notifications={notifications} />
                        <Dropdown
                            items={userMenus}
                            onSelect={handleSelectUserMenu}
                            sx={style.dropdownText}
                        >
                            {'Jone Doe'}
                            {/* {data && data.userName} */}
                        </Dropdown>

                        <Tooltip title="전체 화면">
                            <IconButton sx={{ p: 0 }} onClick={() => toggleFullScreen()}>
                                <Icon
                                    sx={{
                                        display: 'flex',
                                        width: '17px',
                                        height: '16px',
                                        mr: '16px',
                                        mr: '16px',
                                    }}
                                >
                                    {themeMode === 'light' ? (
                                        <img src={FullscreenIcon} />
                                    ) : (
                                        <img src={FullscreenIconDark} />
                                    )}
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        <Settings />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
