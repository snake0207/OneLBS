import { useState } from 'react'
import JoinSuccessModal from '#/components/auth/authForm/joinForm/JoinSuccessModal'
import PrivacyPolicyModal from '#/components/auth/authForm/joinForm/JoinModal/PrivacyPolicyModal'
import JoinModal from '#/components/auth/authForm/joinForm/JoinModal'
import OtpGuideModal from '#/components/auth/authForm/CertifiedForm/otpGuideModal'
import PasswordChangeModal from '#/components/dashboard/PasswordChangeModal'
import PermissionChangeModal from '#/components/permission/PermissionCard/PermissionChangeModal'

const ModalPage = () => {
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false)
    const [isOpenJoinSuccessModal, setIsOpenJoinSuccessModal] = useState(false)
    const [isOpenPrivacyPolicyModal, setIsOpenPrivacyPolicyModal] = useState(false)
    const [isOpenOtpGuideModal, setIsOpenOtpGuideModal] = useState(false)
    const [isOpenPasswordChangeModal, setIsOpenPasswordChangeModal] = useState(false)
    const [isOpenPermissionChangeModal, setIsOpenPermissionChangeModal] = useState(true)
    return (
        <div>
            <h1>Modal</h1>
            <h2>JoinModal</h2>
            <button onClick={() => setIsOpenJoinModal(true)}>JoinModal</button>
            <JoinModal isOpen={isOpenJoinModal} onClose={() => setIsOpenJoinModal(false)} />
            <h2>JoinSuccessModal</h2>
            <button onClick={() => setIsOpenJoinSuccessModal(true)}>JoinSuccessModal</button>
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
            <h2>OtpGuideModal</h2>
            <button onClick={() => setIsOpenOtpGuideModal(true)}>OtpGuideModal</button>
            <OtpGuideModal
                isOpen={isOpenOtpGuideModal}
                handleClose={() => setIsOpenOtpGuideModal(false)}
            />
            <h2>PasswordChangeModal</h2>
            <button onClick={() => setIsOpenPasswordChangeModal(true)}>PasswordChangeModal</button>
            <PasswordChangeModal
                isOpen={isOpenPasswordChangeModal}
                onClose={() => setIsOpenPasswordChangeModal(false)}
            />
            <h2>PermissionChangeModal</h2>
            <button onClick={() => setIsOpenPermissionChangeModal(true)}>
                PermissionChangeModal
            </button>
            <PermissionChangeModal
                isOpen={isOpenPermissionChangeModal}
                onClose={() => setIsOpenPermissionChangeModal(false)}
            />
        </div>
    )
}

export default ModalPage
