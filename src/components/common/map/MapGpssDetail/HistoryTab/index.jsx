import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EvStationIcon from '@mui/icons-material/EvStation'
import t from '#/common/libs/trans.js'

const MapGpssHistoryTab = ({ poiData }) => {
    return (
        <Box sx={{ paddingTop: '16px' }}>
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
                <Accordion elevation={0} sx={{ padding: 0 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0px' }}>
                        <EvStationIcon /> EV Charging
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

export default MapGpssHistoryTab
