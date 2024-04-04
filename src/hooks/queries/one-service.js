import service from '#/api/service'

import { useMutation, useQuery } from '@tanstack/react-query'

// 서비스 통계
export const useGetServiceStat = (queryParams = {}, options) => {
    console.log('useGetServiceStat : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-service-stat', queryParams],
        queryFn: () => service.getServiceStat(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 크라우드소싱 통계
export const useGetCloudStat = (queryParams = {}, options) => {
    console.log('useGetCloudStat : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-cloud-stat', queryParams],
        queryFn: () => service.getCloudStat(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 트리거 목록
export const useGetTriggerList = (queryParams = {}, options) => {
    console.log('useGetTriggerList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-trigger-lists', queryParams],
        queryFn: () => service.getTriggerList(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 사용자정보 삭제
// export const usePostDeleteUser = () => {
//     return useMutation({
//         mutationFn: user.postDeleteUser,
//     })
// }
