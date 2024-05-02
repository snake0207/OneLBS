import { Box, Button, Typography, Icon } from '@mui/material'

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
                {`페이지 없음`}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={style.detailBox}>
                {`해당 페이지를 찾을 수 없습니다.`}
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate('/', { replace: true })}
                sx={style.darkBlueButton}
            >
                {`메인으로 이동`}
            </Button>
        </Box>
    )
}

export default NotFoundPage
