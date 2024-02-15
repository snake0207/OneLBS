import OtpGuideModal from '#/components/auth/authForm/CertifiedForm/otpGuideModal'
import PrivacyPolicyModal from '#/components/common/modal/auth/Join/PrivacyPolicy'
import { MODAL_TITLE } from '#/contents/constant'
import { useModalActions } from '#/store/useModalStore'
import { useState } from 'react'

const ModalPage = () => {
    const { openModal } = useModalActions()
    const [isOpenPrivacyPolicyModal, setIsOpenPrivacyPolicyModal] = useState(false)
    const [isOpenOtpGuideModal, setIsOpenOtpGuideModal] = useState(false)
    return (
        <div>
            <h1>Modal</h1>
            <h2>DemoModal</h2>
            <button onClick={() => openModal(MODAL_TITLE.demo)}>DemoModal</button>
            <h2>JoinModal</h2>
            <button onClick={() => openModal(MODAL_TITLE.join)}>JoinModal</button>
            <h2>JoinSuccessModal</h2>
            <button onClick={() => openModal(MODAL_TITLE.joinSuccess)}>JoinSuccessModal</button>
            <h2>PrivacyPolicyModal</h2>
            <button onClick={() => setIsOpenPrivacyPolicyModal(true)}>PrivacyPolicyModal</button>
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicyModal}
                onClose={() => setIsOpenPrivacyPolicyModal(false)}
            />
            <h2>OtpGuideModal</h2>
            <button onClick={() => setIsOpenOtpGuideModal(true)}>OtpGuideModal</button>
            <OtpGuideModal
                isOpen={isOpenOtpGuideModal}
                handleClose={() => setIsOpenOtpGuideModal(false)}
            />
        </div>
    )
}

export default ModalPage
