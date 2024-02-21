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
            <ListItemButton
                onClick={handleClick}
                sx={{
                    backgroundColor: open ? 'lnb.weblnbdeps' : 'weblnb',
                    borderRadius: '350px',
                    '&:hover': {
                        backgroundColor: 'lnb.weblnbhover',
                    },
                    '&:focus:not(:focus-visible)': {
                        backgroundColor: 'lnb.weblnbdeps',
                        borderRadius: '350px',
                    },
                    '@media (max-width:1024px)': {
                        backgroundColor: open ? 'lnb.mobilelnbdeps' : 'lnb.mobilelnb',
                        '&:focus:not(:focus-visible)': {
                            backgroundColor: 'lnb.mobilelnbdeps',
                        },
                    },
                }}
            >
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
                                sx={{ color: 'text.lnb' }}
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
