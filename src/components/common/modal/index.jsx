import { Dialog, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useModalParamState } from '#/store/useModalStore.js'

const ModalLayout = ({ children, isOpen, onClose, title }) => {
    const modalSize = useModalParamState()
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth={modalSize}>
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
