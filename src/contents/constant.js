import t from '#/common/libs/trans'

export const AUTH_STEP = {
    information: 0,
    certified: 1,
    passwordReset: -1,
    emailAuth: -2,
    join: -3,
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
    { value: 0, label: t('all', 'permission'), key: 0 },
    { value: 25, label: t('permission_name.GUEST', 'permission'), key: 1 },
    { value: 26, label: t('permission_name.USER', 'permission'), key: 2 },
    { value: 27, label: t('permission_name.REVIEWER', 'permission'), key: 3 },
    { value: 28, label: t('permission_name.MANAGER', 'permission'), key: 4 },
    { value: 29, label: t('permission_name.ADMIN', 'permission'), key: 5 },
]

export const ROLE_LIST = [
    { value: 25, label: t('permission_name.GUEST', 'permission'), key: 1 },
    { value: 26, label: t('permission_name.USER', 'permission'), key: 2 },
    { value: 27, label: t('permission_name.REVIEWER', 'permission'), key: 3 },
    { value: 28, label: t('permission_name.MANAGER', 'permission'), key: 4 },
    { value: 29, label: t('permission_name.ADMIN', 'permission'), key: 5 },
]

export const TERMS_LIST = [
    { value: 'Y', label: t('personal_info_consent', 'auth') },
    { value: 'N', label: t('disagree', 'auth') },
]
