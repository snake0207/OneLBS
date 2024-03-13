import PointBlueIcon from '#/assets/pointBlueIcon.svg'
import PointRedIcon from '#/assets/pointRedIcon.svg'
import { Box, Typography } from '@mui/material'

const MarkerDiscription = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: '8px',
                backgroundColor: '#05141F80',
                width: '130px',
                height: '42px',
                paddingX: '14px',
                gap: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 'auto',
                    gap: '6px',
                }}
            >
                <img src={PointBlueIcon} style={{ width: 8 }} />
                <Typography variant={'h6'} color={'white'} sx={{ fontSize: '14px' }}>
                    MCP
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 'auto',
                    gap: '6px',
                }}
            >
                <img src={PointRedIcon} style={{ width: 8 }} />
                <Typography variant={'h6'} color={'white'} sx={{ fontSize: '14px' }}>
                    Here
                </Typography>
            </Box>
        </Box>
    )
}

export default MarkerDiscription
