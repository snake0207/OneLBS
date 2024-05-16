import dashboard from '#/api/dashboard'
import { useDashboardInterval, useDashboardStatDate } from '#/store/useDashboardStore.js'
import { useQuery } from '@tanstack/react-query'

export const useRespCodeStat = () => {
    const statDate = useDashboardStatDate()
    const interval = useDashboardInterval()
    const { data } = useQuery({
        queryKey: ['resp-code-stat', statDate],
        queryFn: () => dashboard.respCodeStat({ statDate: statDate }),
        enabled: !!statDate,
        refetchInterval: interval * 60000,
        select: (data) => data.data,
    })
    return { data }
}

export const useDashboardStat = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['dashboard-stat', queryParams],
        queryFn: () => dashboard.dashboardStat(queryParams),
        ...options,
    })
    return { data: data?.data }
}
