import gpss from '#/api/gpss'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys.js'
export const useGetReviewer = (userName) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.reviewer, userName],
        queryFn: gpss.getReviewer,
        enabled: false,
    })
    return { data, refetch }
}

export const useGetApprover = (userName) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.approver, userName],
        queryFn: gpss.getApprover,
        enabled: false,
    })
    return { data, refetch }
}
