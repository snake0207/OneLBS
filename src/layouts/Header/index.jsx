import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import { usePostAskUserPermission, usePostLogout } from '#/hooks/queries/auth'

import { useNavigate } from 'react-router-dom'

import MenuIconDark from '#/assets/menuIconDark.svg'

import style from './style.module'
import { Stack, Tooltip } from '@mui/material'
import { useEffect } from 'react'

function Header({ toggleDrawer }) {
    const navigate = useNavigate()
    const { mutate: logoutMutate, isPending: logoutPending } = usePostLogout()
    const { mutate: permissionMutate, isPending: permissionPending } = usePostAskUserPermission()
    const handleLogout = () => {
        logoutMutate(
            { userId: 'acro' },
            {
                onSuccess: ({ data }) => {
                    console.log('logout : ', data)
                },
            },
        )
        navigate('/login')
    }

    useEffect(() => {
        permissionMutate(
            { userId: 'acro' },
            {
                onSuccess: ({ data }) => {
                    console.log('user-permission : ', data)
                },
            },
        )
    }, [])

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
                            <img src={MenuIconDark} />
                        </IconButton>
                    </Box>
                    <Stack direction={`row`} spacing={1.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '14px',
                                color: `text.gray`,
                            }}
                        >
                            {'acro 반갑습니다'}({`관리자`}){/* {data && data.userName} */}
                        </Box>
                        <Tooltip title={`로그아웃`}>
                            <IconButton onClick={handleLogout}>
                                <ExitToAppOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
