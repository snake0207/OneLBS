import { Box, IconButton, Modal, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ModalLayout = ({ children, isOpen, onClose, title }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: '#fff',
                    width: 600,
                    minWidth: 600,
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto',
                    // ':focus-visible': { outline: 'none' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: 1,
                        py: 1,
                        px: 2,
                    }}
                >
                    <Typography variant="h5">{title}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Box sx={{ p: 2 }}>{children}</Box>
            </Box>
        </Modal>
    )
}

export default ModalLayout
