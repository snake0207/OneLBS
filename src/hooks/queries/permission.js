import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '#/contents/queryKeys'
import usePermissionSearchStore from '#/store/usePermissionSearchStore'
import permission from '#/api/permission'

export const useGetRoleMenuPermission = () => {
    const { data } = useQuery({
        queryKey: [QUERY_KEYS.permission.roleMenuPermission],
        queryFn: permission.getRoleMenuPermission,
        select: (data) => data.data.data,
    })

    return { data }
}

export const useGetRoleChangeUserList = () => {
    const { page, email, name, roleId } = usePermissionSearchStore()
    const { data } = useQuery({
        queryKey: [QUERY_KEYS.permission.roleChangeUserList, page, email, name, roleId],
        queryFn: () => permission.getRoleChangeUserList({ page, email, name, roleId }),
        select: (data) => data.data.data,
        placeholderData: (data) => data,
    })

    return { data }
}

export const usePutTargetUserIdRole = () => {
    return useMutation({
        mutationFn: ({ userId, roleId }) => permission.putTargetUserIdRole(userId, roleId),
    })
}
