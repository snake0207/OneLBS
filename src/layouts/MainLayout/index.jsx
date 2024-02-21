import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '#/layouts/Header'
import SideMenu from '../SideMenu'
import useLayoutStore from '#/store/useLayoutStore'
import { isMobile } from 'react-device-detect'

const MainLayout = () => {
    const { sidebar } = useLayoutStore()
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Header toggleDrawer={toggleDrawer} />
            <Box
                sx={{
                    bgcolor: 'background.web',
                    flexGrow: 1,
                    overflow: 'auto',
                    height: '100vh',
                    '@media (max-width:1024px)': {
                        bgcolor: 'background.mobile',
                    },
                }}
            >
                {sidebar && <SideMenu open={open} toggleDrawer={toggleDrawer} />}
                <Container
                    sx={{
                        ml: 0,
                        mt: '50px',
                        mb: 1.5,
                        pt: '56px',
                        pl: '67px !important',
                        pr: '10px !important',
                        maxWidth: '100% !important',
                        '@media (max-width:1024px)': {
                            pl: '24px !important',
                            pr: '24px !important',
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
