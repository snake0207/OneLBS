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
