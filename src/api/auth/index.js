import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.login, data })
}

const postRenewToken = () => {
    return postAPI({ endPoint: API_PATH.auth.renew_token })
}

const postLogout = () => {
    return postAPI({ endPoint: API_PATH.auth.logout })
}

const postSmsAuthCode = (data) => {
    return postAPI({ endPoint: API_PATH.auth.smscode, data })
}

const getAskUserPermission = (data) => {
    return getAPI({ endPoint: API_PATH.auth.ask_user_permission, data })
}
const getDummyToken = (data) => {
    return getAPI({ endPoint: API_PATH.auth.dummyToken, data })
}

const getCaptcha = (data) => {
    return getAPI({ endPoint: API_PATH.auth.captcha, data, axiosOption: { responseType: 'blob' } })
}

export default {
    postLogin,
    postRenewToken,
    postLogout,
    getAskUserPermission,
    getDummyToken,
    getCaptcha, // captcha
    postSmsAuthCode,
}
