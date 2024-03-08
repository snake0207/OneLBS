import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    Typography,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import { getLayoutState } from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import MenuTable from '#/components/permission/MenuChangeModal/MenuTable'
import usePermissionMenuStore from '#/store/usePermissionMenuStore'

const MenuChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()
    const { roleName, roleId } = usePermissionMenuStore()

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="lg">
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Icon>{themeMode === 'light' ? <InfoIcon /> : <InfoIcon />}</Icon>
                    {t('permission_change', 'permission')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex' }}>
                    <Typography>{t('permission', 'permission')}</Typography>
                    <Typography>{t(`permission_name.${roleName}`, 'permission')}</Typography>
                    <Typography>{roleName.toLowerCase()}</Typography>
                </Box>
                <Typography>
                    {t('total_number_of_people', 'permission', { userCount: 50 })}
                </Typography>
                <MenuTable />
            </DialogContent>
        </Dialog>
    )
}

export default MenuChangeModal
