import ModalLayout from './components/common/modal/ModalLayout'
import JoinModal from './components/common/modal/join/JoinModal'
import JoinSuccessModal from './components/common/modal/join/JoinSuccessModal'
import PrivacyPolicyModal from './components/common/modal/join/PrivacyPolicyModal'
import { MODAL_TITLE } from './contents/constant'
import { useModalActions, useModalTitleState } from './store/modalStore'

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
