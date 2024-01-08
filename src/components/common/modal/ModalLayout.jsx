import { IconButton, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styled'

const ModalLayout = ({ children, isOpen, onClose, title }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <S.ModalContainer>
                <S.ModalTitle>
                    <S.H2>{title}</S.H2>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </S.ModalTitle>
                <S.ModalContant>{children}</S.ModalContant>
            </S.ModalContainer>
        </Modal>
    )
}

export default ModalLayout
