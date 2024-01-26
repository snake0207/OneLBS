import { Box, Typography } from '@mui/material'
import RouterBreadcrumbs from '../RouterBreadcrumbs'

function TitleBar({ title }) {
    return (
        <Box display={'flex'}>
            <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
            <RouterBreadcrumbs />
        </Box>
    )
}

export default TitleBar
