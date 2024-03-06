import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import useApiError from '#/hooks/useApiError'

const QueryProvider = ({ children }) => {
    const handlerError = useApiError()
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
            mutations: {
                retry: false,
                onError: handlerError,
            },
        },
        queryCache: new QueryCache({
            onError: handlerError,
        }),
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default QueryProvider
