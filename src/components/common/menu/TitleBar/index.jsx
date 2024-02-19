import { Box, Typography } from '@mui/material'
import RouterBreadcrumbs from '../RouterBreadcrumbs'

function TitleBar({ title }) {
    return (
        <Box
            display={'flex'}
            sx={{
                backgroundColor: '#f5f5f5',
                mb: '20px',
                ml: '-19px',
                height: '45px',
                alignItems: 'center',
                p: '0 16px',
                position: 'fixed',
                top: '64px',
                width: 'calc(100% - 59px)',
                zIndex: 3,
            }}
        >
            <Typography
                variant="h6"
                component="h6"
                sx={{ flexGrow: 1, fontSize: '18px', fontWeight: 600 }}
            >
                {title}
            </Typography>
            <RouterBreadcrumbs />
        </Box>
    )
}

export default TitleBar
