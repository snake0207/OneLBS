import { useState } from 'react'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Popover from '@mui/material/Popover'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import NotificationsIcon from '@mui/icons-material/Notifications'

import t from '#/common/libs/trans'
import { Button } from '@mui/material'

function Notify() {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'notify-popover' : undefined

    return (
        <>
            <IconButton aria-describedby={id} size="large" color="inherit" onClick={handleClick}>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ mt: 2 }}
                onClose={handleClose}
            >
                <Box p={2}>
                    <Button onClick={handleClose}>전체읽음</Button>
                </Box>
            </Popover>
        </>
    )
}

export default Notify
