import { Box, Typography } from '@mui/material'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import LanguageIcon from '#/assets/languagesIconDark.svg'

import style from './style.module'

const VectorMapTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Box sx={style.dashboardBox}>
            <Box sx={style.Title}>
                <img src={LanguageIcon} style={{ width: '20px' }} />
                <Typography>{title}</Typography>
            </Box>
            {categoryCountList.map((item) => (
                <Box
                    key={item.category}
                    sx={{
                        padding: 1,
                        bgcolor: 'color.germany',
                        borderRadius: 2,
                        width: 'calc(50% - 5px)',
                        height: 100,
                        justifyContent: 'center',
                        m: '0 0 10px 0',
                        '&:nth-of-type(even)': {
                            ml: '10px',
                        },
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
