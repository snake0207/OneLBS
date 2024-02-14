import { Box, Button, Tab, Tabs } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MapGpssDetailTab from '#/components/common/map/MapGpssDetail/DetailTab/index.jsx'
import MapGpssHistoryTab from '#/components/common/map/MapGpssDetail/HistoryTab/index.jsx'
import { useEffect, useState } from 'react'
import t from '#/common/libs/trans.js'

const MapGpssDetail = ({ selectedPoi, setSelectedPoi, poiData }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [tabSelected, setTabSelected] = useState('info')
    useEffect(() => {
        if (selectedPoi) setIsOpen(true)
        else setIsOpen(false)
    }, [selectedPoi])
    const handleClickTabChange = (event, newValue) => {
        setTabSelected(newValue)
    }
    const handleClickDetailClose = () => {
        setIsOpen(false)
        setSelectedPoi(null)
    }
    return (
        poiData && (
            <Box sx={{ display: isOpen ? 'flex' : 'none', margin: '10px' }}>
                <Box
                    sx={{
                        width: '350px',
                        paddingX: '16px',
                        background: '#ffffff',
                        paddingBottom: '16px',
                        borderRadius: '8px',
                        border: '1px solid #D1D1D1',
                    }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabSelected} onChange={handleClickTabChange}>
                            <Tab label={t('info', 'gpss')} value="info" />
                            <Tab label={t('last_modified_info', 'gpss')} value="last-modified" />
                        </Tabs>
                    </Box>
                    {tabSelected === 'info' ? (
                        <MapGpssDetailTab poiData={poiData} />
                    ) : (
                        <MapGpssHistoryTab poiData={poiData} />
                    )}
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
                    onClick={handleClickDetailClose}
                >
                    <CloseIcon />
                </Button>
            </Box>
        )
    )
}

export default MapGpssDetail
