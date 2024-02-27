import { parseMenuPermissionCode } from '#/common/libs/parseMenuPermissionCode'
import { Box } from '@mui/material'

import t from '#/common/libs/trans'

const PermissionLabel = ({ permission }) => {
    const { menuObj, permissionCode } = parseMenuPermissionCode(permission)

    const labelColor = {
        R: '#459BFF',
        U: '#C96CF5',
        D: '#C96CF5',
        C: '#C96CF5',
        A: '#0BB2A8',
    }

    if (menuObj.menuId === 101) return

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
                borderRadius: 5,
                px: 1,
                borderColor: labelColor[permissionCode],
                color: labelColor[permissionCode],
            }}
        >
            {t(`menu.${menuObj.label}`, 'permission')}
        </Box>
    )
}

export default PermissionLabel
