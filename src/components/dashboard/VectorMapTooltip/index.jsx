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
                <Box key={item.category} sx={style.items}>
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
