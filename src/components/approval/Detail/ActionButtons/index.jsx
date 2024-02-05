import { Box, Button } from '@mui/material'
import { useRef } from 'react'
import { usePopupActions } from '#/store/usePopupStore.js'

const ActionButtons = ({ type, status, confirmAction, isEditable }) => {
    const popupActions = usePopupActions()

    const openAlertPopup = (action) => {
        if (confirmAction(action)) popupActions.showPopup('alert', `${action} 되었습니다`)
    }

    const handleShowConfirmPopup = (action) => {
        popupActions.showPopup('confirm', `${action} 하시겠습니까?`, () => openAlertPopup(action))
    }
    const buttonText = useRef({
        request: ['임시저장', '회수', '재상신'],
        review: status === '검토완료' ? ['회수'] : ['승인', '반려'],
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
        case 'requester':
            return <>{isEditable && MakeButtons(buttonText.current.request)}</>
        case 'reviewer':
            return (
                <>
                    {status === '검토완료'
                        ? MakeButtons(buttonText.current.review)
                        : isEditable && MakeButtons(buttonText.current.review)}
                </>
            )
        case 'approver':
            return <>{isEditable && MakeButtons(buttonText.current.approval)}</>
        default:
            return <></>
    }
}
export default ActionButtons
