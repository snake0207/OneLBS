import { getAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api'

const getRoleMenuPermission = () => {
    return getAPI({ endPoint: API_PATH.permission.role_menu_permission })
}

const getRoleChangeUserList = (data) => {
    return getAPI({ endPoint: API_PATH.permission.role_change_user_list, data })
}

export default {
    getRoleMenuPermission,
    getRoleChangeUserList,
}
