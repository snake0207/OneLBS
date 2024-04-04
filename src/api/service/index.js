import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 서비스 통계
const getServiceStat = (data) => {
    return getAPI({ endPoint: API_PATH.service.service_stat, data })
}
// 크라우드소싱 통계
const getCloudStat = (data) => {
    return getAPI({ endPoint: API_PATH.service.cloud_stat, data })
}
// 트리거 목록
const getTriggerList = (data) => {
    return getAPI({ endPoint: API_PATH.service.trigger, data })
}
// 사용자정보 삭제
// const postDeleteUser = (data) => {
//     console.log('postDeleteUser : ', data)
//     return postAPI({ endPoint: API_PATH.user.user_delete, data })
// }

export default {
    getServiceStat,
    getCloudStat,
    getTriggerList,
}
