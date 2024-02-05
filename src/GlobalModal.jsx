import ModalLayout from './components/common/modal'
import JoinModal from './components/common/modal/auth/Join'
import { MODAL_TITLE } from './contents/constant'
import { useModalActions, useModalTitleState } from './store/useModalStore'
import ApprovalDetailModal from '#/components/common/modal/approval/ApprovalDetailModal.jsx'
import DemoModal from '#/components/common/modal/Demo'
import JoinSuccessModal from '#/components/common/modal/auth/JoinSuccess'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { getLayoutState } from '#/store/useLayoutStore'

/**
 * type: modal title
 * component: modal content
 * darkIcon: dark mode icon
 * lightIcon: light mode icon
 */
const MODAL_COMPONENT_ARR = [
    {
        type: MODAL_TITLE.demo,
        component: <DemoModal />,
        darkIcon: <AccountCircleIcon />,
        lightIcon: <AccountCircleIcon />,
    },
    {
        type: MODAL_TITLE.join,
        component: <JoinModal />,
        darkIcon: <AccountCircleIcon />,
        lightIcon: <AccountCircleIcon />,
    },
    {
        type: MODAL_TITLE.joinSuccess,
        component: <JoinSuccessModal />,
        darkIcon: <AccountCircleIcon />,
        lightIcon: <AccountCircleIcon />,
    },
    {
        type: MODAL_TITLE.detail,
        component: <ApprovalDetailModal />,
        darkIcon: <AccountCircleIcon />,
        lightIcon: <AccountCircleIcon />,
    },
]

const GlobalModal = () => {
    const modalTitle = useModalTitleState()
    const { closeModal } = useModalActions()
    const { themeMode } = getLayoutState()

    if (modalTitle === null) return

    const ModalContent = MODAL_COMPONENT_ARR.find((modal) => modal.type === modalTitle)

    return (
        <ModalLayout
            isOpen={!!modalTitle}
            onClose={closeModal}
            title={modalTitle}
            icon={themeMode === 'light' ? ModalContent.lightIcon : ModalContent.darkIcon}
        >
            {ModalContent.component}
        </ModalLayout>
    )
}

export default GlobalModal
