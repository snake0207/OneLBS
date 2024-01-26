import ModalLayout from './components/common/modal'
import JoinModal from './components/common/modal/auth/Join'
import { MODAL_TITLE } from './contents/constant'
import { useModalActions, useModalTitleState } from './store/useModalStore'

const MODAL_COMPONENT_ARR = [
    { type: MODAL_TITLE.join, component: <JoinModal /> },
    { type: MODAL_TITLE.detail, component: <ApprovalDetailModal /> },
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
