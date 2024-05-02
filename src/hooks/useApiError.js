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
    const handler401Default = (errorMessage) => {
        showPopup('alert', '로그인 유효시간 만료됨', () => location.replace('/login'))
    }

    const handlers = {
        default: handlerDefault,
        400: {
            default: handler400Default,
        },
        401: {
            default: handler401Default,
        },
    }

    const handleError = (error) => {
        const httpStatus = error.response.data.status
        const errorMessage = error.response.data.error

        if (handlers[httpStatus]) {
            handlers[httpStatus].default(errorMessage)
            return
        }

        handlers.default(httpStatus, errorMessage)
    }

    return handleError
}

export default useApiError
