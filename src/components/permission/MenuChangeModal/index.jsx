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
import MenuTable from '#/components/permission/MenuChangeModal/MenuTable'
import { getLayoutState } from '#/store/useLayoutStore'
import { usePermissionMenuRoleNameState } from '#/store/usePermissionMenuStore'
import { useGetRoleMenu } from '#/hooks/queries/permission'

import t from '#/common/libs/trans'

import MenuChangeIcon from '#/assets/menuChangeIcon.svg'
import MenuChangeIconDark from '#/assets/menuChangeIconDark.svg'
import style from './style.module'

const MenuChangeModal = ({ isOpen, onClose }) => {
    const { themeMode } = getLayoutState()
    const roleName = usePermissionMenuRoleNameState()
    const { data } = useGetRoleMenu()

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="lg" sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Icon>
                        {themeMode === 'light' ? (
                            <img src={MenuChangeIcon} style={{ display: 'flex', width: '24px' }} />
                        ) : (
                            <img
                                src={MenuChangeIconDark}
                                style={{ display: 'flex', width: '24px' }}
                            />
                        )}
                    </Icon>
                    {t('menu_change', 'permission')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginTop: '10px',
                        marginBottom: '10px',
                        pb: '10px',
                        borderBottom: '1px solid',
                        borderBottomColor: 'border.light',
                    }}
                >
                    <Typography sx={style.subTitleBox}>{t('permission', 'permission')}</Typography>
                    <Typography sx={style.subTitle}>
                        {t(`permission_name.${roleName}`, 'permission')}
                    </Typography>
                    <Typography sx={style.gusestBox}>{roleName.toLowerCase()}</Typography>
                </Box>
                {data && <MenuTable data={data} />}
            </DialogContent>
        </Dialog>
    )
}

export default MenuChangeModal
