import { Box, Typography } from '@mui/material'
import RouterBreadcrumbs from '../RouterBreadcrumbs'


function TitleBar({ title }) {
    return (
        <>
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
        </>
    )
}

export default TitleBar
