import system from '#/api/system'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetServices = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-lists', queryParams],
        queryFn: () => system.getServices(queryParams),
        ...options,
    })
    return { data: data?.data }
}

export const useGetServiceCode = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-code', queryParams],
        queryFn: () => system.getServiceCode(queryParams),
        ...options,
    })
    return { data: data?.data }
}

export const usePostServiceRegist = () => {
    return useMutation({
        mutationFn: system.postServiceRegist,
    })
}
