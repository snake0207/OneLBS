import auth from '#/api/auth'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuthActions } from '#/store/useAuthStore'
import { useUserActions } from '#/store/useUserStore'

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

export const usePostPasswordReset = () => {
    return useMutation({
        mutationFn: auth.postPasswordReset,
    })
}

export const usePostLogout = () => {
    const { resetAccessToken } = useAuthActions()
    const { resetUserStore } = useUserActions()
    return useMutation({
        mutationFn: auth.postLogout,
        onSettled: () => {
            resetAccessToken()
            resetUserStore()
        },
    })
}

export const usePostPasswordChange = () => {
    return useMutation({
        mutationFn: auth.postPasswordChange,
    })
}

export const usePostDeferChange = () => {
    return useMutation({
        mutationFn: auth.postDeferChange,
    })
}
