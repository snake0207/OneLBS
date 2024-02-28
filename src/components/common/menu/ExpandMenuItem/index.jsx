import { useEffect, useState } from 'react'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import t from '#/common/libs/trans'
import LinkRouter from '../LinkRouter'
import useLayoutStore from '#/store/useLayoutStore'

function ExpandMenuItem({ label, iconNode, items }) {
    const [open, setOpen] = useState(false)
    const { openDrawer, setDrawer } = useLayoutStore()

    useEffect(() => {
        if (open) {
            setDrawer(true)
        }
    }, [open, setDrawer])

    useEffect(() => {
        if (!openDrawer) {
            setOpen(false)
        }
    }, [openDrawer])

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <ListItemButton
                onClick={handleClick}
                sx={{
                    backgroundColor: open ? 'lnb.weblnbdeps' : 'weblnb',
                    '&:hover': {
                        backgroundColor: 'lnb.weblnbhover',
                    },
                    // '&:focus:not(:focus-visible)': {
                    //     backgroundColor: 'lnb.weblnbdeps',
                    // },
                    '@media (max-width:1024px)': {
                        backgroundColor: open ? 'lnb.mobilelnbdeps' : 'lnb.mobilelnb',
                        // '&:focus:not(:focus-visible)': {
                        //     backgroundColor: 'lnb.mobilelnbdeps',
                        // },
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
                            <LinkRouter
                                key={item?.label}
                                to={item?.menuUrl}
                                color="inherit"
                                underline="none"
                                sx={{ color: 'text.lnb' }}
                            >
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary={t(`top_menu.${item?.label}`)} />
                                </ListItemButton>
                            </LinkRouter>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}

export default ExpandMenuItem
