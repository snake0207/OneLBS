import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.login, data })
}

const postJoin = (data) => {
    return postAPI({ endPoint: API_PATH.join, data })
}

const postEmailVerify = (data) => {
    return postAPI({ endPoint: API_PATH.emailVerify, data })
}

const postVerifyCode = (data) => {
    return postAPI({ endPoint: API_PATH.verifyCode, data })
}

const getUserIp = () => {
    return getAPI({ endPoint: API_PATH.get_ip })
}

export default {
    postLogin,
    postJoin,
    postEmailVerify,
    postVerifyCode,
    getUserIp,
}
