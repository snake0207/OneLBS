import { usePopupActions } from '#/store/usePopupStore'
import { useAuthStepActions } from '#/store/useAuthStepStore'

import t from '#/common/libs/trans'
import { AUTH_STEP } from '#/contents/constant'

const useApiError = () => {
    const { showPopup } = usePopupActions()
    const { changeAuthStep } = useAuthStepActions()

    const handlerDefault = (httpStatus, errorMessage = '알 수 없는 오류') => {
        console.log(`에러 코드 - ${httpStatus}`)
        showPopup('alert', `${errorMessage}`)
    }

    const handler400Default = (errorMessage) => {
        showPopup('alert', errorMessage)
    }

    const handler400inActive = () => {
        showPopup('alert', t('400.10122', 'error'), () => changeAuthStep(AUTH_STEP.emailAuth))
    }

    const handler400failCount = (res) => {
        showPopup('alert', t('400.failCount', 'error', { failCount: res.data.failCount }))
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
