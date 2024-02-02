import { Box, Button } from '@mui/material'
import { useRef } from 'react'
import { usePopupActions } from '#/store/usePopupStore.js'

const ActionButtons = ({ type, confirmAction, isEditable }) => {
    const popupActions = usePopupActions()

    const openAlertPopup = (action) => {
        confirmAction(action)
        popupActions.showPopup('alert', `${action} 되었습니다`)
    }

    const handleShowConfirmPopup = (action) => {
        popupActions.showPopup('confirm', `${action} 하시겠습니까?`, () => openAlertPopup(action))
    }
    const buttonText = useRef({
        request: ['임시저장', '회수', '재상신'],
        review: ['회수', '반려', '승인'],
        approval: ['승인', '반려'],
    })

    const MakeButtons = (data) => {
        return (
            <Box>
                {data.map((text, index) => {
                    return (
                        <Button
                            key={index}
                            variant="contained"
                            onClick={() => handleShowConfirmPopup(text)}
                        >
                            {text}
                        </Button>
                    )
                })}
            </Box>
        )
    }

    switch (type) {
        case 'request':
            return <>{isEditable && MakeButtons(buttonText.current.request)}</>
        case 'review':
            return <>{isEditable && MakeButtons(buttonText.current.review)}</>
        case 'approval':
            return <>{isEditable && MakeButtons(buttonText.current.approval)}</>
        default:
            return <></>
    }
}
export default ActionButtons
