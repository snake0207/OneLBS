import { Box, Button } from '@mui/material'
import { usePopupActions } from '#/store/usePopupStore.js'
import t from '#/common/libs/trans.js'

const ActionButtons = ({ type, status, confirmAction, isEditable }) => {
    const popupActions = usePopupActions()

    const openAlertPopup = (action) => {
        if (confirmAction(action))
            popupActions.showPopup('alert', t(`confirmed.${action.toLowerCase()}`, 'approval'))
    }

    const handleShowConfirmPopup = (action) => {
        console.log(action, t(`modal.${action}`, 'approval'))
        popupActions.showPopup('confirm', t(`modal.${action.toLowerCase()}`, 'approval'), () =>
            openAlertPopup(action),
        )
    }

    const MakeButtons = (actions) => {
        return (
            <Box>
                {actions.map((action, index) => {
                    return (
                        <Button
                            key={index}
                            variant="contained"
                            onClick={() => handleShowConfirmPopup(action)}
                        >
                            {t(`actions.${action}`, 'approval')}
                        </Button>
                    )
                })}
            </Box>
        )
    }

    switch (type) {
        case 'requester':
            return <>{isEditable && MakeButtons(['temporary', 'retrieve', 're_request'])}</>
        case 'reviewer':
            return (
                <>
                    {status === '검토완료'
                        ? MakeButtons(['retrieve'])
                        : isEditable && MakeButtons(['approval', 'reject'])}
                </>
            )
        case 'approver':
            return <>{isEditable && MakeButtons(['approval', 'reject'])}</>
        default:
            return <></>
    }
}
export default ActionButtons
