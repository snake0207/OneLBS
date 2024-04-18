import { useEffect, useState } from 'react'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import LinkRouter from '../LinkRouter'
import useLayoutStore from '#/store/useLayoutStore'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { useUserTypeState, useUserPermissionsState } from '#/store/useUserStore'

function ExpandMenuItem({ label, to, iconNode, items }) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const { setDrawer, openDrawer } = useLayoutStore()
    const storeUserType = useUserTypeState()
    const storePermissions = useUserPermissionsState()

    const handleClick = () => {
        if (items.length > 0) setOpen(!open)
        else navigate(to)
    }

    const disabledListItem = (menuCode) => {
        const permission = storePermissions.filter((item) => item.menuCode === menuCode)
        const isYn = storeUserType === 'A' ? permission[0].adminYn : permission[0].operatorYn
        console.log(menuCode, ', permission : ', permission, ' > ', isYn)
        return isYn === 'N' ? true : false
    }

    useEffect(() => {
        if (open) {
            setDrawer(true)
        }
    }, [open, setDrawer])

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
                {openDrawer ? (
                    <ListItemIcon>{iconNode}</ListItemIcon>
                ) : (
                    <Tooltip title={label} arrow placement="right-start">
                        <ListItemIcon>{iconNode}</ListItemIcon>
                    </Tooltip>
                )}
                <ListItemText primary={label} />{' '}
                {items.length > 0 ? open ? <ExpandLess /> : <ExpandMore /> : <></>}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item) => {
                        const disabled = disabledListItem(item?.menuCode)
                        return (
                            <LinkRouter
                                key={item?.menuCode}
                                to={item?.menuUrl}
                                color="inherit"
                                underline="none"
                                sx={{
                                    color: 'text.lnb',
                                    pointerEvents: disabled ? 'none' : '',
                                    cursor: disabled ? 'default' : 'pointer',
                                }}
                            >
                                <ListItemButton disabled={disabled} sx={{ pl: 4 }}>
                                    <ListItemText primary={item?.label} />
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
