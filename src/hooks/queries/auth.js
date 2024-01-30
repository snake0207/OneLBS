import auth from '#/api/auth'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { useMutation, useQuery } from '@tanstack/react-query'

export const usePostLogin = () => {
    return useMutation({
        mutationFn: auth.postLogin,
    })
}

export const usePostJoin = () => {
    return useMutation({
        mutationFn: auth.postJoin,
    })
}

export const usePostEmailVerify = () => {
    return useMutation({
        mutationFn: auth.postEmailVerify,
    })
}

export const usePostVerifyCode = () => {
    return useMutation({
        mutationFn: auth.postVerifyCode,
    })
}

export const useGetUserIp = () => {
    const { data, refetch } = useQuery({
        queryFn: auth.getUserIp,
        queryKey: [QUERY_KEYS.auth.getIp],
        enabled: false,
    })

    return { data, refetch }
}
