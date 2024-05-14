import dashboard from '#/api/dashboard'
import { useQuery } from '@tanstack/react-query'

export const useRespCodeStat = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['resp-code-stat', queryParams],
        queryFn: () => dashboard.respCodeStat(queryParams),
        ...options,
    })
    return { data: data?.data }
}

export const useDashboardStat = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['dashboard-stat', queryParams],
        queryFn: () => dashboard.dashboardStat(queryParams),
        ...options,
    })
    return { data: data?.data }
}
