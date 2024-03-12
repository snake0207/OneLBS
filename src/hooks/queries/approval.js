import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys.js'
import { getHistoryDetail, getHistoryList, postHistoryTempSave } from '#/api/approval/index.js'
import auth from '#/api/auth/index.js'

export const useGetHistoryList = () => {
    const { data } = useQuery({
        queryKey: [QUERY_KEYS.approval.getHistoryList],
        queryFn: getHistoryList,
    })
    return data
}

export const useGetHistoryDetail = (requestId) => {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEYS.approval.getHistoryDetail, requestId],
        queryFn: () => getHistoryDetail(requestId),
    })
    return { data, isPending }
}

export const usePostHistoryTempSave = () => {
    return useMutation({
        mutationFn: postHistoryTempSave,
    })
}
