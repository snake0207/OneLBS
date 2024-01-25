import { MODAL_TITLE } from '#/contents/constant'
import { useModalActions } from '#/store/useModalStore'
import { Button } from '@mui/material'

const PrivacyPolicyModal = () => {
    const { openModal } = useModalActions()
    return (
        <div>
            <Button variant="contained" onClick={() => openModal(MODAL_TITLE.joinSuccess)}>
                완료
            </Button>
        </div>
    )
}

export default PrivacyPolicyModal
