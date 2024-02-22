import { Box, Divider, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CategoryCount from '#/components/dashboard/CategoryCount'

const mockData = [
    { icon: <InfoIcon />, category: 'evCharging', count: '001' },
    { icon: <InfoIcon />, category: 'fuel', count: '002' },
    { icon: <InfoIcon />, category: 'parking', count: '003' },
    { icon: <InfoIcon />, category: 'h2Charging', count: '004' },
    { icon: <InfoIcon />, category: 'dealerPoi', count: '005' },
]

const CountryTooltip = ({ id }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                border: 1,
                bgcolor: 'white',
                borderRadius: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 1,
                    padding: 2,
                }}
            >
                <InfoIcon />
                <Typography>국가코드 {id}</Typography>
            </Box>
            <Divider sx={{ borderColor: 'black' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2 }}>
                {mockData.map((item) => (
                    <CategoryCount
                        key={item.category}
                        categoryName={item.category}
                        icon={item.icon}
                        count={item.count}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default CountryTooltip
