import { Box, Container, Divider, Stack } from '@mui/material'
import CarouselOverview from '#/components/auth/CarouselOverview'
import AuthFormContainer from '#/components/auth/authForm/AuthFormContainer'

function LoginPage() {
    const dummyImageList = [
        {
            imgUrl: './assets/login-img1.svg',
            title: 'AutoEver Global Search Info Service Management 1',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: './assets/login-img2.svg',
            title: 'AutoEver Global Search Info Service Management 2',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: './assets/login-img3.svg',
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
                //divider={<Divider orientation="vertical" flexItem />}
                sx={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <CarouselOverview dummyImageList={dummyImageList} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '600px',
                        pt: 10,
                        pl: 16,
                        pr: 16,
                    }}
                >
                    <AuthFormContainer />
                </Box>
            </Stack>
        </Container>
    )
}

export default LoginPage
