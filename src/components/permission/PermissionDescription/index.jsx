import { Box, Typography } from '@mui/material'
import style from './style.module.js'

import t from '#/common/libs/trans'

const PermissionDescription = () => {
    const labelColor = {
        C: '#FA5E41',
        R: '#00418D',
        U: '#5B0584',
        D: '#DB0024',
        A: '#006761',
    }

    return (
        <Box sx={style.descriptionBox}>
            <Typography sx={style.Title}>{t('permission', 'permission')}</Typography>
            {Object.keys(labelColor).map((item) => (
                <Box key={item} sx={style.label}>
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: labelColor[item],
                        }}
                    />
                    <Typography>{t(`permission_code.${item}`, 'permission')}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default PermissionDescription
