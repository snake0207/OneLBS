import { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { getThemeSettings } from './theme'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import useLayoutStore from '#/store/useLayoutStore'


import Routes from './routes'
import CommonPopup from '#/components/common/popup/CommonPopup'

function App() {
    const { themeMode } = useLayoutStore()

    const theme = useMemo(() => createTheme(getThemeSettings(themeMode)), [themeMode])


    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <CommonPopup />
        </ThemeProvider>
    )
}

export default App
