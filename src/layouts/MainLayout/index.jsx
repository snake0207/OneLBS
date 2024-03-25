import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container, Divider } from '@mui/material'
import Header from '#/layouts/Header'
import SideMenu from '#/layouts/SideMenu'
import useLayoutStore from '#/store/useLayoutStore'
import Footer from '#/layouts/Footer'

const MainLayout = () => {
    const { sidebar, openDrawer, toggleDrawer } = useLayoutStore()
    const { pathname } = useLocation()

    return (
        <Box sx={{ display: 'flex' }}>
            <Header toggleDrawer={toggleDrawer} />
            <Box
                sx={{
                    display: 'flex',
                    bgcolor: 'background.gray',
                    flexGrow: 1,
                    overflow: 'auto',
                    minHeight: '100vh',
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
                        mb: '10px',
                        pt: '56px',
                        pl: '40px !important',
                        pr: '40px !important',
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
                    <Divider sx={{ mt: 4, mb: 2 }} />
                    <Footer pb={8} />
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout
