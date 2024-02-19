import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '#/layouts/Header'
import SideMenu from '../SideMenu'
import useLayoutStore from '#/store/useLayoutStore'
import { isMobile } from 'react-device-detect'
import { usePostRefreshToken } from '#/hooks/queries/auth'
import { useAccessTokenState } from '#/store/useAuthStore'

const MainLayout = () => {
    const { sidebar } = useLayoutStore()
    const [open, setOpen] = useState(false)
    const accessToken = useAccessTokenState()
    const location = useLocation()
    const navigate = useNavigate()
    const { mutate } = usePostRefreshToken()

    const toggleDrawer = () => {
        setOpen(!open)
    }

    useEffect(() => {
        // if (!accessToken) return navigate('/login')
        // mutate()
    }, [location.pathname])

    return (
        <Box sx={{ display: 'flex' }}>
            <Header toggleDrawer={toggleDrawer} />
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[0]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    overflow: 'auto',
                    height: '100vh',
                }}
            >
                {sidebar && <SideMenu open={open} toggleDrawer={toggleDrawer} />}
                <Container
                    sx={{
                        ml: isMobile ? 0 : 6.5,
                        mt: '64px',
                        mb: 4,
                        pt: '70px',
                        maxWidth: 'calc(100% - 53px) !important',
                    }}
                >
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout
