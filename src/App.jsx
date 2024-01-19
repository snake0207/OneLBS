import { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { themeSettings } from './theme'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import './i18n/index'

import Routes from './routes'
import GlobalModal from '#/GlobalModal'

function App() {
    const theme = useMemo(() => createTheme(themeSettings), [])

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
