import { API_PATH } from '#/contents/api'
import { getAPI } from '../axios'

const locationTrafficStat = (data) => {
    return getAPI({ endPoint: API_PATH.dashboard.location_lookup_traffic, data })
}

const respCodeStat = (data) => {
    return getAPI({ endPoint: API_PATH.dashboard.response_code_stat, data })
}

const dashboardStat = (data) => {
    return getAPI({ endPoint: API_PATH.dashboard.dashboard_stat, data })
}

export default {
    locationTrafficStat,
    respCodeStat,
    dashboardStat,
}
