import t from '#/common/libs/trans.js'

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

export const parseCategory = (data) => {
    const categories = ['evCharging', 'fuel', 'parking', 'h2Charging', 'dealerPoi']
    return categories.find((category) => {
        if (Object.keys(data).includes(category)) return category
    })
}

export const parseOpeningHours = (openingHours) => {
    const parseWeekday = (weekday) => {
        switch (weekday) {
            case 0:
                return 'Sun'
            case 1:
                return 'Mon'
            case 2:
                return 'Tue'
            case 3:
                return 'Thu' // 3, 4번 바뀐게 아닌지 확인필요
            case 4:
                return 'Wed'
            case 5:
                return 'Fri'
            case 6:
                return 'Sat'
        }
    }
    return openingHours?.map(({ week, open, close }) => ({
        weekday: parseWeekday(week),
        open,
        close,
    }))
}

// evCharging Parser
export const parsePriceIsFree = (isFree) => {
    return isFree === 0 || isFree === 1 ? t(`evChargingInfo.isFree.${isFree}`, 'approval') : '-'
}

// parking Parser
export const parseCongestion = (congestion) => {
    switch (congestion.toUpperCase()) {
        case 'L':
            return 'Low'
        case 'M':
            return 'Mid'
        case 'H':
            return 'High'
    }
}

export const parsePoiProviderType = (poiId) => {
    return poiId.split(':')[0] === 'mcp' ? 'mcp' : 'here'
}
