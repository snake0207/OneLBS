import LinkRouter from '#/components/common/menu/LinkRouter'
import { Box, Typography, Icon } from '@mui/material'

import useLayoutStore from '#/store/useLayoutStore'
import BannerarrowIcon from '#/assets/m_bannerarrowIcon.svg'
import BannerarrowIconDark from '#/assets/m_bannerarrowIconDark.svg'
import style from './style.module'

const ShortCutBanner = ({ bannerTitle, bannerDesc, path, icon }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Box sx={style.dashboardBox}>
            <Typography variant="h5" sx={style.Title}>
                {bannerTitle}
            </Typography>
            <Typography sx={style.subTitle}>{bannerDesc}</Typography>
            <LinkRouter to={path} sx={style.more}>
                {`더보기`}
                {themeMode === 'light' ? (
                    <img src={BannerarrowIcon} />
                ) : (
                    <img src={BannerarrowIconDark} />
                )}
            </LinkRouter>
            <Icon
                sx={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '15px',
                    width: '50px',
                    height: '50px',
                }}
            >
                {icon}
            </Icon>
        </Box>
    )
}

export default ShortCutBanner
