import system from '#/api/system'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

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
export const useGetServiceCodeDup = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-dup', queryParams],
        queryFn: () => system.getServiceCodeDup(queryParams),
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
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: system.postServiceUpdate,
        onSuccess: () => {
            queryClient.invalidateQueries('get-service-lists')
        },
    })
}
// 서비스 삭제
export const usePostServiceDelete = () => {
    return useMutation({
        mutationFn: system.postServiceDelete,
    })
}

// ----------------- Start 단말 모델 관리 ----------------------------------
// 단말 모델 리스트
export const useGetUEs = (queryParams = {}, options) => {
    const queryClient = useQueryClient()
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['get-ue-lists', queryParams],
        queryFn: () => system.getUEs(queryParams),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-ue-lists'] })
        },
        ...options,
    })
    return { data: data?.data, isLoading, refetch }
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
// 단말 도델 중복 체크
// 서비스 등록 시 코드 중복 체크
export const useGetUECodeDup = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-ue-dup', queryParams],
        queryFn: () => system.getUECodeDup(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 단말 모델 업데이트
export const usePostUpdateUE = () => {
    return useMutation({
        mutationFn: system.postUpdateUE,
    })
}

// 엔진설정
export const useGetEngine = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-engine', queryParams],
        queryFn: () => system.getEngine(queryParams),
        ...options,
    })
    return { data: data?.data }
}

export const usePostUpdateEngine = () => {
    return useMutation({
        mutationFn: system.postUpdateEngine,
    })
}

// 위치정보 처리이력
export const useGetLocTransList = (queryParams = {}, options) => {
    console.log('useGetLocTransList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-loctrans-lists', queryParams],
        queryFn: () => system.getLocTransList(queryParams),
        ...options,
    })
    return { data: data?.data }
}

// 위치이력 열람내역
export const useGetLocViewList = (queryParams = {}, options) => {
    console.log('useGetLocViewList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-loctrans-lists', queryParams],
        queryFn: () => system.getLocViewList(queryParams),
        ...options,
    })
    return { data: data?.data }
}
