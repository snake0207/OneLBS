import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'
import PermissionChangeModal from '#/components/permission/PermissionChangeModal'
import { usePermissionSearchActions } from '#/store/usePermissionSearchStore'
import style from './style.module.js'

import t from '#/common/libs/trans'

const PermissionCard = ({ permissionCardData }) => {
    const [isOpenMenuChangeModal, setIsOpenMenuChangeModal] = useState(false)
    const [isOpenPermissionChangeModal, setIsOpenPermissionChangeModal] = useState(false)
    const { setPermissionSearchRoleId } = usePermissionSearchActions()

    const handleClickMenuChangeModalOpen = () => {
        setIsOpenMenuChangeModal(true)
    }

    const handleClickPermissionChangeModalOpen = () => {
        setPermissionSearchRoleId(permissionCardData.roleId)
        setIsOpenPermissionChangeModal(true)
    }

    return (
        <Box sx={style.cardBox}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: '14px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={style.Title}>
                            {t(`permission_name.${permissionCardData.roleName}`, 'permission')}
                        </Typography>
                        <Typography sx={style.gusestBox}>
                            {permissionCardData.roleName.toLowerCase()}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            variant="contained"
                            onClick={handleClickMenuChangeModalOpen}
                            sx={style.blueButton}
                        >
                            {t('menu_change', 'permission')}
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleClickPermissionChangeModalOpen}
                            sx={style.darkBlueButton}
                        >
                            {t('permission_change', 'permission')}
                        </Button>
                    </Box>
                </Box>
                <Box sx={style.cardContBox}>
                    {permissionCardData.permissionList.map((item) => (
                        <PermissionLabel key={item.menu} permissionItem={item} />
                    ))}
                </Box>
            </Box>
            <Typography sx={{ mt: '16px', fontSize: '14px', color: 'text.main' }}>
                {t('total_number_of_people', 'permission', {
                    userCount: permissionCardData.userCount,
                })}
            </Typography>

            <PermissionChangeModal
                isOpen={isOpenPermissionChangeModal}
                onClose={() => setIsOpenPermissionChangeModal(false)}
            />
        </Box>
    )
}

export default PermissionCard
