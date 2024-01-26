import AlertDialog from '../AlertDialog'
import ConfirmDialog from '../ConfirmDialog'
import usePopupStore from '#/store/usePopupStore'

function CommonPopup() {
    const { show, type, content } = usePopupStore()
    return (
        <>
            {type === 'confirm' && <ConfirmDialog open={show} content={content} />}
            {type === 'alert' && <AlertDialog open={show} content={content} />}
        </>
    )
}

export default CommonPopup
