import LinkRouter from '#/components/common/menu/LinkRouter'
import { Box, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'

import t from '#/common/libs/trans'

const ShortCutBanner = ({ bannerTitle, bannerDesc, path, icon }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                padding: '10px 18px',
                border: 1,
                borderRadius: 2,
                bgcolor: 'white',
                width: 300,
            }}
        >
            <Typography variant="h5" fontWeight={'bold'}>
                {bannerTitle}
            </Typography>
            <Typography>{bannerDesc}</Typography>
            <LinkRouter
                to={path}
                sx={{
                    mt: 2,
                    flexGrow: 0,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                {t('read_more', 'dashboard')}
                <EastIcon />
            </LinkRouter>
            {icon}
        </Box>
    )
}

export default ShortCutBanner
