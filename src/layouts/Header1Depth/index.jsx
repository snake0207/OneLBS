import { AppBar, Toolbar, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

function Header1Depth() {
    const navigate = useNavigate()
    return (
        <AppBar position="absolute">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="back"
                    sx={{
                        mr: 2,
                    }}
                    onClick={() => navigate(-1)}
                >
                    <ArrowBackIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header1Depth
