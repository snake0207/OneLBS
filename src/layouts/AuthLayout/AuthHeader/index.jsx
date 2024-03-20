import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import useLayoutStore from '#/store/useLayoutStore'

import { Typography } from '@mui/material'
import Logo from '#/components/common/Logo/Logo'

function AuthHeader() {
    const { themeMode } = useLayoutStore()

    return (
        <AppBar position="fixed" sx={{ color: 'transparent' }}>
            <Container
                maxWidth="xl"
                sx={{
                    minHeight: '60px',
                    height: '60px',
                    borderBottom: '1px solid',
                    borderColor: 'border.main',
                    backgroundColor: 'background.mobile',
                    '@media (max-width:1024px)': {
                        borderColor: 'border.header',
                    },
                }}
            >
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Typography sx={{ pt: '5px' }}>
                            <Logo imgKt mode={themeMode} />
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AuthHeader
