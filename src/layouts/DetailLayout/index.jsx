import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header1Depth from '../Header1Depth'

function DetailLayout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header1Depth />
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
                <Container
                    sx={{
                        mt: '64px',
                    }}
                >
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default DetailLayout
