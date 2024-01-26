import { Box, Button, Tab, Tabs } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MapGpssDetailTab from '#/components/common/map/MapGpssDetail/MapGpssDetailTab/index.jsx'
import MapGpssHistoryTab from '#/components/common/map/MapGpssDetail/MapGpssHistoryTab/index.jsx'
import { useState } from 'react'

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
                        <Tab label="정보" value="info" />
                        <Tab label="최종수정정보" value="last-modified" />
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
