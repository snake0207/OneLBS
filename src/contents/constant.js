import t from '#/common/libs/trans'

export const AUTH_STEP = {
    information: 0,
    certified: 1,
    passwordReset: -1,
    emailAuth: -2,
    join: -3,
    findId: -4,
}

export const GPSS_TABLE_TYPE = {
    reviewer: 'reviewer',
    approver: 'approver',
}

export const APPROVAL_STATUS = {
    temporary: { text: t('status.temporary', 'approval') },
    request: { text: t('status.request', 'approval') },
    reviewed: { text: t('status.reviewed', 'approval') },
    approved: { text: t('status.approved', 'approval') },
    rejected_review: { text: t('status.rejected_review', 'approval') },
    rejected_approval: { text: t('status.rejected_approval', 'approval') },
}

export const ROLE_SEARCH_SELECT_LIST = [
    { value: 0, label: `전체`, key: 0 },
    { value: 1, label: `운영자`, key: 1 },
    { value: 9, label: `관리자`, key: 9 },
]

export const ROLE_LIST = [
    { value: 1, label: `운영자`, key: 1 },
    { value: 9, label: `관리자`, key: 9 },
]

export const TERMS_LIST = [
    { value: 'Y', label: t('personal_info_consent', 'auth') },
    { value: 'N', label: t('disagree', 'auth') },
]
