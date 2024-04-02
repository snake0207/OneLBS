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

const postServiceUpdate = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.service_update, data })
}

// ------------------ START 단말 모델 관리 -----------------------------
const postRegistUE = (data) => {
    console.log('postRegistUE : ', data)
    return postAPI({ endPoint: API_PATH.system.ue_regist, data })
}

const getUEs = (data) => {
    return getAPI({ endPoint: API_PATH.system.ue_list, data })
}

const postUpdateUE = (data) => {
    console.log('postUpdateUE : ', data)
    return postAPI({ endPoint: API_PATH.system.ue_update, data })
}

const postDeleteUEs = (data) => {
    console.log('postDeleteUEs : ', data)
    return postAPI({ endPoint: API_PATH.system.ue_delete, data })
}

const getDeleteUE = (data) => {
    console.log(data)
    return getAPI({ endPoint: API_PATH.system.ue_delete, data })
}
// ------------------ END 단말 모델 관리 -----------------------------

// ------------------ START 위치정보 처리이력 -----------------------------
const getLocTransList = (data) => {
    return getAPI({ endPoint: API_PATH.system.loc_trans, data })
}
// ------------------ END 위치정보 처리이력 -----------------------------

export default {
    getServices, // 서비스 목록
    postServiceRegist, // 서비스 등록
    postServiceUpdate, // 서비스 업데이트
    getServiceCode, // 서비스코드 검색
    postRegistUE, // CREATE
    getUEs, // READ
    postUpdateUE, // UPDATE
    postDeleteUEs, // DELETE-multi
    getDeleteUE, // DELETE-one

    getLocTransList,
}
