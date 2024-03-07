import { Box, Typography } from '@mui/material'

import menuTree from '#/assets/data/menuTree.json'

import t from '#/common/libs/trans'

const PermissionLabel = ({ permissionItem }) => {
    const labelColor = {
        C: '#FA5E41',
        R: '#00418D',
        U: '#5B0584',
        D: '#DB0024',
        A: '#006761',
    }

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
                bgcolor: 'lightgray',
            }}
        >
            <Typography>{t(`menu.${menuTreeItem.label}`, 'permission')}</Typography>
            <Box sx={{ display: 'flex' }}>
                {permissionItem.permissions.map((permissionCode) => (
                    <Box
                        key={permissionCode}
                        sx={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            bgcolor: labelColor[permissionCode],
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default PermissionLabel
