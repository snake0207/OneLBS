import { getAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api'

const getRoleMenuPermission = () => {
    return getAPI({ endPoint: API_PATH.permission.role_menu_permission })
}

export default {
    getRoleMenuPermission,
}
