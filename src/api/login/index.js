import { API_PATH } from '#/contents/api'
import { postAPI } from '../axios'

const postLogin = (data) => {
    return postAPI({ endPoint: API_PATH.login, data })
}

export default {
    postLogin,
}
