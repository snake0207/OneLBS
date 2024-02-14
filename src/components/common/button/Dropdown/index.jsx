import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Dropdown({
    children,
    open,
    items,
    onSelect,
    selectable = false,
    iconNode = null,
    ...props
}) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const handleSelect = (item) => {
        if (onSelect) onSelect(item)

        setSelectedItem(item)
        handleCloseMenu()
    }

    if (!items) return null

    return (
        <>
            {iconNode ? (
                <Icon
                    id="arrow-button"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleOpenMenu}
                    sx={{
                        varticalAlign: 'middle',
                    }}
                >
                    {iconNode}
                </Icon>
            ) : (
                <Button
                    id="arrow-button"
                    aria-controls={open ? 'arrow-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleOpenMenu}
                    endIcon={<KeyboardArrowDownIcon />}
                    {...props}
                >
                    {selectable && selectedItem ? selectedItem.label : children}
                </Button>
            )}
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} onClick={() => handleSelect(item)}>
                        <Typography textAlign="center">{item.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default Dropdown
