import system from '#/api/system'
import { useMutation, useQuery } from '@tanstack/react-query'

// 시스템 서비스 관리
// 서비스 리스트
export const useGetServices = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-lists', queryParams],
        queryFn: () => system.getServices(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 서비스 등록 시 코드 중복 체크
export const useGetServiceCode = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-code', queryParams],
        queryFn: () => system.getServiceCode(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 서비스 신규 등록
export const usePostServiceRegist = () => {
    return useMutation({
        mutationFn: system.postServiceRegist,
    })
}

// 단말 모델 관리
// 단말 모델 리스트
export const useGetUes = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-ue-lists', queryParams],
        queryFn: () => system.getUes(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 단말 모델 삭제
export const usePostUeDelete = () => {
    return useMutation({
        mutationFn: system.usePostUeDelete,
    })
}
// 단말 모델 등록
export const usePostUeRegist = () => {
    return useMutation({
        mutationFn: system.postUeRegist,
    })
}
