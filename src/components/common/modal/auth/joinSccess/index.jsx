import InfoIcon from '@mui/icons-material/Info'
import { useModalActions } from '#/store/useModalStore'
import { Box, Button, Typography } from '@mui/material'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'

const JoinSuccessModal = () => {
    const { closeModal } = useModalActions()
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <InfoIcon sx={{ fontSize: 250, color: 'gray' }} />
                <Typography>회원가입이 완료되었습니다.</Typography>
                <Typography>관리자 승인 완료 후 서비스를 이용하실 수 있습니다.</Typography>
                <Typography>회원가입 시 인증한 이메일로 승인 완료 메일이 발송됩니다.</Typography>
            </Box>
            <FlexEndButtonContainer>
                <Button variant="contained" onClick={closeModal}>
                    확인
                </Button>
            </FlexEndButtonContainer>
        </>
    )
}

export default JoinSuccessModal
