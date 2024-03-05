import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Typography,
    IconButton,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import t from '#/common/libs/trans.js'
import { useEffect, useState } from 'react'
import PointBlueEVIcon from '#/assets/pointBlueEVIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'

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
    const { themeMode } = getLayoutState()
    return (
        isOpen && (
            <Box sx={{ display: 'flex', margin: '10px' }}>
                <Box
                    sx={{
                        width: '350px',
                        padding: '16px',
                        background: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                    }}
                >
                    <Box>
                        <Typography variant={'h6'} sx={{ fontSize: '20px', fontWeight: 600 }}>
                            <img
                                src={PointBlueEVIcon}
                                style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                width={18}
                            />
                            Times Square
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                {themeMode === 'light' ? (
                                    <img src={LanguageIcon} />
                                ) : (
                                    <img src={LanguageIconDark} />
                                )}
                            </Box>
                            <Box>
                                <Typography>10036 New York, Manhattan, United States</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: '5px' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                {themeMode === 'light' ? (
                                    <img src={GpsIcon} />
                                ) : (
                                    <img src={GpsIconDark} />
                                )}
                            </Box>
                            <Box>
                                <Typography>40.758077</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: '5px' }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ paddingTop: '5px' }}>
                                {themeMode === 'light' ? (
                                    <img src={GpsIcon} />
                                ) : (
                                    <img src={GpsIconDark} />
                                )}
                            </Box>
                            <Box>
                                <Typography>-73.985480</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{ marginY: '5px' }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 600, color: '#00418D' }}>
                            {t('category', 'common')}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Accordion elevation={0}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{ padding: '0px' }}
                            >
                                {themeMode === 'light' ? (
                                    <img
                                        src={EvStationIcon}
                                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    />
                                ) : (
                                    <img
                                        src={EvStationIconDark}
                                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                                    />
                                )}{' '}
                                EV Charging
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: 0 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
                <IconButton
                    variant={'contained'}
                    sx={{
                        minWidth: '22px',
                        minHeight: '22px',
                        width: '35px',
                        height: '35px',
                    }}
                    onClick={handleClickDetailClose}
                >
                    <CloseIcon sx={{ color: 'background.close' }} />
                </IconButton>
            </Box>
        )
    )
}

export default MapPoiDetail
