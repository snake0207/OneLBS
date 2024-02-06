import { Box, Dialog, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useModalParamState } from '#/store/useModalStore.js'

const ModalLayout = ({ children, isOpen, onClose, title, icon }) => {
    const modalSize = useModalParamState()
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth={modalSize}>
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {icon}
                    {title}
                </Box>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            {children}
        </Dialog>
    )
}

export default ModalLayout
