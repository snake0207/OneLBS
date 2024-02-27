import { Box, Typography } from '@mui/material'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import LanguageIcon from '#/assets/languagesIconDark.svg'

import style from './style.module'
import { BrowserView, MobileView } from 'react-device-detect'
import CountryTooltipMobileCarousel from '#/components/dashboard/CountryTooltip/CountryTooltipMobileCarousel'

const CountryTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Box
            sx={{
                display: 'inline-block',
                borderRadius: '8px',
                width: 'calc(65% - 10px)',
                ml: '10px',
            }}
        >
            <Box sx={style.Title}>
                <img src={LanguageIcon} />
                <Typography sx={{ fontSize: '20px', fontWeight: 500, ml: '6px' }}>
                    {title}
                </Typography>
            </Box>
            <BrowserView>
                <Box sx={style.dashboardBox}>
                    {categoryCountList.map((item) => (
                        <CategoryCount
                            key={item.category}
                            categoryName={item.category}
                            icon={themeMode === 'light' ? item.lightIcon : item.darkIcon}
                            count={item.count}
                        />
                    ))}
                </Box>
            </BrowserView>
            <MobileView>
                <CountryTooltipMobileCarousel categoryCountList={categoryCountList} />
            </MobileView>
        </Box>
    )
}

export default CountryTooltip
