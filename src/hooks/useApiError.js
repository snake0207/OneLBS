import { usePopupActions } from '#/store/usePopupStore'

const useApiError = () => {
    const { showPopup } = usePopupActions()

    const handlerDefault = () => {
        showPopup('alert', '500 서버 오류')
    }

    const handler400Default = (errorMessage) => {
        showPopup('alert', errorMessage)
    }

    const handlers = {
        default: handlerDefault,
        400: {
            default: handler400Default,
        },
    }

    const handleError = (error) => {
        const httpStatus = error.response.data.code
        const subCode = error.response.data.subCode
        const errorMessage = error.response.data.error

        if (handlers[httpStatus]?.[subCode]) {
            handlers[httpStatus][subCode]()
            return
        }

        if (handlers[httpStatus]) {
            handlers[httpStatus].default(errorMessage)
            return
        }

        handlers.default()
    }

    return handleError
}

export default useApiError
