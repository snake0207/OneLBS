import { Box, Button, Typography } from '@mui/material'
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported'

import t from '#/common/libs/trans'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <BrowserNotSupportedIcon sx={{ fontSize: 100 }} />
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    color: 'text.primary',
                }}
            >
                {t('page_not_found')}
            </Typography>
            <Typography
                variant="subtitle1"
                component="div"
                sx={{
                    width: '40%',
                    textAlign: 'center',
                    mt: 2,
                    color: 'text.secondary',
                }}
            >
                {t('page_not_found_message')}
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate('/login', { replace: true })}
                sx={{ mt: 2 }}
            >
                {t('login_page')}
            </Button>
        </Box>
    )
}

export default NotFoundPage
