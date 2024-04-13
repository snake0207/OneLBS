import { usePopupActions } from '#/store/usePopupStore'

const useApiError = () => {
    const { showPopup } = usePopupActions()

    const handlerDefault = (httpStatus, errorMessage = '알 수 없는 오류') => {
        console.log(`에러 코드 - ${httpStatus}`)
        showPopup('alert', `${errorMessage}`)
    }

    const handler400Default = (errorMessage) => {
        showPopup('alert', errorMessage)
    }

    const handler400inActive = () => {
        showPopup('alert', `입력 오류가 5회 이상으로 해당 계정이 잠겼습니다.`)
    }

    const handler400failCount = (res) => {
        showPopup('alert', `오류 횟수 5회 오류 시 잠금 처리 됩니다.`)
    }

    const handlers = {
        default: handlerDefault,
        400: {
            default: handler400Default,
            10118: handler400inActive,
            10121: handler400failCount,
            10122: handler400inActive,
            10123: handler400failCount,
        },
    }

    const handleError = (error) => {
        const httpStatus = error.response.data.code
        const subCode = error.response.data.subCode
        const errorMessage = error.response.data.error

        if (handlers[httpStatus]?.[subCode]) {
            handlers[httpStatus][subCode](error.response.data)
            return
        }

        if (handlers[httpStatus]) {
            handlers[httpStatus].default(errorMessage)
            return
        }

        handlers.default(httpStatus, errorMessage)
    }

    return handleError
}

export default useApiError
