import { forwardRef } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { isMobile } from 'react-device-detect'

import t from '#/common/libs/trans'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const OtpGuideModal = ({ isOpen, handleClose }) => {
    return (
        <Dialog
            fullScreen={isMobile}
            open={isOpen}
            onClose={handleClose}
            TransitionComponent={isMobile ? Transition : undefined}
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
                    pl: 2,
                    pr: 1,
                    color: '#002C5F',
                    fontWeight: 600,
                }}
            >
                {t('guide.otp_setup_guide', 'auth')}
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pb: 3.5 }}>
                <Typography variant="h6" sx={{ fontSize: 14, mb: 0.5 }}>
                    1. {t('otp_guide_desc.title1', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step1_1', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step1_2', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step1_3', 'auth')}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 14, mt: 2, mb: 0.5 }}>
                    2. {t('otp_guide_desc.title2', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step2_1', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step2_2', 'auth')}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                    - {t('otp_guide_desc.step2_3', 'auth')}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default OtpGuideModal
