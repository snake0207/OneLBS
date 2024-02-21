import { Box, IconButton, Stack, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'

import user from '#/mock/data/user.json'

function UserInfo() {
    const navigate = useNavigate()
    const handleLogout = () => {
        // clear auth token & user data
        navigate('/login')
    }

    return (
        <Box sx={{ m: 1 }}>
            <Stack spacing={1} sx={{ m: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <AccountCircleIcon />
                    <Typography variant="h6" component="div">
                        {user?.name}
                    </Typography>
                    <IconButton onClick={handleLogout}>
                        <LogoutIcon />
                    </IconButton>
                </Stack>
                <Typography variant="subtitle1" component="div">
                    {user?.permission}
                </Typography>
            </Stack>
        </Box>
    )
}

export default UserInfo
