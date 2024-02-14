import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import AuthHeader from '#/layouts/AuthLayout/AuthHeader'

const AuthLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
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
                <AuthHeader />
                <Outlet />
            </Box>
        </Box>
    )
}

export default AuthLayout
