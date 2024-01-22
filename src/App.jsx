import { useEffect, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { getThemeSettings } from './theme'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import useLayoutStore from '#/store/useLayoutStore'

import './i18n/index'

import Routes from './routes'
import GlobalModal from '#/GlobalModal'
import { useTranslation } from 'react-i18next'

function App() {
    const { language, themeMode } = useLayoutStore()
    const { i18n } = useTranslation()

    const theme = useMemo(() => createTheme(getThemeSettings(themeMode)), [themeMode])

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language, i18n])

    return (
        <ThemeProvider theme={theme}>
            <GlobalModal />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
