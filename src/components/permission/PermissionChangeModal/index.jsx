import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Icon,
    IconButton,
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PermissionTableSearch from '#/components/permission/PermissionChangeModal/PermissionTableSearch'
import PermissionTable from '#/components/permission/PermissionChangeModal/PermissionTable'
import { getLayoutState } from '#/store/useLayoutStore'
import { useGetRoleChangeUserList } from '#/hooks/queries/permission'

import t from '#/common/libs/trans'

import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'
import style from './style.module'

const PermissionChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()
    const { data } = useGetRoleChangeUserList()
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
                <Typography
                    sx={{
                        display: 'inline-flex',
                        fontSize: '13px',
                        color: 'text.main',
                        marginBottom: '6px',
                    }}
                >
                    {t('total_number_of_people', 'permission', {
                        userCount: data ? data.totalElements : 0,
                    })}
                </Typography>
                <PermissionTableSearch />
                {data && <PermissionTable tableData={data} />}
            </DialogContent>
        </Dialog>
    )
}

export default PermissionChangeModal
