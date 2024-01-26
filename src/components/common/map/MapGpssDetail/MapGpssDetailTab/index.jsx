import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EvStationIcon from '@mui/icons-material/EvStation'
import EditIcon from '@mui/icons-material/Edit'

const MapGpssDetailTab = () => {
    return (
        <Box sx={{ paddingTop: '16px' }}>
            <Box>
                <Typography variant={'h6'}>Times Square</Typography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: '8px', marginBottom: '16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ paddingTop: '5px' }}>
                        <PlaceIcon />
                    </Box>
                    <Box>
                        <Typography>10036 New York, Manhattan, United States</Typography>
                    </Box>
                    <Button
                        variant={'contained'}
                        sx={{
                            ml: 'auto',
                            minWidth: '15px',
                            width: '30px',
                            minHeight: '15px',
                            height: '30px',
                        }}
                    >
                        <EditIcon />
                    </Button>
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ paddingTop: '5px' }}>
                        <LanguageIcon />
                    </Box>
                    <Box>
                        <Typography>40.758077</Typography>
                    </Box>
                    <Button
                        variant={'contained'}
                        sx={{
                            ml: 'auto',
                            minWidth: '15px',
                            width: '30px',
                            minHeight: '15px',
                            height: '30px',
                        }}
                    >
                        <EditIcon />
                    </Button>
                </Box>
                <Divider sx={{ marginY: '5px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ paddingTop: '5px' }}>
                        <LanguageIcon />
                    </Box>
                    <Box>
                        <Typography>-73.985480</Typography>
                    </Box>
                    <Button
                        variant={'contained'}
                        sx={{
                            ml: 'auto',
                            minWidth: '15px',
                            width: '30px',
                            minHeight: '15px',
                            height: '30px',
                        }}
                    >
                        <EditIcon />
                    </Button>
                </Box>
            </Box>
            <Box>
                <Typography>카테고리</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', marginBottom: '16px' }}>
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
            <Box>
                <Box>
                    <Typography>승인 요청 이유</Typography>
                </Box>
                <Divider />
                <TextField
                    sx={{ marginBottom: '16px', marginTop: '8px' }}
                    size={'small'}
                    multiline
                    fullWidth
                    placeholder="승인 요청 이유를 입력하세요"
                ></TextField>
            </Box>
            <Box>
                <Box>
                    <Typography>결제자</Typography>
                </Box>
                <Divider />
                <TextField
                    sx={{ marginBottom: '16px', marginTop: '8px' }}
                    size={'small'}
                    multiline
                    fullWidth
                    placeholder="승인 요청 이유를 입력하세요"
                ></TextField>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '6px' }}>
                <Button variant={'contained'}>임시저장</Button>
                <Button variant={'contained'}>수정요청</Button>
                <Button variant={'contained'}>삭제요청</Button>
            </Box>
        </Box>
    )
}

export default MapGpssDetailTab
