import gpss from '#/api/gpss'
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
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

export const useGetGpssSuggestions = (searchParam) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.suggestion, searchParam.keyword],
        queryFn: gpss.getGpssSuggestions,
        enabled: false,
        staleTime: 5 * 1000,
    })
    return { data, refetch }
}

export const usePostGpssSearch = (form) => {
    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey: [QUERY_KEYS.gpss.search, form],
        queryFn: ({ pageParam }) => gpss.postGpssSearch({ ...form, pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {},
    })
}

export const usePostGpssDetail = (form) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.detail, form.poiId],
        queryFn: gpss.postGpssDetail,
        enabled: false,
    })
    return { data, refetch }
}
