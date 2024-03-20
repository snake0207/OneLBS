import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import AuthFormContainer from '#/components/auth/authForm/AuthFormContainer'

function LoginPage() {
    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid
                item="true"
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url('/loginSlide.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item="true" xs={12} sm={8} md={5} elevation={6}>
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
            </Grid>
        </Grid>
    )
}

export default LoginPage
