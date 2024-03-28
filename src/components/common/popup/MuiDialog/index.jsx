import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'

const PaperComponent = (props) => {
    const nodeRef = useRef(null)

    return (
        <Draggable
            nodeRef={nodeRef}
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper ref={nodeRef} {...props} sx={{ minWidth: '40%' }} />
        </Draggable>
    )
}

const MuiDialog = ({ isOpen, draggable = true, title, content, onCancel, onConfirm }) => {
    const [open, setOpen] = useState(isOpen)

    const handleCancel = () => {
        setOpen(false)
        onCancel()
    }

    return (
        <Dialog
            open={open}
            onClose={handleCancel}
            PaperComponent={draggable && PaperComponent}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle
                id="draggable-dialog-title"
                children={<Typography sx={{ fontWeight: '500' }}>{title}</Typography>}
                style={{ cursor: draggable && 'move' }}
            />
            <DialogContent>
                <DialogContentText sx={{ fontSize: '15px' }}>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button size="large" color="error" onClick={handleCancel}>
                    취소
                </Button>
                <Button
                    size="large"
                    color="primary"
                    onClick={() => {
                        setOpen(false)
                        onConfirm()
                    }}
                    autoFocus
                >
                    확인
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MuiDialog
