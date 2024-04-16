import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.login, data })
}

const postJoin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.join, data })
}

const getUserIp = () => {
    return getAPI({ endPoint: API_PATH.auth.get_ip })
}

const postRenewToken = () => {
    return postAPI({ endPoint: API_PATH.auth.renew_token })
}

const postLogout = () => {
    return postAPI({ endPoint: API_PATH.auth.logout })
}

const postDeferChange = () => {
    return postAPI({ endPoint: API_PATH.auth.defer_change })
}
const postSmsAuthCode = (data) => {
    console.log('postSmsAuthCode : ', data)
    return postAPI({ endPoint: API_PATH.auth.smscode, data })
}

const postAskUserPermission = (data) => {
    console.log('postAskUserPermission : ', data)
    return postAPI({ endPoint: API_PATH.auth.ask_user_permission, data })
}

const getDummyToken = (data) => {
    return getAPI({ endPoint: API_PATH.auth.dummyToken, data })
}

const getCaptcha = (data) => {
    return getAPI({ endPoint: API_PATH.auth.captcha, data, axiosOption: { responseType: 'blob' } })
}

export default {
    postLogin,
    postJoin,
    getUserIp,
    postRenewToken,
    postLogout,
    postDeferChange,
    postAskUserPermission,

    getDummyToken,
    getCaptcha, // captcha
    postSmsAuthCode,
}
