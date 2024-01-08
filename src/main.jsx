import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import QueryProvider from './components/providers/QueryProvider.jsx'
import GlobalModal from './GlobalModal.jsx'
import GlobalStyles from './GlobalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryProvider>
            <GlobalModal />
            <GlobalStyles />
            <App />
        </QueryProvider>
    </React.StrictMode>,
)
