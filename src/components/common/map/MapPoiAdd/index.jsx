import { useEffect } from 'react'
import { getLayoutState } from '#/store/useLayoutStore.js'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    IconButton,
    Typography,
} from '@mui/material'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import Divider from '@mui/material/Divider'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import t from '#/common/libs/trans.js'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import CloseIcon from '@mui/icons-material/Close.js'

const MapPoiAdd = ({ setIsOpen, selectedPoi }) => {
    useEffect(() => {
        if (selectedPoi) setIsOpen(false)
    }, [selectedPoi])

    const { themeMode } = getLayoutState()
    return (
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
                            src={PointBlueIcon}
                            style={{ verticalAlign: 'middle', paddingRight: '4px' }}
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
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0px' }}>
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
                onClick={() => setIsOpen(false)}
            >
                <CloseIcon sx={{ color: 'background.close' }} />
            </IconButton>
        </Box>
    )
}

export default MapPoiAdd
