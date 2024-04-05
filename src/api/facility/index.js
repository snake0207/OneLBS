import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 기지국 검색
const getFacilityBtsSearch = (data) => {
    return getAPI({ endPoint: API_PATH.facility.bts_search, data })
}
// 서비스 이력
const getFacilitySyncHistory = (data) => {
    return getAPI({ endPoint: API_PATH.facility.sync_history, data })
}

export default {
    getFacilityBtsSearch,
    getFacilitySyncHistory,
}
