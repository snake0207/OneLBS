import { Box, Typography } from '@mui/material'
import RouterBreadcrumbs from '../RouterBreadcrumbs'

import { BrowserView, MobileView } from 'react-device-detect'

function TitleBar({ title }) {
    return (
        <>
            <BrowserView>
                <Box
                    display={'flex'}
                    sx={{
                        backgroundColor: 'background.titleBar',
                        mb: '10px',
                        ml: '-10px',
                        height: '45px',
                        alignItems: 'center',
                        p: '0 16px',
                        position: 'fixed',
                        top: '50px',
                        width: 'calc(100% - 57px)',
                        zIndex: 3,
                        borderBottom: '1px solid',
                        borderColor: 'table.viewBorderTh',
                        color: 'text.darkgray',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                            flexGrow: 0,
                            fontSize: '18px',
                            fontWeight: 600,
                        }}
                    >
                        {title}
                    </Typography>
                    <RouterBreadcrumbs />
                </Box>
            </BrowserView>
            <MobileView>
                <Box
                    display={'flex'}
                    sx={{
                        backgroundColor: 'background.titleBar',
                        mb: '20px',
                        ml: '-20px',
                        height: '54px',
                        alignItems: 'center',
                        p: '0 16px',
                        position: 'fixed',
                        top: '60px',
                        width: '100%',
                        zIndex: 3,
                        color: 'text.main',
                        borderBottom: '1px solid',
                        borderColor: 'border.main',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                            flexGrow: 1,
                            fontSize: '20px',
                            fontWeight: 600,
                            pl: '40px',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </MobileView>
        </>
    )
}

export default TitleBar
