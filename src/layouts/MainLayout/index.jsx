import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '#/layouts/Header'
import SideMenu from '../SideMenu'
import useLayoutStore from '#/store/useLayoutStore'

const MainLayout = () => {
    const { sidebar, openDrawer, toggleDrawer } = useLayoutStore()
    const { pathname } = useLocation()

    return (
        <Box sx={{ display: 'flex' }}>
            <Header toggleDrawer={toggleDrawer} />
            <Box
                sx={{
                    display: 'flex',
                    bgcolor: 'background.web',
                    flexGrow: 1,
                    overflow: 'auto',
                    height: '100vh',
                    '@media (max-width:1024px)': {
                        bgcolor: pathname === '/' ? 'background.mainMobile' : 'background.mobile',
                    },
                }}
            >
                {sidebar && <SideMenu open={openDrawer} toggleDrawer={toggleDrawer} />}
                <Container
                    sx={{
                        ml: 0,
                        mt: '50px',
                        mb: 1.5,
                        pt: '56px',
                        pl: '10px !important',
                        pr: '10px !important',
                        maxWidth: '100% !important',
                        '@media (max-width:1024px)': {
                            pl: '20px !important',
                            pr: '20px !important',
                            pt: '74px !important',
                            mt: '60px',
                            mb: '24px !important',
                        },
                    }}
                >
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout
