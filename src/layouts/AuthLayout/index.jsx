import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import AuthHeader from '#/layouts/AuthLayout/AuthHeader'

const AuthLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    height: '100vh',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.color[100]
                            : theme.palette.color[1001],
                    '& .MuiPaper-elevation': {
                        backgroundColor: 'transparent',
                        backgroundImage: 'none',
                        boxShadow: 'none',
                        borderBottom: '1px solid !important',
                        borderColor: 'color.header',
                    },
                }}
            >
                <AuthHeader />
                <Outlet />
            </Box>
        </Box>
    )
}

export default AuthLayout
