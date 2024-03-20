import { useState } from 'react'

import Box from '@mui/material/Box'
import Popover from '@mui/material/Popover'
import IconButton from '@mui/material/IconButton'
//import SettingsIcon from '@mui/icons-material/Settings'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import useLayoutStore from '#/store/useLayoutStore'
import { BrowserView, MobileView } from 'react-device-detect'
import { Icon, Tooltip } from '@mui/material'

import SettingIcon from '#/assets/settingIcon.svg'
import SettingIconDark from '#/assets/settingIconDark.svg'
import SettingMobIcon from '#/assets/settingMobIcon.svg'
import SettingMobIconDark from '#/assets/settingMobIconDark.svg'

import style from './style.module'

import t from '#/common/libs/trans'

function Settings() {
    const [anchorEl, setAnchorEl] = useState(null)
    const { sidebar, themeMode, setSidebar, setThemeMode, reset } = useLayoutStore()

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

    const handleReset = () => {
        handleClose()
        reset()
    }

    const open = Boolean(anchorEl)
    const id = open ? 'settings-popover' : undefined

    return (
        <>
            <Tooltip title="설정">
                <IconButton aria-describedby={id} sx={{ p: 0 }} onClick={handleClick}>
                    <BrowserView>
                        <Icon
                            sx={{
                                display: 'flex',
                                width: '20px',
                                height: '20px',
                                ml: '8px',
                            }}
                        >
                            {themeMode === 'light' ? (
                                <img src={SettingIcon} />
                            ) : (
                                <img src={SettingIconDark} />
                            )}
                        </Icon>
                    </BrowserView>
                    <MobileView>
                        <Icon
                            sx={{
                                display: 'flex',
                                width: '21px',
                                height: '20px',
                                ml: '8px',
                            }}
                        >
                            {themeMode === 'light' ? (
                                <img src={SettingMobIcon} />
                            ) : (
                                <img src={SettingMobIconDark} />
                            )}
                        </Icon>
                    </MobileView>
                </IconButton>
            </Tooltip>
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
                sx={style.settingBox}
                onClose={handleClose}
            >
                <Box
                    p={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <FormControl>
                        <FormLabel id="color-group-label">{'color_mode'}</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="color-group-label"
                            name="color-group"
                            value={themeMode}
                            onChange={handleColorMode}
                        >
                            <FormControlLabel
                                value="light"
                                control={<Radio color="primary" />}
                                label={'Light'}
                            />
                            <FormControlLabel
                                value="dark"
                                control={<Radio color="secondary" />}
                                label={'Dark'}
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={handleReset} sx={style.darkButton}>
                        {`초기화`}
                    </Button>
                </Box>
            </Popover>
        </>
    )
}

export default Settings
