import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'
import { Box, Button, Typography } from '@mui/material'

import t from '#/common/libs/trans'

const PermissionCard = ({ permissionCard }) => {
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>
                    {t(`permission_name.${permissionCard.roleName}`, 'permission')}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained">{t('menu_change', 'permission')}</Button>
                    <Button variant="contained">{t('permission_change', 'permission')}</Button>
                </Box>
            </Box>
            <Typography>{permissionCard.roleName.toLowerCase()}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {permissionCard.permissions.map((code) => (
                    <PermissionLabel key={code} permission={code} />
                ))}
            </Box>
            <Typography>
                {t('total', 'permission')} {permissionCard.userCount}
                {t('number_of_people', 'permission')}
            </Typography>
        </Box>
    )
}

export default PermissionCard
