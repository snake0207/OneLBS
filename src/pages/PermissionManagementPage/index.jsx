import TitleBar from '#/components/common/menu/TitleBar'
import { Box } from '@mui/material'

import t from '#/common/libs/trans'

import userMenuPermissionList from '#/mock/data/user_menu_permission_list.json'
import PermissionCard from '#/components/permission/PermissionCard'

const PermissionManagementPage = () => {
    return (
        <Box>
            <TitleBar title={t('permission_list')} />
            <Box>
                {userMenuPermissionList.map((item) => (
                    <PermissionCard key={item.roleId} permissionCard={item} />
                ))}
            </Box>
        </Box>
    )
}

export default PermissionManagementPage
