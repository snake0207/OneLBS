import login from '#/api/login'
import { useMutation } from '@tanstack/react-query'

export const usePostLogin = () => {
    return useMutation({
        mutationFn: login.postLogin,
    })
}
