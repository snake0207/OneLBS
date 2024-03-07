import { Box, Dialog, DialogContent, DialogTitle, Icon, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import PermissionTableSearch from '#/components/permission/PermissionChangeModal/PermissionTableSearch'
import PermissionTable from '#/components/permission/PermissionChangeModal/PermissionTable'
import { getLayoutState } from '#/store/useLayoutStore'

import t from '#/common/libs/trans'
import CommonPagination from '#/components/common/pagination/CommonPagination'

const PermissionChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()

    const handleChangePage = (page) => {
        console.log(page)
    }

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
                <PermissionTableSearch />
                <PermissionTable />
                <CommonPagination dataLength={200} onChangePageFunction={handleChangePage} />
            </DialogContent>
        </Dialog>
    )
}

export default PermissionChangeModal
