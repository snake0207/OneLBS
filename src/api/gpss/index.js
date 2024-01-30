import { getAPI } from '#/api/axios.js'
import { API_PATH } from '#/contents/api.js'

const getReviewer = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.reviewer, data })
}

const getManager = (data) => {
    return getAPI({ endPoint: API_PATH.gpss.manager, data })
}

export default {
    getReviewer,
    getManager,
}
