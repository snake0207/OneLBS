import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 기지국 검색
const getFacilityBtsSearch = (data) => {
    return getAPI({ endPoint: API_PATH.facility.bts_search, data })
}
// Wifi 검색
const getFacilityWifiSearch = (data) => {
    return getAPI({ endPoint: API_PATH.facility.wifi_search, data })
}

// WiFi 등록
const postFacilityRegistWiFi = (data) => {
    console.log('postFacilityRegistWiFi : ', data)
    return postAPI({ endPoint: API_PATH.facility.wifi_regist, data })
}
// WiFi 수정
const postFacilityUpdateWiFi = (data) => {
    console.log('postFacilityUpdateWiFi : ', data)
    return postAPI({ endPoint: API_PATH.facility.wifi_update, data })
}
// WiFi 삭제
const postFacilityDeleteWiFi = (data) => {
    console.log('postFacilityDeleteWiFi : ', data)
    return postAPI({ endPoint: API_PATH.facility.wifi_delete, data })
}

// 서비스 이력
const getFacilitySyncHistory = (data) => {
    return getAPI({ endPoint: API_PATH.facility.sync_history, data })
}

export default {
    getFacilityBtsSearch,
    postFacilityRegistWiFi,
    postFacilityUpdateWiFi,
    postFacilityDeleteWiFi,
    getFacilityWifiSearch,
    getFacilitySyncHistory,
}
