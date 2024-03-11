import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import permission from '#/api/permission'
import { QUERY_KEYS } from '#/contents/queryKeys'

export const useGetRoleMenuPermission = () => {
    const { data } = useQuery({
        queryFn: permission.getRoleMenuPermission,
        queryKey: [QUERY_KEYS.permission.roleMenuPermission],
        select: (data) => data.data.data,
    })

    return { data }
}

export const useGetRoleChangeUserList = () => {
    const { data } = useInfiniteQuery({
        queryFn: ({ pageParam, email, name, roldId }) =>
            permission.getRoleChangeUserList({ page: pageParam, email, name, roldId }),
        initialPageParam: 1,
        queryKey: [QUERY_KEYS.permission.roleChangeUserList],
    })

    return { data }
}
