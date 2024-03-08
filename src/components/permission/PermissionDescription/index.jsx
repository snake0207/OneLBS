import { Box, Typography } from '@mui/material'
import style from './style.module.js'
import { permissionLabelColor } from '#/contents/color'

import t from '#/common/libs/trans'

const PermissionDescription = () => {
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
