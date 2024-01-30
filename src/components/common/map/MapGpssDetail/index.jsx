import { Box, Button, Tab, Tabs } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MapGpssDetailTab from '#/components/common/map/MapGpssDetail/DetailTab/index.jsx'
import MapGpssHistoryTab from '#/components/common/map/MapGpssDetail/HistoryTab/index.jsx'
import { useState } from 'react'
import t from '#/common/libs/trans.js'

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
                    paddingX: '16px',
                    paddingBottom: '16px',
                    borderRadius: '8px',
                    border: '1px solid #D1D1D1',
                }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabSelected} onChange={handleChange}>
                        <Tab label={t('info', 'gpss')} value="info" />
                        <Tab label={t('last_modified_info', 'gpss')} value="last-modified" />
                    </Tabs>
                </Box>
                {tabSelected === 'info' ? <MapGpssDetailTab /> : <MapGpssHistoryTab />}
            </Box>
            <Button
                variant={'contained'}
                sx={{
                    ml: 1,
                    minWidth: '22px',
                    minHeight: '22px',
                    width: '35px',
                    height: '35px',
                    borderRadius: '8px',
                }}
            >
                <CloseIcon />
            </Button>
        </Box>
    )
}

export default MapGpssDetail
