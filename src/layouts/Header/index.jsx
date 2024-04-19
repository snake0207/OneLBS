import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import { useGetAskUserPermission, usePostLogout } from '#/hooks/queries/auth'

import { useNavigate } from 'react-router-dom'

import MenuIconDark from '#/assets/menuIconDark.svg'

import style from './style.module'
import { Stack, Tooltip } from '@mui/material'
import { useEffect } from 'react'
import { useUserActions, useUserTypeState, useUserPermissionsState } from '#/store/useUserStore'

function Header({ toggleDrawer }) {
    const navigate = useNavigate()
    const { setPermissionsUserStore } = useUserActions()
    const storeUserType = useUserTypeState()
    const storePermissions = useUserPermissionsState()
    const { mutate: logoutMutate, isPending: logoutPending } = usePostLogout()
    const { data: respPermissions } = useGetAskUserPermission({}, { enabled: true })
    const handleLogout = () => {
        logoutMutate(
            {},
            {
                onSuccess: ({ data }) => {
                    console.log('logout : ', data)
                },
            },
        )
        // navigate('/login')
    }

    useEffect(() => {
        if (respPermissions) {
            // console.log('user-permission : ', respPermissions?.data)
            if (respPermissions?.data.code === '0000') {
                setPermissionsUserStore(respPermissions?.data.data)
                console.log('storePermissions : ', storePermissions)
            }
        }
    }, [respPermissions])

    // console.log('storeUserType : ', storeUserType)
    // console.log('storePermissions : ', storePermissions)

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
