import { Box } from '@mui/material'
import AuthFormContainer from '#/components/auth/authForm/AuthFormContainer'

function LoginPage() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
            <Box
                flex={6}
                sx={{
                    backgroundImage: `url('/loginSlide.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Box flex={4}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <AuthFormContainer />
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage
