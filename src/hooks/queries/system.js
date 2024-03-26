import system from '#/api/system'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetServiceList = (queryParams = {}, options) => {
    const { data } = useQuery({
        queryKey: ['get-service-lists', queryParams],
        queryFn: () => system.getServiceLists(),
        ...options,
    })
    return { data: data?.data }
}

export const usePostRegisterService = () => {
    return useMutation({
        mutationFn: system.postRegisterService,
    })
}
