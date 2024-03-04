import { Box, Button } from '@mui/material'
import t from '#/common/libs/trans.js'
import style from './style.module'

const ActionButtons = ({ type, status, clickAction, id }) => {
    const buttonTextByType = (type, status) => {
        switch (type) {
            case 'requester':
                return status === 'request'
                    ? ['retrieve']
                    : status === 'rejected' || status === 'temporary'
                      ? ['re_request']
                      : null
            case 'reviewer':
                return status === 'request'
                    ? ['approval', 'reject']
                    : status === 'reviewed'
                      ? ['retrieve']
                      : null
            case 'approver':
                return status === 'reviewed' ? ['approval', 'reject'] : null
        }
    }

    const MakeButtons = (actions) => {
        return (
            actions &&
            actions.map((action, index) => {
                return (
                    <Button
                        key={index}
                        variant="contained"
                        onClick={() => clickAction(action, id)}
                        sx={style.darkBlueButton}
                        /* 버튼 클래스명 : darkBlueButton, lightButton, lineButton, blueButton */
                    >
                        {t(`actions.${action}`, 'approval')}
                    </Button>
                )
            })
        )
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: '40px',
            }}
        >
            {MakeButtons(buttonTextByType(type, status))}
        </Box>
    )
}
export default ActionButtons
