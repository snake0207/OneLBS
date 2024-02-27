import { Box, Button, Typography, Icon } from '@mui/material'
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported'

import t from '#/common/libs/trans'
import { useNavigate } from 'react-router-dom'

import ErrorIcon from '#/assets/errorIcon.svg'
import ErrorIconDark from '#/assets/errorIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'
import style from './style.module'

function NotFoundPage() {
    const navigate = useNavigate()
    const { themeMode } = getLayoutState()

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
            <Icon sx={style.img}>
                {themeMode === 'light' ? <img src={ErrorIcon} /> : <img src={ErrorIconDark} />}
            </Icon>
            <Typography variant="h3" component="h1" sx={style.title}>
                {t('page_not_found')}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={style.detailBox}>
                {t('page_not_found_message')}
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate('/login', { replace: true })}
                sx={style.button}
            >
                {t('login_page')}
            </Button>
        </Box>
    )
}

export default NotFoundPage
