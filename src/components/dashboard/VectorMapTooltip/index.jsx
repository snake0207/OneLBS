import { Box, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'

const VectorMapTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                border: 1,
                bgcolor: 'white',
                borderRadius: 2,
                p: 1,
                width: 226,
            }}
        >
            <Box
                sx={{
                    padding: 1,
                    width: 100,
                    height: 100,
                }}
            >
                <LanguageIcon />
                <Typography>{title}</Typography>
            </Box>
            {categoryCountList.map((item) => (
                <Box
                    key={item.category}
                    sx={{
                        padding: 1,
                        bgcolor: '#C7F1FF',
                        borderRadius: 2,
                        width: 100,
                        height: 100,
                    }}
                >
                    <CategoryCount
                        categoryName={item.category}
                        icon={themeMode === 'light' ? item.lightIcon : item.darkIcon}
                        count={item.count}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default VectorMapTooltip
