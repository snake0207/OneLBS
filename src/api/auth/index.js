import { API_PATH } from '#/contents/api'
import { postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.login, data })
}

const postJoin = (data) => {
    return postAPI({ endPoint: API_PATH.join, data })
}

export default {
    postLogin,
    postJoin,
}
