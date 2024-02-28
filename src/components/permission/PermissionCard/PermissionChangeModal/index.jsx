import { getLayoutState } from '#/store/useLayoutStore'
import { Box, Dialog, DialogContent, DialogTitle, Icon, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import t from '#/common/libs/trans'
import PermissionTableSearch from '#/components/permission/PermissionCard/PermissionChangeModal/PermissionTableSearch'
import PermissionTable from '#/components/permission/PermissionCard/PermissionChangeModal/PermissionTable'

const PermissionChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="lg">
            <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon>{themeMode === 'light' ? <InfoIcon /> : <InfoIcon />}</Icon>
                    {t('permission_change', 'permission')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <PermissionTableSearch />
                <PermissionTable />
            </DialogContent>
        </Dialog>
    )
}

export default PermissionChangeModal
