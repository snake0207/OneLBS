import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys.js'
import { getHistoryList } from '#/api/approval/index.js'

export const useGetHistoryList = () => {
    const { data } = useQuery({
        queryFn: getHistoryList,
        queryKey: [QUERY_KEYS.approval.getHistoryList],
    })
    return data
}
