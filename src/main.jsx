import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import QueryProvider from './components/providers/QueryProvider.jsx'
import GlobalStyles from './GlobalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryProvider>
        <CssBaseline />
        <GlobalStyles />
        <App />
    </QueryProvider>,
)
