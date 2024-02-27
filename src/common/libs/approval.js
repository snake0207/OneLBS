export const getUserTypeFromPath = (path) => {
    switch (path) {
        case '':
            return 'all'
        case 'user-history':
            return 'requester'
        case 'reviewer-history':
            return 'reviewer'
        case 'manager-history':
            return 'approver'
    }
}
