import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import t from '#/common/libs/trans.js'
import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import LanguageIcon from '#/assets/languagesIcon.svg'
import LanguageIconDark from '#/assets/languagesIconDark.svg'
import GpsIcon from '#/assets/gpsIcon.svg'
import GpsIconDark from '#/assets/gpsIconDark.svg'
import EvStationIcon from '#/assets/evStationIcon.svg'
import EvStationIconDark from '#/assets/evStationIconDark.svg'
import { getLayoutState } from '#/store/useLayoutStore'

import style from './style.module'

const MapGpssHistoryTab = ({ poiData }) => {
    const { themeMode } = getLayoutState()
    return (
        <Box sx={style.historyTabBox}>
            <Box>
                <Typography variant={'h6'} sx={style.title}>
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
                        <Typography sx={{ color: 'text.main' }}>
                            10036 New York, Manhattan, United States
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={style.hr} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ paddingTop: '5px' }}>
                        {themeMode === 'light' ? <img src={GpsIcon} /> : <img src={GpsIconDark} />}
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'text.main' }}>40.758077</Typography>
                    </Box>
                </Box>
                <Divider sx={style.hr} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ paddingTop: '5px' }}>
                        {themeMode === 'light' ? <img src={GpsIcon} /> : <img src={GpsIconDark} />}
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'text.main' }}>-73.985480</Typography>
                    </Box>
                </Box>
                <Divider sx={style.hr} />
            </Box>
            <Box>
                <Typography sx={style.categoryTitle}>{t('category', 'common')}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Accordion elevation={0} sx={{ padding: 0, backgroundColor: 'dialog.main' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ padding: '0px', fontSize: '18px', fontWeight: 500 }}
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
                        )}
                        EV Charging
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0, fontSize: '15px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default MapGpssHistoryTab
