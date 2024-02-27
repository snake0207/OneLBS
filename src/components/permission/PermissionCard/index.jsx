import t from '#/common/libs/trans'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'
import { Box, Button, Typography } from '@mui/material'

const PermissionCard = ({ permissionCard }) => {
    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>
                    {t(`permission_name.${permissionCard.roleId}`, 'permission')}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Button variant="contained">메뉴 변경</Button>
                    <Button variant="contained">권한 변경</Button>
                </Box>
            </Box>
            <Typography>guest</Typography>
            <Box sx={{ display: 'flex' }}>
                {permissionCard.permission.map((code) => (
                    <PermissionLabel key={code} permission={code} />
                ))}
            </Box>
            <Typography>총 {permissionCard.count}명</Typography>
        </Box>
    )
}

export default PermissionCard
