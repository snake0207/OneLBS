import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'
import { Box, Button, Typography } from '@mui/material'

import t from '#/common/libs/trans'

const PermissionCard = ({ permissionCardData }) => {
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography>
                        {t(`permission_name.${permissionCardData.roleName}`, 'permission')}
                    </Typography>
                    <Typography>{permissionCardData.roleName.toLowerCase()}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained">{t('menu_change', 'permission')}</Button>
                    <Button variant="contained">{t('permission_change', 'permission')}</Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {permissionCardData.permissionList.map((item) => (
                    <PermissionLabel key={item.menu} permissionItem={item} />
                ))}
            </Box>
            <Typography>
                {t('total_number_of_people', 'permission', {
                    userCount: permissionCardData.userCount,
                })}
            </Typography>
        </Box>
    )
}

export default PermissionCard
