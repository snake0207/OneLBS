import { useQuery } from '@tanstack/react-query'
import permission from '#/api/permission'

export const useGetRoleMenuPermission = () => {
    const { data } = useQuery({
        queryFn: permission.getRoleMenuPermission,
    })
    console.log(data)
    return { data }
}
