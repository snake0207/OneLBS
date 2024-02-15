import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js'
import EvStationIcon from '#/assets/evStationIcon.svg'

const EvCharging = () => {
    return (
        <Box sx={{ display: 'flex', marginBottom: '16px' }}>
            <Accordion elevation={0} sx={{ padding: 0 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ padding: '0px', fontSize: '18px', fontWeight: 500 }}
                >
                    <img
                        src={EvStationIcon}
                        style={{ verticalAlign: 'middle', paddingRight: '4px' }}
                    />
                    EV Charging
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default EvCharging
