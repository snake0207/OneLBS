import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language'
import CloseIcon from '@mui/icons-material/Close'
import PlaceIcon from '@mui/icons-material/Place'
import EvStationIcon from '@mui/icons-material/EvStation'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import t from '#/common/libs/trans.js'
import { useEffect, useState } from 'react'

const MapPoiDetail = ({ selectedPoi, setSelectedPoi, poiData }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (selectedPoi) setIsOpen(true)
        else setIsOpen(false)
    }, [selectedPoi])

    const handleClickDetailClose = () => {
        setIsOpen(false)
        setSelectedPoi(null)
    }
    return (
        isOpen && (
            <Box sx={{ display: 'flex', margin: '10px' }}>
                <Box
                    sx={{
                        width: '350px',
                        padding: '16px',
                        background: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #D1D1D1',
                    }}
                >
                    <Box>
                        <Typography variant={'h6'}>Times Square</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ marginY: '16px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                <PlaceIcon />
                            </Box>
                            <Box>
                                <Typography>10036 New York, Manhattan, United States</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: '5px' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                <LanguageIcon />
                            </Box>
                            <Box>
                                <Typography>40.758077</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: '5px' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                <LanguageIcon />
                            </Box>
                            <Box>
                                <Typography>-73.985480</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>{t('category', 'common')}</Typography>
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex' }}>
                        <Accordion elevation={0}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{ padding: '0px' }}
                            >
                                <EvStationIcon /> EV Charging
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: 0 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Box>
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

export default MapPoiDetail
