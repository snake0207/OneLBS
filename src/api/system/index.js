import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const getServiceLists = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_list, data })
}

const postRegisterService = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.register, data })
}

export default {
    getServiceLists, // 서비스 목록
    postRegisterService, // 서비스 등록
}
