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
                width: '170px',
                height: '60px',
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
                <img src={PointBlueIcon} style={{ width: 13 }} />
                <Typography variant={'h6'} color={'white'}>
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
                <img src={PointRedIcon} style={{ width: 13 }} />
                <Typography variant={'h6'} color={'white'}>
                    Here
                </Typography>
            </Box>
        </Box>
    )
}

export default MarkerDiscription
