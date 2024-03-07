import { getAPI, postAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api.js'

// 검토자 조회
const getReviewer = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.reviewer, data })
}

// 승인자 조회
const getApprover = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.approver, data })
}

// gpss 추천어 검색
const getGpssSuggestions = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.gpss_suggestion, data })
}

// gpss 통합검색
const postGpssSearch = (data) => {
    console.log('search list param =>', data)
    return postAPI({ endPoint: API_PATH.gpss.gpss_searh, data })
}

// gpss 상세검색
const postGpssDetail = (data) => {
    console.log('search detail param =>', data)
    return postAPI({ endPoint: API_PATH.gpss.gpss_detail, data })
}

export default {
    getReviewer,
    getApprover,
    getGpssSuggestions,
    postGpssSearch,
    postGpssDetail,
}
