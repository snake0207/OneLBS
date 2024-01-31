import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import usePopupStore, { usePopupActions } from '#/store/usePopupStore'
import t from '#/common/libs/trans'

function ConfirmDialog({ open, content }) {
    const actions = usePopupActions()
    const { onOk, onCancel } = usePopupStore()

    const handleCancel = () => {
        actions.closePopup()

        if (onCancel) onCancel()
    }

    const handleConfirm = () => {
        actions.closePopup()

        if (onOk) onOk()
        //else actions.closePopup()
    }

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <DialogActions>
                    <Button onClick={handleConfirm} autoFocus>
                        {t('yes')}
                    </Button>
                    <Button onClick={handleCancel}>{t('no')}</Button>
                </DialogActions>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
