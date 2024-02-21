import { useState } from 'react'

import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Popover from '@mui/material/Popover'
import IconButton from '@mui/material/IconButton'
import { Icon } from '@mui/material'
import useLayoutStore from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import { Button } from '@mui/material'
import NotifyItem from './NotifyItem'
import AlramIcon from '#/assets/alramIcon.svg'
import AlramIconDark from '#/assets/alramIconDark.svg'

function Notify({ notifications }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const { themeMode } = useLayoutStore()

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
                <Badge
                    badgeContent={notifications.length}
                    color="error"
                    sx={{ width: '20px', height: '20px' }}
                >
                    <Icon
                        sx={{
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            mr: '8px',
                        }}
                    >
                        {themeMode === 'light' ? (
                            <img src={AlramIcon} />
                        ) : (
                            <img src={AlramIconDark} />
                        )}
                    </Icon>
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
