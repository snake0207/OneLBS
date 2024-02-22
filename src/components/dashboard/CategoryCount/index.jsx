import { Box, Typography } from '@mui/material'

const CategoryCount = ({ icon, categoryName, count }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon}
            <Typography>{categoryName}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>{count}</Typography>
        </Box>
    )
}

export default CategoryCount
