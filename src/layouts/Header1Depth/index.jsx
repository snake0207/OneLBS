import { AppBar, Toolbar, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import useLayoutStore from '#/store/useLayoutStore'
import MenuBackIcon from '#/assets/menuBackIcon.svg'
import MenuBackIconDark from '#/assets/menuBackIconDark.svg'

function Header1Depth() {
    const navigate = useNavigate()
    const { themeMode } = useLayoutStore()
    return (
        <AppBar
            position="absolute"
            sx={{
                backgroundColor: 'background.mobile',
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderColor: 'border.main',
                backgroundImage: 'none',
                '@media (max-width:1024px)': {
                    borderColor: 'border.header',
                    minHeight: '61px',
                },
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="back"
                    sx={{
                        mr: 2,
                        color: 'text.main',
                    }}
                    onClick={() => navigate(-1)}
                >
                    {themeMode === 'light' ? (
                        <img src={MenuBackIcon} style={{ display: 'flex', width: '30px' }} />
                    ) : (
                        <img src={MenuBackIconDark} style={{ display: 'flex', width: '30px' }} />
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header1Depth
