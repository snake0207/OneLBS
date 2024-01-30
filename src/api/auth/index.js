import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.login, data })
}

const postJoin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.join, data })
}

const postEmailVerify = (data) => {
    return postAPI({ endPoint: API_PATH.auth.emailVerify, data })
}

const postVerifyCode = (data) => {
    return postAPI({ endPoint: API_PATH.auth.verifyEmailCode, data })
}

const getUserIp = () => {
    return getAPI({ endPoint: API_PATH.auth.get_ip })
}

export default {
    postLogin,
    postJoin,
    postEmailVerify,
    postVerifyCode,
    getUserIp,
}
