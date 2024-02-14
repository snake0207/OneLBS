import { Box, IconButton, Tab, Tabs } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MapGpssDetailTab from '#/components/common/map/MapGpssDetail/DetailTab/index.jsx'
import MapGpssHistoryTab from '#/components/common/map/MapGpssDetail/HistoryTab/index.jsx'
import { useState } from 'react'
import t from '#/common/libs/trans.js'

import style from './style.module'

const MapGpssDetail = () => {
    const [tabSelected, setTabSelected] = useState('info')
    const handleChange = (event, newValue) => {
        setTabSelected(newValue)
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    width: '350px',
                    paddingBottom: '16px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                }}
            >
                <Box>
                    <Tabs value={tabSelected} onChange={handleChange} sx={style.tabs}>
                        <Tab label={t('info', 'gpss')} value="info" sx={style.tabMenu} />
                        <Tab
                            label={t('last_modified_info', 'gpss')}
                            value="last-modified"
                            sx={style.tabMenu}
                        />
                    </Tabs>
                </Box>
                {tabSelected === 'info' ? <MapGpssDetailTab /> : <MapGpssHistoryTab />}
            </Box>
            <IconButton
                variant={'contained'}
                sx={{
                    inWidth: '22px',
                    minHeight: '22px',
                    width: '35px',
                    height: '35px',
                }}
            >
                <CloseIcon />
            </IconButton>
        </Box>
    )
}

export default MapGpssDetail
