import { Box, Divider, Typography } from '@mui/material'
import CategoryCount from '#/components/dashboard/CategoryCount'
import LanguageIcon from '@mui/icons-material/Language'

const CountryTooltip = ({ title, categoryCountList }) => {
    return (
        <Box sx={{ display: 'inline-block', border: 1, bgcolor: 'white', borderRadius: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 1,
                    padding: 2,
                }}
            >
                <LanguageIcon />
                <Typography>{title}</Typography>
            </Box>
            <Divider sx={{ borderColor: 'black' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2 }}>
                {categoryCountList.map((item) => (
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
