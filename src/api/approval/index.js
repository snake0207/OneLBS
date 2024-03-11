import { getAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api.js'
import dummyData from '#/mock/data/approvalData.json'
import poiDetailData from '#/mock/data/poiDetailData.json'

export const getHistoryList = () => {
    console.log('GET', dummyData)
    return dummyData
    // return getAPI({ endPoint: API_PATH.approval.history_list })
}

export const getHistoryDetail = () => {
    console.log('GET', poiDetailData)
    return poiDetailData
    // return getAPI({ endPoint: API_PATH.approval.history_list })
}
