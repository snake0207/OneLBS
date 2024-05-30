import { Suspense, lazy } from 'react'
import AuthLayout from '#/layouts/AuthLayout'

const LoginPage = lazy(() => import('#/pages/LoginPage'))

const AuthRoutes = {
    element: <AuthLayout />,
    children: [
        {
            path: '/login',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <LoginPage />
                </Suspense>
            ),
        },
    ],
}

export default AuthRoutes
