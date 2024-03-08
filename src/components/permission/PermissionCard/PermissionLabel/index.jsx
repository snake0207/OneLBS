import { Box, Typography } from '@mui/material'
import { permissionLabelColor } from '#/contents/color'

import menuTree from '#/assets/data/menuTree.json'

import t from '#/common/libs/trans'

const PermissionLabel = ({ permissionItem }) => {
    if (permissionItem.menu == 101) return

    const menuTreeItem = menuTree.find((item) => item.menuId == permissionItem.menu)

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                px: 1,
                p: '8px 14px',
                bgcolor: 'background.gray',
            }}
        >
            <Typography sx={{ fontSize: '12px', fontWeight: 500, color: 'text.main', pr: '3px' }}>
                {t(`menu.${menuTreeItem.label}`, 'permission')}
            </Typography>
            <Box sx={{ display: 'flex' }}>
                {permissionItem.permissions.map((permissionCode) => (
                    <Box
                        key={permissionCode}
                        sx={{
                            width: 8,
                            height: 8,
                            ml: '2px',
                            borderRadius: '50%',
                            bgcolor: permissionLabelColor[permissionCode],
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default PermissionLabel
