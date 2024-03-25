import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const getServiceLists = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_list, data })
}

export default {
    getServiceLists, // 서비스 목록
}
