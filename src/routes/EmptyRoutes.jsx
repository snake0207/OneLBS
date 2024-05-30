import { Suspense, lazy } from 'react'
import EmptyLayout from '#/layouts/EmptyLayout'

const NotFoundPage = lazy(() => import('#/pages/NotFoundPage'))

const EmptyRoutes = {
    element: <EmptyLayout />,
    children: [
        {
            path: '*',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <NotFoundPage />
                </Suspense>
            ),
        },
    ],
}

export default EmptyRoutes
