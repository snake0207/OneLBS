import { Box, IconButton, Stack, Typography, Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useLayoutStore from '#/store/useLayoutStore'
import UserIcon from '#/assets/userIcon.svg'
import UserIconDark from '#/assets/userIconDark.svg'
import LogoutIcon from '#/assets/logoutIcon.svg'
import LogoutIconDark from '#/assets/logoutIconDark.svg'

function UserInfo() {
    const navigate = useNavigate()
    const handleLogout = () => {
        // clear auth token & user data
        navigate('/login')
    }
    const { themeMode } = useLayoutStore()

    return (
        <Box>
            <Stack spacing={1} sx={{ p: '12px 24px' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Icon
                        sx={{
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            mr: '8px',
                        }}
                    >
                        {themeMode === 'light' ? (
                            <img src={UserIcon} loading="lazy" />
                        ) : (
                            <img src={UserIconDark} loading="lazy" />
                        )}
                    </Icon>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flex: 'auto', fontSize: 18, color: 'text.darkgray' }}
                    >
                        {acro}
                    </Typography>
                    <IconButton onClick={handleLogout} sx={{ borderTop: 'none !important' }}>
                        <Icon
                            sx={{
                                display: 'flex',
                                width: '20px',
                                height: '20px',
                            }}
                        >
                            {themeMode === 'light' ? (
                                <img src={LogoutIcon} loading="lazy" />
                            ) : (
                                <img src={LogoutIconDark} loading="lazy" />
                            )}
                        </Icon>
                    </IconButton>
                </Stack>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                        mt: '-5px !important',
                        fontSize: 14,
                        fontWeight: 400,
                        pl: '27px',
                        color: 'text.darkgray',
                    }}
                >
                    {Administrator}
                </Typography>
            </Stack>
        </Box>
    )
}

export default UserInfo
