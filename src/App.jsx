import { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { themeSettings } from './theme'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import Routes from './routes'

function App() {
    const theme = useMemo(() => createTheme(themeSettings), [])

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
