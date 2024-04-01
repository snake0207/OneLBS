import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 서비스 관리
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

// 단말 모델 관리
const getUes = (data) => {
    return getAPI({ endPoint: API_PATH.system.ue_list, data })
}

const postUeDelete = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.ue_delete, data })
}

const postUeRegist = (data) => {
    console.log('postUeRegist : ', data)
    return postAPI({ endPoint: API_PATH.system.ue_regist, data })
}

export default {
    getServices, // 서비스 목록
    postServiceRegist, // 서비스 등록
    getServiceCode, // 서비스코드 검색
    getUes,
    postUeDelete,
    postUeRegist,
}
