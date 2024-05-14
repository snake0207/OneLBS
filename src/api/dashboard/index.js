import { API_PATH } from '#/contents/api'
import { getAPI } from '../axios'

const respCodeStat = (data) => {
    return getAPI({ endPoint: API_PATH.response_code_stat, data })
}

const dashboardStat = (data) => {
    return getAPI({ endPoint: API_PATH.dashboard_stat, data })
}

export default {
    respCodeStat,
    dashboardStat,
}
