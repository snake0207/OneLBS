import { getAPI, postAPI } from '#/api/axios'
import { API_PATH } from '#/contents/api'

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
    const queryParams = { ...data }
    delete queryParams.category
    return getAPI({
        endPoint: API_PATH.gpss.gpss_suggestion + new URLSearchParams(queryParams).toString(),
    })
}

// gpss 통합검색
const postGpssSearch = (data) => {
    const queryParams = { ...data }
    queryParams.size = 20
    queryParams.from = queryParams.pageParam
    queryParams.targetCp = ['mcp', 'here']
    // queryParams.radius = 10000
    delete queryParams.polygonFilter
    delete queryParams.pageParam
    if (queryParams.keyword.length === 0) delete queryParams.keyword
    if (queryParams.category.length === 0) delete queryParams.category
    return postAPI({ endPoint: API_PATH.gpss.gpss_search, data: { ...queryParams } })
}

// gpss 상세검색
const postGpssDetail = (data) => {
    const reqestParam = { ...data }
    delete reqestParam.lat
    delete reqestParam.lon
    delete reqestParam.category
    delete reqestParam.keyword
    delete reqestParam.polygonFilter
    return postAPI({ endPoint: API_PATH.gpss.gpss_detail, data: { ...reqestParam } })
}

export default {
    getReviewer,
    getApprover,
    getGpssSuggestions,
    postGpssSearch,
    postGpssDetail,
}
