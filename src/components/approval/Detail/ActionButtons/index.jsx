import { Box, Button } from '@mui/material'
import t from '#/common/libs/trans.js'

const ActionButtons = ({ type, status, clickAction, id }) => {
    console.log('USER TYPE >> ', type)
    const buttonTextByType = (type, status) => {
        switch (type) {
            case 'requester':
                return status === 'request'
                    ? ['retrieve']
                    : status === 'rejected_review' || status === 'temporary'
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

    // 종류에 따른 버튼색상 설정
    const renderButtonColor = (action) => {
        switch (action) {
            case 'approval':
                return 'button.lightblue'
            case 'reject':
                return 'button.lightblue'
            case 'retrieve':
                return 'button.lightblue'
            case 're_request':
                return 'button.lightblue'
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
                        sx={{ bgcolor: renderButtonColor(action), mr: '4px' }}
                    >
                        {t(`actions.${action}`, 'approval')}
                    </Button>
                )
            })
        )
    }

    return <Box>{MakeButtons(buttonTextByType(type, status))}</Box>
}
export default ActionButtons
