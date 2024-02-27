import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import usePopupStore, { usePopupActions } from '#/store/usePopupStore'
import t from '#/common/libs/trans'

import style from './style.module'

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
            sx={style.dialogBox}
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={style.text}>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <DialogActions sx={style.btnBox}>
                    <Button onClick={handleConfirm} autoFocus sx={style.blueButton}>
                        {t('yes')}
                    </Button>
                    <Button onClick={handleCancel} sx={style.lightButton}>
                        {t('no')}
                    </Button>
                </DialogActions>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
