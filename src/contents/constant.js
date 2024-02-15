import t from '#/common/libs/trans'

export const AUTH_STEP = {
    information: 0,
    certified: 1,
    login: 2,
    passwordReset: -1,
    emailAuth: -2,
    join: -3,
}

export const MODAL_TITLE = {
    demo: 'Demo',
    join: t('join', 'auth'),
    joinSuccess: t('join_completed', 'auth'),
    detail: '상세정보',
}

export const GPSS_TABLE_TYPE = {
    reviewer: 'reviewer',
    approver: 'approver',
}
