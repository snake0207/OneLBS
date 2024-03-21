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

export const useGetAskUserInfo = () => {
    const { data } = useQuery({
        queryFn: auth.getAskUserInfo,
        queryKey: [QUERY_KEYS.auth.getAskUserInfo],
        select: (data) => data.data.data,
    })

    return { data }
}

export const useGetCaptcha = (queryParams = {}) => {
    return useQuery({
        queryFn: () => auth.getCaptcha(queryParams),
        queryKey: ['get-captcha', queryParams],
    })
}

export const useGetAuthCode = (queryParams = {}) => {
    return useQuery({
        queryFn: () => auth.getAuthCode(queryParams),
        queryKey: ['get-authcode', queryParams],
        options: {
            enabled: !!queryParams.userid,
        },
    })
}
