import auth from '#/api/auth'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuthActions } from '#/store/useAuthStore'

export const usePostLogin = () => {
    return useMutation({
        mutationFn: auth.postLogin,
    })
}

export const useGetLogin = (queryParams = {}) => {
    const { data } = useQuery({
        queryFn: () => auth.getCaptcha(queryParams),
        queryKey: ['get-captcha', queryParams],
        select: (data) => data.data,
    })

    return { data }
}

export const usePostJoin = () => {
    return useMutation({
        mutationFn: auth.postJoin,
    })
}

export const usePostLogout = () => {
    // const { resetAccessToken } = useAuthActions()
    return useMutation({
        mutationFn: auth.postLogout,
        onSettled: () => {
            console.log('>>>>>>>>>>>>>>>>>>>>')
            // resetAccessToken()
        },
    })
}

export const usePostDeferChange = () => {
    return useMutation({
        mutationFn: auth.postDeferChange,
    })
}

export const useGetDummyToken = (queryParams = {}, options) => {
    // console.log('useGetDummyToken queryParams : ', queryParams)
    return useQuery({
        queryKey: ['get-dummy-token', queryParams],
        queryFn: () => auth.getDummyToken(queryParams),
        ...options,
    })
}

export const useGetCaptcha = (queryParams = {}, options) => {
    // console.log('useGetCaptcha queryParams : ', queryParams)
    return useQuery({
        queryKey: ['get-captcha', queryParams],
        queryFn: () => auth.getCaptcha(queryParams),
        ...options,
    })
}

export const usePostSmsAuthCode = () => {
    return useMutation({
        mutationFn: auth.postSmsAuthCode,
    })
}

export const useGetAskUserPermission = (queryParams = {}, options) => {
    console.log('useGetAskUserPermission queryParams : ', queryParams)
    return useQuery({
        queryKey: ['get-permissions', queryParams],
        queryFn: () => auth.getAskUserPermission(queryParams.reqData),
        ...options,
    })
}

export const useGetAuthCode = (queryParams = {}, options) => {
    console.log('useGetAuthCode queryParams : ', queryParams)
    return useQuery({
        queryKey: ['get-authcode', queryParams],
        queryFn: () => auth.getAuthCode(queryParams.reqData),
        ...options,
    })
}
