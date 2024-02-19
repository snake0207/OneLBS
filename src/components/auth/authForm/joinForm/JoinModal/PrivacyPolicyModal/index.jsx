import { forwardRef } from 'react'
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Typography,
} from '@mui/material'
import { isMobile } from 'react-device-detect'
import CloseIcon from '@mui/icons-material/Close'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import t from '#/common/libs/trans'
import useLayoutStore from '#/store/useLayoutStore'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullScreen={isMobile}
            TransitionComponent={isMobile ? Transition : undefined}
            maxWidth="sm"
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 16,
                    backgroundColor: 'primary.lightBlue',
                    borderRadius: 20,
                    mt: 3.8,
                    ml: 2.5,
                    mr: 2.5,
                    mb: 1,
                    height: 42,
                    pl: 1.5,
                    pr: 1,
                }}
            >
                {themeMode === 'light' ? <AccountCircleIcon /> : <AccountCircleIcon />}
                {t('collect_personal_information', 'auth')}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        width: '400px',
                        p: '20px',
                        mb: '5px',
                        borderRadius: '8px',
                        border: '1px solid #d7d7d7',
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: 15, mb: 0.5 }}>
                            1. 개인정보의 수집, 이용 항목 및 목적
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                            가. 글로벌 서치 회원가입
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14, mb: '10px' }}>
                            - 필수항목, 이름, 회사명, 팀명
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                            나. 회원가입 관리
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14, mb: '10px' }}>
                            - 개인정보는 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: 15, mb: 0.5, mt: '20px' }}>
                            2. 개인정보의 보유기간
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                            가. 글로벌 서치 회원가입
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14, mb: '10px' }}>
                            - 회원탈퇴 시
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                            나. 6개월 동안 로그인 기록이 없는 회원
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14, mb: '10px' }}>
                            - 휴먼 전환
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                            다. 1년 동안 로그인 기록이 없는 회원
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: 14 }}>
                            - 즉시 삭제
                        </Typography>
                    </Box>
                    <Typography
                        variant="subtitle2"
                        sx={{ fontSize: 15, mt: '20px', fontWeight: 700 }}
                    >
                        고객님께서는 해당 내용을 동의하지 않을 수 있으나, 동의하지 않을 경우
                        회원가입이 불가합니다.
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default PrivacyPolicyModal
