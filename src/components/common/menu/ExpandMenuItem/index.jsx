import { useState } from 'react'

import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import t from '#/common/libs/trans'

function ExpandMenuItem({ label, iconNode, items }) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{iconNode}</ListItemIcon>
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item) => {
                        return (
                            <Link
                                key={item?.label}
                                href={item?.menuUrl}
                                color="inherit"
                                underline="none"
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary={t(`top_menu.${item?.label}`)} />
                                </ListItemButton>
                            </Link>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}

export default ExpandMenuItem
