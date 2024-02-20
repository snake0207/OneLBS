import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

function EmptyLayout() {
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
                <Outlet />
            </Box>
        </Box>
    )
}

export default EmptyLayout
