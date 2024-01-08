import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContainer from './components/loginContainer'
import { PAGE_PATH } from './contents/pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PAGE_PATH.login} element={<LoginContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
