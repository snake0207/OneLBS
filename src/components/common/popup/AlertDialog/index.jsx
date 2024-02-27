import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import usePopupStore, { usePopupActions } from '#/store/usePopupStore'
import t from '#/common/libs/trans'

import style from './style.module'

function AlertDialog({ open, content }) {
    const actions = usePopupActions()
    const { onOk } = usePopupStore()

    const handleClose = () => {
        if (onOk) onOk()
        actions.closePopup()
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
            <DialogActions sx={style.btnBox}>
                <Button onClick={handleClose} autoFocus sx={style.blueButton}>
                    {t('ok')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlertDialog
