import user from '#/api/user'

import { useMutation, useQuery } from '@tanstack/react-query'

// 사용자정보 목록
export const useGetUserList = (queryParams = {}, options) => {
    console.log('useGetUserList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-user-lists', queryParams],
        queryFn: () => user.getUserList(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 사용자 등록 시 코드 중복 체크
export const useGetUserIdDup = (queryParams = {}, options) => {
    console.log('useGetUserIdDup : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-userid-dup', queryParams],
        queryFn: () => user.getUserIdDup(queryParams),
        ...options,
    })
    return { data: data?.data }
}
// 사용자정보 등록
export const usePostRegistUser = () => {
    return useMutation({
        mutationFn: user.postRegistUser,
    })
}
// 사용자정보 수정
export const usePostUpdateUser = () => {
    return useMutation({
        mutationFn: user.postUpdateUser,
    })
}
// 사용자정보 삭제
export const usePostDeleteUser = () => {
    return useMutation({
        mutationFn: user.postDeleteUser,
    })
}
// 메뉴 권한 관리
// 사용자 이력관리
export const useGetUserHistoryList = (queryParams = {}, options) => {
    console.log('useGetUserHistoryList : ', queryParams)
    const { data } = useQuery({
        queryKey: ['get-loctrans-lists', queryParams],
        queryFn: () => user.getUserHistoryList(queryParams),
        ...options,
    })
    return { data: data?.data }
}
