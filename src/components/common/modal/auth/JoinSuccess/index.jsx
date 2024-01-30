import InfoIcon from '@mui/icons-material/Info'
import { useModalActions } from '#/store/useModalStore'
import {
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

const JoinSuccessModal = ({ isOpen, onClose }) => {
    const { closeModal } = useModalActions()
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                {t('join_completed', 'auth')}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent
                dividers
                sx={{
                    textAlign: 'center',
                }}
            >
                <InfoIcon sx={{ fontSize: 250, color: 'gray' }} />
                <Typography>{t('join_success_desc.desc1', 'auth')}</Typography>
                <Typography>{t('join_success_desc.desc2', 'auth')}</Typography>
                <Typography>{t('join_success_desc.desc3', 'auth')}</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={closeModal}>
                    {t('ok', 'auth')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinSuccessModal
