import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const getServices = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_list, data })
}

const getServiceCode = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_code, data })
}

const postServiceRegist = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.service_regist, data })
}

export default {
    getServices, // 서비스 목록
    postServiceRegist, // 서비스 등록
    getServiceCode, // 서비스코드 검색
}
