import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys.js'
import { getHistoryDetail, getHistoryList } from '#/api/approval/index.js'

export const useGetHistoryList = () => {
    const { data } = useQuery({
        queryFn: getHistoryList,
        queryKey: [QUERY_KEYS.approval.getHistoryList],
    })
    return data
}

export const useGetHistoryDetail = (id) => {
    console.log('ID >> ', id)
    const { data } = useQuery({
        queryFn: getHistoryDetail,
        queryKey: [QUERY_KEYS.approval.getHistoryDetail],
    })
    return data
}
