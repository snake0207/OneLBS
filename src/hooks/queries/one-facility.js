import facility from '#/api/facility'

import { useMutation, useQuery } from '@tanstack/react-query'

// 기지국 검색
export const useGetFacilityBtsSearch = (queryParams = {}, options) => {
    console.log('useGetFacilityBtsSearch : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-facility-bts-search', queryParams],
        queryFn: () => facility.getFacilityBtsSearch(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 서비스 이력조회
export const useGetFacilitySyncHistory = (queryParams = {}, options) => {
    console.log('useGetFacilitySyncHistory : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-facility-sync-history', queryParams],
        queryFn: () => facility.getFacilitySyncHistory(queryParams),
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
