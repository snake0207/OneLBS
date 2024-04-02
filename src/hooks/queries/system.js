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
// 서비스 업데이트
export const usePostServiceUpdate = () => {
    return useMutation({
        mutationFn: system.postServiceUpdate,
    })
}

// ----------------- Start 단말 모델 관리 ----------------------------------
// 단말 모델 리스트
export const useGetUEs = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-ue-lists', queryParams],
        queryFn: () => system.getUEs(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 단말 모델 삭제(단일)
export const useGetDeleteUE = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['delete-ue', queryParams],
        queryFn: () => system.getDeleteUE(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 단말 모델 삭제(복수)
export const usePostDeleteUEs = (queryParams = {}, options) => {
    return useMutation({
        mutationFn: system.postDeleteUEs,
    })
}
// 단말 모델 등록
export const usePostRegistUE = () => {
    return useMutation({
        mutationFn: system.postRegistUE,
    })
}
// 단말 모델 업데이트
export const usePostUpdateUE = () => {
    return useMutation({
        mutationFn: system.postUpdateUE,
    })
}
// ----------------- End of 단말 모델 관리 ----------------------------------

// ----------------- Start 위치정보 처리이력 ----------------------------------
// 단말 모델 리스트
export const useGetLocTransList = (queryParams = {}, options) => {
    console.log('useGetLocTransList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-loctrans-lists', queryParams],
        queryFn: () => system.getLocTransList(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// ----------------- End 위치정보 처리이력 ----------------------------------
