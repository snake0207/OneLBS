import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 서비스 관리
const getServices = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_list, data })
}

const getServiceCodeDup = (data) => {
    return getAPI({ endPoint: API_PATH.system.service_dup, data })
}

const postServiceRegist = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.service_regist, data })
}

const postServiceUpdate = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.service_update, data })
}

const postServiceDelete = (data) => {
    console.log(data)
    return postAPI({ endPoint: API_PATH.system.service_delete, data })
}

// 단말 모델 관리
const postRegistUE = (data) => {
    console.log('postRegistUE : ', data)
    return postAPI({ endPoint: API_PATH.system.ue_regist, data })
}

// 단말 모델 중복 체크
const getUECodeDup = (data) => {
    return getAPI({ endPoint: API_PATH.system.ue_dup, data })
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

// 위치정보 처리이력
const getLocTransList = (data) => {
    return getAPI({ endPoint: API_PATH.system.loc_trans, data })
}

// 위치이력 열람내역
const getLocViewList = (data) => {
    return getAPI({ endPoint: API_PATH.system.loc_view, data })
}

export default {
    getServices,
    postServiceRegist,
    postServiceUpdate,
    postServiceDelete,
    getServiceCodeDup,
    postRegistUE,
    getUECodeDup,
    getUEs,
    postUpdateUE,
    postDeleteUEs,
    getDeleteUE,
    getLocTransList,
    getLocViewList,
}
