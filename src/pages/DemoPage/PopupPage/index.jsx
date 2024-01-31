import { usePopupActions } from '#/store/usePopupStore'

function PopupPage() {
    const actions = usePopupActions()

    const handleOkAction = () => {
        console.log('handleOkAction')
    }

    const handleConfirmOk = () => {
        console.log('handleConfirmOk')
        //actions.closePopup()
    }

    const handleConfirmOkAction = () => {
        console.log('handleConfirmOkAction')

        actions.showPopup('alert', 'Alert Message')
    }

    const handleCancelAction = () => {
        console.log('handleCancelAction')
    }

    const handleOpenAlert = () => {
        console.log('Open Alert')
        actions.showPopup('alert', 'Alert Message')
    }

    const handleOpenAlertWithAction = () => {
        console.log('Open Alert With Action')
        actions.showPopup('alert', 'Alert Message', handleOkAction)
    }

    const handleOpenConfirm = () => {
        console.log('Open Confirm')
        actions.showPopup('confirm', 'Confirm Message', handleConfirmOk)
    }

    const handleOpenConfirmWithAction = () => {
        console.log('Open Confirm With Action')
        actions.showPopup('confirm', 'Confirm Message', handleConfirmOkAction, handleCancelAction)
    }

    return (
        <div>
            <h1>Common Popup</h1>
            <h2>Alert Popup</h2>
            <button onClick={handleOpenAlert}>Open</button>
            <h2>Alert Popup With Action</h2>
            <button onClick={handleOpenAlertWithAction}>Open</button>
            <h2>Confirm Popup</h2>
            <button onClick={handleOpenConfirm}>Open</button>
            <h2>Confirm Popup With Action</h2>
            <button onClick={handleOpenConfirmWithAction}>Open</button>
        </div>
    )
}

export default PopupPage
