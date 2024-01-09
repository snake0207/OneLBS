import { MODAL_TITLE } from '#/contents/constant'
import { useModalActions } from '#/store/modalStore'
import * as S from './styled'

const PrivacyPolicyModal = () => {
    const { openModal } = useModalActions()
    return (
        <div>
            <S.Button onClick={() => openModal(MODAL_TITLE.joinSuccess)}>완료</S.Button>
        </div>
    )
}

export default PrivacyPolicyModal
