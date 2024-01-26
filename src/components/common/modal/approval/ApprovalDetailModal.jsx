import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useModalParamState } from '#/store/useModalStore.js'

const ApprovalDetailModal = () => {
    const modalParam = useModalParamState()
    return (
        <>
            <Container sx={{ minWidth: 1200 }}>
                <Typography>모달</Typography>
                <Typography>{modalParam}</Typography>
            </Container>
        </>
    )
}

export default ApprovalDetailModal
