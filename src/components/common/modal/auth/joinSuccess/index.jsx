import InfoIcon from '@mui/icons-material/Info'
import { useModalActions } from '#/store/useModalStore'
import { Button, DialogActions, DialogContent, Typography } from '@mui/material'

import t from '#/common/libs/trans'

const JoinSuccessModal = () => {
    const { closeModal } = useModalActions()
    return (
        <>
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
        </>
    )
}

export default JoinSuccessModal
