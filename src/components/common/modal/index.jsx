import { Dialog, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ModalLayout = ({ children, isOpen, onClose, title }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                {title}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            {children}
        </Dialog>
    )
}

export default ModalLayout
