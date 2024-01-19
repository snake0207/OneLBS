import { Box, Container, Divider, Stack } from '@mui/material'
import CarouselOverview from '#/pages/LoginPage/CarouselOverview'
import AuthFormContainer from '#/pages/LoginPage/AuthForm'

function LoginPage() {
    return (
        <Container
            maxWidth={'lg'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Stack
                divider={<Divider orientation="vertical" flexItem />}
                sx={{ flexDirection: 'row', border: '3px double gray' }}
            >
                <Box sx={{ flex: 1 }}>
                    <CarouselOverview />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <AuthFormContainer />
                </Box>
            </Stack>
        </Container>
    )
}

export default LoginPage
