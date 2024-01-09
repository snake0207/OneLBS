import ModalLayout from './components/common/modal/ModalLayout'
import ModalJoin from './components/common/modal/join/ModalJoin'
import { MODAL_TITLE } from './contents/constant'
import { useModalActions, useModalTitleState } from './store/modalStore'

const MODAL_COMPONENT_ARR = [{ type: MODAL_TITLE.join, component: <ModalJoin /> }]

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
