import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.login, data })
}

const postJoin = (data) => {
    return postAPI({
        endPoint: API_PATH.auth.join,
        data,
        axiosOption: { headers: { 'Content-Type': 'application/json' } },
    })
}

const postVerifyEmail = (data) => {
    return postAPI({ endPoint: API_PATH.auth.verify_email, data })
}

const postConfirmEmail = (data) => {
    return postAPI({ endPoint: API_PATH.auth.confirm_eamil, data })
}

const getUserIp = () => {
    return getAPI({ endPoint: API_PATH.auth.get_ip })
}

export default {
    postLogin,
    postJoin,
    postVerifyEmail,
    postConfirmEmail,
    getUserIp,
}
