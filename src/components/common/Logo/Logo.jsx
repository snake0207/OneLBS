// material-ui
import { CardMedia } from '@mui/material'
import KtIcon from '#/assets/kt_logo_light.png'
import KtIconDark from '#/assets/kt_logo_dark.png'
import LogoIcon from '#/assets/loginLogoIcon.png'
import LogoIconDark from '#/assets/loginLogoIconDark.png'

// ==============================|| LOGO SVG ||============================== //

const Logo = ({ imgKt, mode }) => {
    return (
        <>
            {imgKt && (
                <CardMedia
                    sx={{ width: '44px', height: '36px' }}
                    component="img"
                    image={mode === 'light' ? KtIcon : KtIconDark}
                    alt="KT 홈페이지 이동"
                />
            )}
            {!imgKt && (
                <CardMedia
                    sx={{ width: '44px', height: '36px' }}
                    component="img"
                    image={mode === 'light' ? LogoIcon : LogoIconDark}
                    alt="OneLBS Management System"
                />
            )}
        </>
    )
}

export default Logo
