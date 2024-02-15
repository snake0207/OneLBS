import { getAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api.js'

const getReviewer = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.reviewer, data })
}

const getApprover = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.approver, data })
}

export default {
    getReviewer,
    getApprover,
}
