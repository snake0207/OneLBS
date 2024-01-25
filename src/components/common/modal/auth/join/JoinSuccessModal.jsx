import InfoIcon from '@mui/icons-material/Info'
import { useModalActions } from '#/store/useModalStore'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const JoinSuccessModal = ({ isOpen, onClose }) => {
    const { closeModal } = useModalActions()
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                회원가입 완료
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent
                dividers
                sx={{
                    textAlign: 'center',
                }}
            >
                <InfoIcon sx={{ fontSize: 250, color: 'gray' }} />
                <Typography>회원가입이 완료되었습니다.</Typography>
                <Typography>관리자 승인 완료 후 서비스를 이용하실 수 있습니다.</Typography>
                <Typography>회원가입 시 인증한 이메일로 승인 완료 메일이 발송됩니다.</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={closeModal}>
                    확인
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default JoinSuccessModal
