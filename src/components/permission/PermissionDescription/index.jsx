import { Box, Typography } from '@mui/material'
import { permissionLabelColor } from '#/contents/color'

import t from '#/common/libs/trans'

const PermissionDescription = () => {
    return (
        <Box sx={{ display: 'flex', bgcolor: 'white' }}>
            <Typography>{t('permission', 'permission')}</Typography>
            {Object.keys(permissionLabelColor).map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            bgcolor: permissionLabelColor[item],
                        }}
                    />
                    <Typography>{t(`permission_code.${item}`, 'permission')}</Typography>
                </Box>
            ))}
        </Box>
    )
}

export default PermissionDescription
