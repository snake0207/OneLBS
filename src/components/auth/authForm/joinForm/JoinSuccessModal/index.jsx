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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import t from '#/common/libs/trans'
import useLayoutStore from '#/store/useLayoutStore'

const JoinSuccessModal = ({ isOpen, onClose }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 16,
                    backgroundColor: 'primary.lightBlue',
                    borderRadius: 20,
                    mt: 3.8,
                    ml: 2.5,
                    mr: 2.5,
                    mb: 1.3,
                    height: 42,
                    pl: 1,
                    pr: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {themeMode === 'light' ? <AccountCircleIcon /> : <AccountCircleIcon />}
                    {t('join_completed', 'auth')}
                </Box>
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
                <Button variant="contained" onClick={onClose}>
                    {t('ok', 'auth')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinSuccessModal
