import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys.js'
import { getHistoryDetail, getHistoryList, postHistoryTempSave } from '#/api/approval/index.js'

export const useGetHistoryList = () => {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEYS.approval.getHistoryList],
        queryFn: getHistoryList,
    })
    return { data: data?.data?.data, isPending }
}

export const useGetHistoryDetail = (requestId) => {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEYS.approval.getHistoryDetail, requestId],
        queryFn: () => getHistoryDetail(requestId),
        // queryFn: () => getHistoryDetail(requestId).then((res) => res.data),
    })
    return { data, isPending }
}

export const usePostHistoryTempSave = () => {
    return useMutation({
        mutationFn: postHistoryTempSave,
    })
}
