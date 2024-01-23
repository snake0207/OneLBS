import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language'
import CloseIcon from '@mui/icons-material/Close'
import PlaceIcon from '@mui/icons-material/Place'
import EvStationIcon from '@mui/icons-material/EvStation'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const MapPoiDetail = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    width: '350px',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #D1D1D1',
                }}
            >
                <Box>
                    <Typography variant={'h6'}>Times Square</Typography>
                </Box>
                <Divider />
                <Grid container sx={{ marginY: '16px' }}>
                    <Grid item xs={1}>
                        <LanguageIcon />
                    </Grid>
                    <Grid item xs={11}>
                        40.758077
                    </Grid>
                    <Grid item xs={1}>
                        <LanguageIcon />
                    </Grid>
                    <Grid item xs={11}>
                        -73.985480
                    </Grid>
                    <Grid item xs={1}>
                        <PlaceIcon />
                    </Grid>
                    <Grid item xs={11}>
                        10036 New York, Manhattan, United States
                    </Grid>
                </Grid>
                <Box>
                    <Typography>카테고리</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex' }}>
                    <Accordion elevation={0} sx={{ padding: 0 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
            >
                <CloseIcon />
            </Button>
        </Box>
    )
}

export default MapPoiDetail
