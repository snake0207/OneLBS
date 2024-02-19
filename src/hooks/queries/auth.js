import auth from '#/api/auth'
import { RefreshTokenCookie } from '#/common/libs/cookies'
import { QUERY_KEYS } from '#/contents/queryKeys'
import { useSetAccessToken } from '#/store/useAuthStore'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

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
    const { data, refetch } = useQuery({
        queryFn: auth.getUserIp,
        queryKey: [QUERY_KEYS.auth.getIp],
        enabled: false,
    })

    return { data, refetch }
}

export const usePostRefreshToken = () => {
    const refreshToken = RefreshTokenCookie.get()
    const setAccessToken = useSetAccessToken()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: () => auth.postRefreshToken(refreshToken),
        onSuccess: (response) => {
            const { data } = response
            setAccessToken(data.accessToken)
            RefreshTokenCookie.set(data.refreshToken)
        },
        onError: () => {
            navigate('/login')
        },
    })
}
