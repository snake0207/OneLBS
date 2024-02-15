import JoinSuccessModal from '#/components/auth/authForm/joinForm/JoinSuccessModal'
import PrivacyPolicyModal from '#/components/auth/authForm/joinForm/JoinModal/PrivacyPolicy'
import { useState } from 'react'
import JoinModal from '#/components/auth/authForm/joinForm/JoinModal'

const ModalPage = () => {
    const [isOpenJoinModal, setIsOpenJoinModal] = useState(false)
    const [isOpenPrivacyPolicyModal, setIsOpenPrivacyPolicyModal] = useState(false)
    const [isOpenJoinSuccessModal, setIsOpenJoinSuccessModal] = useState(false)
    return (
        <div>
            <h1>Modal</h1>
            <h2>JoinModal</h2>
            <button onClick={() => setIsOpenJoinModal(true)}>JoinModal</button>
            <JoinModal isOpen={isOpenJoinModal} onClose={() => setIsOpenJoinModal(false)} />
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
