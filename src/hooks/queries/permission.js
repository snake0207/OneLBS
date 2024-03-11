import { useQuery } from '@tanstack/react-query'
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
