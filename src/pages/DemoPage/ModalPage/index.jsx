import JoinSuccessModal from '#/components/common/modal/auth/JoinSuccess'
import PrivacyPolicyModal from '#/components/common/modal/auth/PrivacyPolicy'
import { MODAL_TITLE } from '#/contents/constant'
import { useModalActions } from '#/store/useModalStore'
import { useState } from 'react'

const ModalPage = () => {
    const { openModal } = useModalActions()
    const [isOpenPrivacyPolicyModal, setIsOpenPrivacyPolicyModal] = useState(false)
    const [isOpenJoinSuccessModal, setIsOpenJoinSuccessModal] = useState(false)
    return (
        <div>
            <h1>Modal</h1>
            <h2>JoinModal</h2>
            <button onClick={() => openModal(MODAL_TITLE.join)}>JoinModal</button>
            <h2>JoinSuccessModal</h2>
            <button onClick={() => setIsOpenJoinSuccessModal(true)}>PrivacyPolicyModal</button>
            <JoinSuccessModal
                isOpen={isOpenJoinSuccessModal}
                onClose={() => setIsOpenJoinSuccessModal(false)}
            />
            <h2>PrivacyPolicyModal</h2>
            <button onClick={() => setIsOpenPrivacyPolicyModal(true)}>PrivacyPolicyModal</button>
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicyModal}
                onClose={() => setIsOpenPrivacyPolicyModal(false)}
            />
        </div>
    )
}

export default ModalPage
