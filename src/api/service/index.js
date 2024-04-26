import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 서비스 이력
const getServiceHistory = (data) => {
    return getAPI({ endPoint: API_PATH.service.history, data })
}
// 서비스 이력 상세
const getServiceHistoryDetail = (data) => {
    return getAPI({ endPoint: API_PATH.service.history_detail, data })
}
// 서비스 통계
const getServiceStat = (data) => {
    return getAPI({ endPoint: API_PATH.service.service_stat, data })
}
// 크라우드소싱 통계
const getCrowdStat = (data) => {
    return getAPI({ endPoint: API_PATH.service.crowd_stat, data })
}
// 트리거 목록
const getTriggerList = (data) => {
    return getAPI({ endPoint: API_PATH.service.trigger, data })
}

export default {
    getServiceHistory,
    getServiceHistoryDetail,
    getServiceStat,
    getCrowdStat,
    getTriggerList,
}
