import { Box, Typography } from '@mui/material'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import LanguageIcon from '#/assets/languagesIconDark.svg'

import style from './style.module'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import CountryTooltipMobileCarousel from '#/components/dashboard/CountryTooltip/CountryTooltipMobileCarousel'

const CountryTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Box
            sx={{
                display: 'inline-block',
                borderRadius: '8px',
                width: isMobile ? '100%' : 'calc(65% - 10px)',
                ml: isMobile ? 0 : '10px',
                mb: '10px',
                backgroundColor: 'background.contents',
                boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
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
                <Box>
                    <CountryTooltipMobileCarousel categoryCountList={categoryCountList} />
                </Box>
            </MobileView>
        </Box>
    )
}

export default CountryTooltip
