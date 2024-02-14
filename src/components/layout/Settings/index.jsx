import { useState } from 'react'

import Box from '@mui/material/Box'
import Popover from '@mui/material/Popover'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import useLayoutStore from '#/store/useLayoutStore'
import { BrowserView, MobileView } from 'react-device-detect'

import t from '#/common/libs/trans'

function Settings() {
    const [anchorEl, setAnchorEl] = useState(null)
    const { sidebar, themeMode, device, setSidebar, setThemeMode, setDevice, reset } =
        useLayoutStore()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleColorMode = (event) => {
        setThemeMode(event.target.value)
    }

    const handleSidebar = (event) => {
        setSidebar(event.target.value === 'expand')
    }

    const handleDevice = (event) => {
        setDevice(event.target.value)
    }

    const handleReset = () => {
        reset()
    }

    const open = Boolean(anchorEl)
    const id = open ? 'settings-popover' : undefined

    return (
        <>
            <IconButton aria-describedby={id} sx={{ p: 0 }} onClick={handleClick}>
                <SettingsIcon />
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
                    <FormControl>
                        <MobileView>
                            <FormLabel id="color-group-label">{t('color_mode')}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="color-group-label"
                                name="color-group"
                                value={themeMode}
                                onChange={handleColorMode}
                            >
                                <FormControlLabel
                                    value="light"
                                    control={<Radio />}
                                    label={t('white')}
                                />
                                <FormControlLabel
                                    value="dark"
                                    control={<Radio />}
                                    label={t('black')}
                                />
                            </RadioGroup>
                        </MobileView>
                        <BrowserView>
                            <FormLabel id="color-group-label">{t('color_mode')}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="color-group-label"
                                name="color-group"
                                value={themeMode}
                                onChange={handleColorMode}
                            >
                                <FormControlLabel
                                    value="light"
                                    control={<Radio />}
                                    label={t('white')}
                                />
                                <FormControlLabel
                                    value="dark"
                                    control={<Radio />}
                                    label={t('black')}
                                />
                            </RadioGroup>
                            <FormLabel id="sidebar-group-label">{t('sidebar')}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="sidebar-group-label"
                                name="sidebar-group"
                                value={sidebar ? 'expand' : 'collapse'}
                                onChange={handleSidebar}
                            >
                                <FormControlLabel
                                    value={'expand'}
                                    control={<Radio />}
                                    label={t('expand')}
                                />
                                <FormControlLabel
                                    value={'collapse'}
                                    control={<Radio />}
                                    label={t('collapse')}
                                />
                            </RadioGroup>
                            <FormLabel id="device-group-label">{t('device')}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="device-group-label"
                                name="device-group"
                                value={device}
                                onChange={handleDevice}
                            >
                                <FormControlLabel value="pc" control={<Radio />} label={t('pc')} />
                                <FormControlLabel
                                    value="mobile"
                                    control={<Radio />}
                                    label={t('mobile')}
                                />
                            </RadioGroup>
                        </BrowserView>
                    </FormControl>
                </Box>
                <Button onClick={handleReset}>{t('reset')}</Button>
            </Popover>
        </>
    )
}

export default Settings
