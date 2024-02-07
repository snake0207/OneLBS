import { Box, Dialog, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useModalParamState } from '#/store/useModalStore.js'

const ModalLayout = ({ children, isOpen, onClose, title, icon }) => {
    const modalSize = useModalParamState()
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth={modalSize}>
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
                    mb: 1,
                    height: 42,
                    pl: 1,
                    pr: 1,
                }}
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
