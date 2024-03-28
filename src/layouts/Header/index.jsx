import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
//import FullscreenIcon from '@mui/icons-material/Fullscreen'
import useLayoutStore from '#/store/useLayoutStore'
import { useGetAskUserInfo, usePostLogout } from '#/hooks/queries/auth'

import Dropdown from '#/components/common/button/Dropdown'
import { useNavigate } from 'react-router-dom'

import MenuIcon from '#/assets/menuIcon.svg'
import MenuIconDark from '#/assets/menuIconDark.svg'

import style from './style.module'

const userMenus = [
    { key: 'profile', label: `내 정보`, value: '/mypage/profile' },
    { key: 'logout', label: `로그 아웃`, value: '/login' },
]

function Header({ toggleDrawer }) {
    const { themeMode } = useLayoutStore()
    const { mutate } = usePostLogout()
    const navigate = useNavigate()
    // const { data } = useGetAskUserInfo()
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
                        {/* <Notify notifications={notifications} /> */}
                        <Dropdown
                            items={userMenus}
                            onSelect={handleSelectUserMenu}
                            sx={style.dropdownText}
                        >
                            {'Jone Doe'}
                            {/* {data && data.userName} */}
                        </Dropdown>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
