import { Box } from '@mui/material'
import TitleBar from '#/components/common/menu/TitleBar'
import PermissionCard from '#/components/permission/PermissionCard'

import t from '#/common/libs/trans'

import userMenuPermissionList from '#/mock/data/user_menu_permission_list.json'

const PermissionManagementPage = () => {
    return (
        <Box>
            <TitleBar title={t('permission_list', 'permission')} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {userMenuPermissionList.map((item) => (
                    <PermissionCard key={item.roleId} permissionCardData={item} />
                ))}
            </Box>
        </Box>
    )
}

export default PermissionManagementPage
