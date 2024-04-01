import t from '#/common/libs/trans'

export const AUTH_STEP = {
    information: 0,
    certified: 1,
}

export const GPSS_TABLE_TYPE = {
    reviewer: 'reviewer',
    approver: 'approver',
}

export const APPROVAL_STATUS = {
    temporary: { text: `임시저장` },
    request: { text: `검토요청` },
    reviewed: { text: `검토완료` },
    approved: { text: `승인완료` },
    rejected_review: { text: `검토반려` },
    rejected_approval: { text: `승인반려` },
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
