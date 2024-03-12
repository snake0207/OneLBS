import { getAPI, postAPI, putAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api.js'
import dummyData from '#/mock/data/approvalData.json'
import poiDetailData from '#/mock/data/poiDetailData.json'

export const getHistoryList = () => {
    return dummyData
    // return getAPI({ endPoint: API_PATH.approval.history_list })
}

export const getHistoryDetail = (requestId) => {
    return getAPI({
        endPoint: API_PATH.approval.history_detail,
        axiosOption: { params: { requestId } },
    })
}

export const postHistoryTempSave = ({ type, data }) => {
    return putAPI({ endPoint: API_PATH.approval[`history_temp_save_${type}`], data })
}
