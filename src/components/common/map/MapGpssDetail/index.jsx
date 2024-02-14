import { Box, IconButton, Tab, Tabs } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MapGpssDetailTab from '#/components/common/map/MapGpssDetail/DetailTab/index.jsx'
import MapGpssHistoryTab from '#/components/common/map/MapGpssDetail/HistoryTab/index.jsx'
import { useEffect, useState } from 'react'
import t from '#/common/libs/trans.js'
import style from './style.module'
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
                        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                    }}
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabSelected} onChange={handleClickTabChange} sx={style.tabs}>
                            <Tab label={t('info', 'gpss')} value="info" sx={style.tabMenu}/>
                            <Tab label={t('last_modified_info', 'gpss')} value="last-modified" sx={style.tabMenu}/>
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
    )
}

export default MapGpssDetail
