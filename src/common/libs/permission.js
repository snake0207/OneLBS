import t from '#/common/libs/trans'

export const getPermissionList = () => [
    { key: 0, value: 0, label: t('all', 'users') },
    { key: 1, value: 1, label: t('general_user', 'users') },
    { key: 2, value: 2, label: t('request_user', 'users') },
    { key: 3, value: 3, label: t('reviewer', 'users') },
    { key: 4, value: 4, label: t('approver', 'users') },
    { key: 5, value: 5, label: t('admin', 'users') },
]

export const gstStatusLabel = (status) => {
    switch (status) {
        case 0:
            return t('waiting', 'users')
        case 1:
            return t('activate', 'users')
        case 2:
            return t('pause', 'users')
        case 3:
            return t('withdraw', 'users')
        default:
            return t('unknown', 'users')
    }
}

export const getAgainstStatus = (status) => {
    switch (status) {
        case 0:
            return 1
        case 1:
            return 3
        case 2:
            return 3
        case 3:
            return 1
        default:
            return 0
    }
}

/*
    "popup_confirm_permission": "권한 변경 하시겠습니까?",
    "popup_confirm_permission_success": "변경되었습니다.",
    "popup_confirm_approval": "승인 하시겠습니까?",
    "popup_confirm_approval_success": "승인되었습니다.",
    "popup_confirm_resume": "휴면 해제 하시겠습니까?",
    "popup_confirm_resume_success": "휴면 해제 되었습니다.",
    "popup_confirm_save": "저장 하시겠습니까?",
    "popup_confirm_save_success": "저장되었습니다.",
    "popup_confirm_reset_password": "비밀번호를 초기화 하시겠습니까?",
    "popup_confirm_reset_password_success": "비밀번호가 초기화 되었습니다.",
    "popup_confirm_withdraw": "탈퇴 처리 하시겠습니까?",
    "popup_confirm_withdraw_success": "탈퇴 처리 되었습니다."
*/
export const getPopupMessage = (status) => {
    switch (status) {
        case 0:
            return t('popup_confirm_permission', 'users')
        case 1:
            return t('popup_confirm_permission_success', 'users')
        case 2:
            return t('popup_confirm_approval', 'users')
        case 3:
            return t('popup_confirm_approval_success', 'users')
        case 4:
            return t('popup_confirm_resume', 'users')
        case 5:
            return t('popup_confirm_resume_success', 'users')
        case 6:
            return t('popup_confirm_save', 'users')
        case 7:
            return t('popup_confirm_save_success', 'users')
        case 8:
            return t('popup_confirm_reset_password', 'users')
        case 9:
            return t('popup_confirm_reset_password_success', 'users')
        case 10:
            return t('popup_confirm_withdraw', 'users')
        case 11:
            return t('popup_confirm_withdraw_success', 'users')
        default:
            return t('unknown', 'users')
    }
}
