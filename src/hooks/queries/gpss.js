import gpss from '#/api/gpss'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys'

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

export const useGetGpssSuggestions = (requestParam) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.suggestion, requestParam.keyword],
        queryFn: () => gpss.getGpssSuggestions(requestParam),
        enabled: !(requestParam.keyword.length === 0),
        staleTime: 5 * 1000,
    })
    return { data, refetch }
}

export const usePostGpssSearch = (requestParam) => {
    const { data, fetchNextPage, refetch } = useInfiniteQuery({
        queryKey: [QUERY_KEYS.gpss.search, requestParam.keyword, requestParam.category],
        queryFn: ({ pageParam }) => gpss.postGpssSearch({ ...requestParam, pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {},
        enabled: false,
    })

    return {
        data,
        refetch,
        fetchNextPage,
    }
}

export const usePostGpssDetail = (requestParam) => {
    const { data, refetch } = useQuery({
        queryKey: [QUERY_KEYS.gpss.detail, requestParam.poiId],
        queryFn: () => gpss.postGpssDetail(requestParam),
        enabled: false,
    })
    return { data, refetch }
}
