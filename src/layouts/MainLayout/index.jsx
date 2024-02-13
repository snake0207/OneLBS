import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '#/layouts/Header'
import SideMenu from '../SideMenu'
import useLayoutStore from '#/store/useLayoutStore'

const MainLayout = () => {
    const { sidebar } = useLayoutStore()
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
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
                <Container maxWidth="xl" sx={{ ml: 6.5, mt: 12, mb: 4 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout
