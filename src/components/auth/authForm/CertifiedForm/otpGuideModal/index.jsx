import { forwardRef } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { isMobile } from 'react-device-detect'

import t from '#/common/libs/trans'

import style from './style.module'

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
            sx={style.dialogBox}
        >
            <DialogTitle sx={style.title}>
                {t('guide.otp_setup_guide', 'auth')}
                <IconButton onClick={handleClose}>
                    <CloseIcon sx={style.close} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={style.content}>
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
