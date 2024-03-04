/**
 * 변경된 JSON에서 변경된 객체를 추출하는 함수.
 * @param {object} originalJson - 원본 JSON 객체.
 * @param {object} changedJson - 변경된 JSON 객체.
 * @returns {object} - 다른 항목을 포함하는 객체.
 */
export const extractChangedObjectOfChangedJson = (originalJson, changedJson) => {
    // 값이 다른 항목을 저장할 객체를 초기화합니다.
    const differentItems = {}

    // changedJson의 모든 키를 순회합니다.
    Object.keys(changedJson).forEach((key) => {
        // 각 키에 대한 원본 값과 변경된 값을 가져옵니다.
        const originalValue = originalJson[key]
        const changedValue = changedJson[key]

        // 원본 값과 변경된 값이 다른 경우
        if (originalValue !== changedValue) {
            // 두 값이 모두 객체인지 확인합니다.
            const isObject = typeof originalValue === 'object' && typeof changedValue === 'object'

            // 두 값이 모두 객체인 경우
            if (isObject) {
                // 재귀적으로 함수를 호출하여 객체 내부의 차이점을 찾습니다.
                const differentItemsInObject = extractChangedObjectOfChangedJson(
                    originalValue,
                    changedValue,
                )
                // 차이점이 있는 경우, 이를 differentItems에 추가합니다.
                if (Object.keys(differentItemsInObject).length > 0) {
                    differentItems[key] = differentItemsInObject
                }
            } else {
                // 두 값이 모두 객체가 아닌 경우, 변경된 값을 differentItems에 직접 추가합니다.
                differentItems[key] = changedValue
            }
            // 원본 값과 변경된 값이 다르고, 변경된 값이 객체이며 'id' 키를 포함하는 경우
            if (changedValue && typeof changedValue === 'object' && 'id' in changedValue) {
                differentItems[key] = differentItems[key] || {}
                differentItems[key].id = changedValue.id
            }
        }
    })

    // 차이점을 담은 객체를 반환합니다.
    return differentItems
}
