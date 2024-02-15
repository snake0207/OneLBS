import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import QueryProvider from './components/providers/QueryProvider.jsx'
import GlobalStyles from './GlobalStyles.jsx'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryProvider>
            <CookiesProvider>
                <CssBaseline />
                <GlobalStyles />
                <App />
            </CookiesProvider>
        </QueryProvider>
    </React.StrictMode>,
)
