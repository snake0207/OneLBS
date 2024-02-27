import { Box, Typography } from '@mui/material'

const CategoryCount = ({ icon, categoryName, count, ...rest }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ...rest,
            }}
        >
            {icon}
            <Typography sx={{ fontSize: '14px', color: 'text.dashboard', mt: '2px' }}>
                {categoryName}
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '600', color: 'text.darkgray' }}>
                {count}
            </Typography>
        </Box>
    )
}

export default CategoryCount
