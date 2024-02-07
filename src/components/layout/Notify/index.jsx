import { useState } from 'react'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Popover from '@mui/material/Popover'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

import t from '#/common/libs/trans'
import { Button } from '@mui/material'
import NotifyItem from './NotifyItem'

function Notify({ notifications }) {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleReadAll = () => {
        setAnchorEl(null)
    }

    const handleItemClick = (item) => {
        console.log('handleItemClick', item)
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'notify-popover' : undefined

    return (
        <>
            <IconButton aria-describedby={id} size="large" color="inherit" onClick={handleClick}>
                <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ mt: 2 }}
                onClose={handleClose}
            >
                <Box p={2}>
                    <Button onClick={handleReadAll}>{t('read_all')}</Button>
                    {notifications.map((item, index) => (
                        <NotifyItem key={index} item={item} onClick={handleItemClick} />
                    ))}
                </Box>
            </Popover>
        </>
    )
}

export default Notify
