import t from '#/common/libs/trans'

export const gstStatusLabel = (status) => {
    switch (status) {
        case 0:
            return t('waiting', 'users')
        case 1:
            return t('activate', 'users')
        case 2:
            return t('pause', 'users')
        case 3:
            return t('deactivate', 'users')
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
