import { usePopupActions } from '#/store/usePopupStore'

import t from '#/common/libs/trans'

const useApiError = () => {
    const { showPopup } = usePopupActions()

    const handlerDefault = (errorMessage) => {
        showPopup('alert', errorMessage)
    }

    const handler400Default = (subCode) => {
        if (subCode) showPopup('alert', t(`400.${subCode}`, 'error'))
        else showPopup('alert', '400 Error')
    }

    const handlers = {
        default: handlerDefault,
        400: {
            default: handler400Default,
        },
    }

    const handleError = (error) => {
        const httpStatus = error.response.status
        const subCode = error.response.data.subCode
        const errorMessage = error.message

        if (handlers[httpStatus]?.[subCode]) {
            handlers[httpStatus][subCode]()
            return
        }

        if (handlers[httpStatus]) {
            handlers[httpStatus].default(subCode)
            return
        }

        handlers.default(errorMessage)
    }

    return handleError
}

export default useApiError
