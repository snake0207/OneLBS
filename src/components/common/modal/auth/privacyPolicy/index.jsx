import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                개인정보수집동의
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Box sx={{ border: 1 }}>개인정보수집동의 본문 내용</Box>
            </DialogContent>
        </Dialog>
    )
}

export default PrivacyPolicyModal
