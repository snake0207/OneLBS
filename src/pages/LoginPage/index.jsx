import { Box, Container, Divider, Stack } from '@mui/material'
import CarouselOverview from '#/components/auth/CarouselOverview'
import AuthFormContainer from '#/components/auth/authForm/AuthFormContainer'

function LoginPage() {
    const dummyImageList = [
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 1',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 2',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 3',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
    ]
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
                sx={{ flexDirection: 'row', border: '3px double gray', height: 630 }}
            >
                <Box sx={{ flex: 1 }}>
                    <CarouselOverview dummyImageList={dummyImageList} />
                </Box>
                <Box
                    sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', p: 4 }}
                >
                    <AuthFormContainer />
                </Box>
            </Stack>
        </Container>
    )
}

export default LoginPage
