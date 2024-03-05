import auth from '#/api/auth'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { useMutation, useQuery } from '@tanstack/react-query'

export const usePostLogin = () => {
    return useMutation({
        mutationFn: auth.postLogin,
        onSuccess: (data) => {
            console.log(data)
        },
    })
}

export const usePostJoin = () => {
    return useMutation({
        mutationFn: auth.postJoin,
    })
}

export const usePostEmailVerify = () => {
    return useMutation({
        mutationFn: auth.postVerifyEmail,
    })
}

export const usePostConfirmEmail = () => {
    return useMutation({
        mutationFn: auth.postConfirmEmail,
    })
}

export const useGetUserIp = () => {
    const { data } = useQuery({
        queryFn: auth.getUserIp,
        queryKey: [QUERY_KEYS.auth.getIp],
    })

    return { data }
}

export const usePostVerifyOtp = () => {
    return useMutation({
        mutationFn: auth.postVerifyOtp,
    })
}
