import { Box, Dialog, DialogContent, DialogTitle, Icon, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import PermissionTableSearch from '#/components/permission/PermissionChangeModal/PermissionTableSearch'
import PermissionTable from '#/components/permission/PermissionChangeModal/PermissionTable'
import { getLayoutState } from '#/store/useLayoutStore'
import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'
import style from './style.module'

import t from '#/common/libs/trans'
import CommonPagination from '#/components/common/pagination/CommonPagination'

const PermissionChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()

    const handleChangePage = (page) => {
        console.log(page)
    }

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="lg" sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Icon>
                        {themeMode === 'light' ? (
                            <img src={joinIcon} style={{ display: 'flex', width: '24px' }} />
                        ) : (
                            <img src={joinIconDark} style={{ display: 'flex', width: '24px' }} />
                        )}
                    </Icon>
                    {t('permission_change', 'permission')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
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
