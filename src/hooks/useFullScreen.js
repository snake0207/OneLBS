import { useState, useEffect } from 'react'

const useFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullScreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange)
        document.addEventListener('mozfullscreenchange', handleFullScreenChange)
        document.addEventListener('MSFullscreenChange', handleFullScreenChange)

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange)
            document.removeEventListener('webkitfullscreenchange', handleFullScreenChange)
            document.removeEventListener('mozfullscreenchange', handleFullScreenChange)
            document.removeEventListener('MSFullscreenChange', handleFullScreenChange)
        }
    }, [])

    const handleFullScreenChange = () => {
        setIsFullScreen(document.fullscreenElement)
    }

    const toggleFullScreen = () => {
        const element = document.documentElement
        if (isFullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen()
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen()
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen()
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen()
            }
        }
    }

    return [isFullScreen, toggleFullScreen]
}

export default useFullScreen
