import { API_PATH } from '#/contents/api'
import { getAPI, postAPI } from '../axios'

// 사용자정보 등록
const postRegistUser = (data) => {
    return postAPI({ endPoint: API_PATH.user.user_regist, data })
}
// 사용자 아이디 중복 체크
const getUserIdDup = (data) => {
    return getAPI({ endPoint: API_PATH.user.user_dup, data })
}
// 사용자정보 목록
const postUserList = (data) => {
    return postAPI({ endPoint: API_PATH.user.user_list, data })
}
// 사용자정보 수정
const postUpdateUser = (data) => {
    return postAPI({ endPoint: API_PATH.user.user_update, data })
}
// 사용자정보 삭제
const postDeleteUser = (data) => {
    return postAPI({ endPoint: API_PATH.user.user_delete, data })
}
// 메뉴 권한 관리
const getMenuPermission = (data) => {
    return getAPI({ endPoint: API_PATH.user.permission_list, data })
}
// 메뉴 권한 업데이트
const postUpdateMenuPermission = (data) => {
    console.log('postUpdateMenuPermission : ', data)
    return postAPI({ endPoint: API_PATH.user.permission_update, data })
}
// 사용자 이력관리
const postUserHistoryList = (data) => {
    return postAPI({ endPoint: API_PATH.user.user_history, data })
}

export default {
    postRegistUser,
    getUserIdDup,
    postUserList,
    postUpdateUser,
    postDeleteUser,
    getMenuPermission,
    postUpdateMenuPermission,
    postUserHistoryList,
}
