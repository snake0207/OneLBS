import auth from '#/api/auth'
import { useMutation } from '@tanstack/react-query'

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
