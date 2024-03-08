import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'
import PermissionChangeModal from '#/components/permission/PermissionChangeModal'
import MenuChangeModal from '#/components/permission/MenuChangeModal'
import { usePermissionSearchActions } from '#/store/usePermissionSearchStore'
import { usePermissionMenuActions } from '#/store/usePermissionMenuStore'

import t from '#/common/libs/trans'

const PermissionCard = ({ permissionCardData }) => {
    const [isOpenMenuChangeModal, setIsOpenMenuChangeModal] = useState(false)
    const [isOpenPermissionChangeModal, setIsOpenPermissionChangeModal] = useState(false)
    const { setPermissionSearchRoleId } = usePermissionSearchActions()
    const { setPermissionMenuStore } = usePermissionMenuActions()

    const handleClickMenuChangeModalOpen = () => {
        setPermissionMenuStore(permissionCardData.roleId, permissionCardData.roleName)
        setIsOpenMenuChangeModal(true)
    }

    const handleClickPermissionChangeModalOpen = () => {
        setPermissionSearchRoleId(permissionCardData.roleId)
        setIsOpenPermissionChangeModal(true)
    }

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
                    <Button variant="contained" onClick={handleClickMenuChangeModalOpen}>
                        {t('menu_change', 'permission')}
                    </Button>
                    <Button variant="contained" onClick={handleClickPermissionChangeModalOpen}>
                        {t('permission_change', 'permission')}
                    </Button>
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
            <PermissionChangeModal
                isOpen={isOpenPermissionChangeModal}
                onClose={() => setIsOpenPermissionChangeModal(false)}
            />
            <MenuChangeModal
                isOpen={isOpenMenuChangeModal}
                onClose={() => setIsOpenMenuChangeModal(false)}
            />
        </Box>
    )
}

export default PermissionCard
