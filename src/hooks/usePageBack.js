import { useEffect } from 'react'

/**
 * 브라우저의 뒤로가기에 대한 커스텀 이벤트 훅
 * @param {() => void} customBack 뒤로가기에 대한 커스텀 이벤트
 */
const usePageBack = (customBack) => {
    const customPageBack = () => {
        history.pushState(null, '', location.href) // 브라우저 history 조작
        customBack() // 커스텀 이벤트 실행
    }

    useEffect(() => {
        history.pushState(null, '', location.href)
        window.addEventListener('popstate', customPageBack)
        return () => {
            // 컴포넌트가 언마운트 될때 이벤트 리스너 정리
            window.removeEventListener('popstate', customPageBack)
        }
    }, [customBack])

    return { customPageBack }
}

export default usePageBack
