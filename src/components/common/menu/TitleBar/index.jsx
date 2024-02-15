import { Box, Typography } from '@mui/material'
import RouterBreadcrumbs from '../RouterBreadcrumbs'

import { BrowserView, MobileView } from 'react-device-detect'

function TitleBar({ title }) {
    return (
        <Box display={'flex'}>
            <BrowserView>
                <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <RouterBreadcrumbs />
            </BrowserView>
            <MobileView>
                <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </MobileView>
        </Box>
    )
}

export default TitleBar
