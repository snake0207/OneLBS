import { Box } from '@mui/material'
import TitleBar from '#/components/common/menu/TitleBar'
import PermissionCard from '#/components/permission/PermissionCard'
import { useGetRoleMenuPermission } from '#/hooks/queries/permission'

import t from '#/common/libs/trans'
import PermissionDescription from '#/components/permission/PermissionDescription'

const PermissionManagementPage = () => {
    const { data } = useGetRoleMenuPermission()
    return (
        <Box>
            <TitleBar title={t('permission_list', 'permission')} />
            <PermissionDescription />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {data?.list.map((item) => (
                    <PermissionCard key={item.roleId} permissionCardData={item} />
                ))}
            </Box>
        </Box>
    )
}

export default PermissionManagementPage
