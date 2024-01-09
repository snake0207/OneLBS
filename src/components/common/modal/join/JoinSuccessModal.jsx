import InfoIcon from '@mui/icons-material/Info'
import * as S from './styled'
import { useModalActions } from '#/store/modalStore'

const JoinSuccessModal = () => {
    const { closeModal } = useModalActions()
    return (
        <>
            <S.CenterContainer>
                <InfoIcon sx={{ fontSize: 250, color: 'gray' }} />
                <S.LargeText>회원가입이 완료되었습니다.</S.LargeText>
                <S.LargeText>관리자 승인 완료 후 서비스를 이용하실 수 있습니다.</S.LargeText>
                <S.LargeText>
                    (회원가입 시 인증한 이메일로 승인 완료 메일이 발송됩니다.)
                </S.LargeText>
            </S.CenterContainer>
            <S.ModalActions>
                <S.Button onClick={closeModal}>확인</S.Button>
            </S.ModalActions>
        </>
    )
}

export default JoinSuccessModal
