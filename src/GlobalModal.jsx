import ModalLayout from './components/common/modal'
import JoinModal from './components/common/modal/auth/join'
import JoinSuccessModal from './components/common/modal/auth/joinSccess'
import PrivacyPolicyModal from './components/common/modal/auth/privacyPolicy'
import { MODAL_TITLE } from './contents/constant'
import { useModalActions, useModalTitleState } from './store/useModalStore'

const MODAL_COMPONENT_ARR = [
    { type: MODAL_TITLE.join, component: <JoinModal /> },
    { type: MODAL_TITLE.privacyPolicy, component: <PrivacyPolicyModal /> },
    { type: MODAL_TITLE.joinSuccess, component: <JoinSuccessModal /> },
]

const GlobalModal = () => {
    const modalTitle = useModalTitleState()
    const { closeModal } = useModalActions()

    if (modalTitle === null) return

    const ModalContent = MODAL_COMPONENT_ARR.find((modal) => modal.type === modalTitle)

    return (
        <ModalLayout isOpen={!!modalTitle} onClose={closeModal} title={modalTitle}>
            {ModalContent.component}
        </ModalLayout>
    )
}

export default GlobalModal
