import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.login, data })
}

const postJoin = (data) => {
    return postAPI({ endPoint: API_PATH.auth.join, data })
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

const postRenewToken = () => {
    return postAPI({ endPoint: API_PATH.auth.renew_token })
}

const postVerifyOtp = (data) => {
    return postAPI({ endPoint: API_PATH.auth.verify_otp, data })
}

const postPasswordReset = (data) => {
    return postAPI({ endPoint: API_PATH.auth.password_reset, data })
}

export default {
    postLogin,
    postJoin,
    postVerifyEmail,
    postConfirmEmail,
    getUserIp,
    postRenewToken,
    postVerifyOtp,
    postPasswordReset,
}
