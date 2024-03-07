import { Box, Typography } from '@mui/material'

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
        <Box sx={{ display: 'flex', bgcolor: 'white' }}>
            <Typography>{t('permission', 'permission')}</Typography>
            {Object.keys(labelColor).map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: 15,
                            height: 15,
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
