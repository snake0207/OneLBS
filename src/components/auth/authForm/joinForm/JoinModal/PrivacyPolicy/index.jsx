import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import t from '#/common/libs/trans'
import { isMobile } from 'react-device-detect'
import { forwardRef } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullScreen={isMobile}
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
                    pl: 1.5,
                    pr: 1,
                }}
            >
                {t('collect_personal_information', 'auth')}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ border: 1 }}>개인정보수집동의 본문 내용</Box>
            </DialogContent>
        </Dialog>
    )
}

export default PrivacyPolicyModal
