import InfoIcon from '@mui/icons-material/Info'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import t from '#/common/libs/trans'
import useLayoutStore from '#/store/useLayoutStore'

import joinIcon from '#/assets/joinIcon.svg'
import joinIconDark from '#/assets/joinIconDark.svg'
import joinCompleteIcon from '#/assets/joinCompleteIcon.svg'
import joinCompleteIconDark from '#/assets/joinCompleteIconDark.svg'

import style from './style.module'

const JoinSuccessModal = ({ isOpen, onClose }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Dialog open={isOpen} onClose={onClose} sx={style.dialogBox}>
            <DialogTitle sx={style.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? (
                        <img src={joinIcon} style={{ display: 'flex', width: '24px' }} />
                    ) : (
                        <img src={joinIconDark} style={{ display: 'flex', width: '24px' }} />
                    )}
                    {t('join_completed', 'auth')}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={style.joinContent}>
                <Box sx={style.icons}>
                    {themeMode === 'light' ? (
                        <img src={joinCompleteIcon} style={{ display: 'flex', width: '40px' }} />
                    ) : (
                        <img
                            src={joinCompleteIconDark}
                            style={{ display: 'flex', width: '40px' }}
                        />
                    )}
                </Box>
                <Typography>{t('join_success_desc.desc1', 'auth')}</Typography>
                <Typography>{t('join_success_desc.desc2', 'auth')}</Typography>
                <Typography>{t('join_success_desc.desc3', 'auth')}</Typography>
            </DialogContent>
            <DialogActions sx={style.btnBox}>
                <Button variant="contained" onClick={onClose} sx={style.darkLarge}>
                    {t('ok', 'auth')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinSuccessModal
