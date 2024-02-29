import { APPROVAL_STATUS } from '#/contents/constant.js'

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

export const parseApprovalStatus = (value) => {
    switch (value) {
        case 'temporary':
            return APPROVAL_STATUS.temporary.text
        case 'request':
            return APPROVAL_STATUS.request.text
        case 'reviewed':
            return APPROVAL_STATUS.reviewed.text
        case 'approved':
            return APPROVAL_STATUS.approved.text
        case 'rejected_review':
            return APPROVAL_STATUS.rejected_review.text
        case 'rejected_approval':
            return APPROVAL_STATUS.rejected_approval.text
    }
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
    return openingHours.map(({ week, open, close }) => ({
        weekday: parseWeekday(week),
        open,
        close,
    }))
}

// TODO: 타입 확인 후 그대로 분리 or 합칠 지 결정
export const parseEvStationStatus = (status) => {
    switch (status) {
        case '0':
            return '알수없음'
        case '1':
            return '통신이상'
        case '2':
            return '사용가능'
        case '3':
            return '충전중'
        case '4':
            return '운영중지'
        case '5':
            return '점검중'
        case '6':
            return '예약중'
    }
}
export const parseH2StationStatus = (status) => {
    switch (status) {
        case 0:
            return '알수없음'
        case 1:
            return '통신이상'
        case 2:
            return '사용가능'
        case 3:
            return '충전중'
        case 4:
            return '운영중지'
        case 5:
            return '점검중'
        case 6:
            return '예약중'
    }
}

// evCharging Parser
export const parseChargerStatus = (status) => {
    switch (status) {
        case 0:
            return '알수없음'
        case 1:
            return '충전가능'
        case 2:
            return '충전중'
        case 3:
            return '충전불가'
    }
}
export const parseSummaryConnectorType = (type) => {
    switch (type) {
        case 0:
            return '알수없음'
        case 1:
            return 'ACtype1'
        case 2:
            return 'ACtype2'
        case 3:
            return 'Combo(AC+DC)type1'
        case 4:
            return 'Combo(AC+DC)type2'
        case 5:
            return 'CHAdeMO'
        case 6:
            return 'CHAdeMO+ACtype1'
    }
}
export const parseConnectorType = (type) => {
    switch (type) {
        case 0:
            return { text: '알수없음', value: 0 }
        case 1:
            return { text: 'ACtype1', value: 1 }
        case 2:
            return { text: 'ACtype2', value: 2 }
        case 3:
            return { text: 'Combo(AC+DC)', value: 3 }
        case 4:
            return { text: 'CHAdeMO', value: 4 }
    }
}
export const parseChargerSpeed = (speed) => {
    switch (speed) {
        case 0:
            return '알수없음'
        case 1:
            return '완속'
        case 2:
            return '급속'
        case 3:
            return '초급속'
    }
}
export const parsePriceIsFree = (isFree) => {
    return isFree === 0 ? '유료' : isFree === 1 ? '무료' : '정보없음'
}

// fuel Parser
export const parseFuelType = (type) => {
    switch (type) {
        case 'G':
            return '휘발유'
        case 'PG':
            return '고급휘발유'
        case 'D':
            return '경유'
        case 'L':
            return 'LPG'
    }
}

// parking Parser
export const parseParkingType = (type) => {
    switch (type) {
        case '0':
            return 'UNKNOWN'
        case '1':
            return 'MULTISTOREY'
        case '2':
            return 'NOTCOVERED'
        case '3':
            return 'COVERED'
        case '4':
            return 'UNDERGROUND'
        case '5':
            return 'PARTIALLY COVERED'
        case '6':
            return 'MECHANICAL'
    }
}
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

// h2Charging Parser
export const parseH2ChargerSpeed = (speed) => {
    return speed === 750 || speed === 350 ? `${speed}bar 수소차` : '확인불가'
}

// dealer Parser
export const parseDealerType = (type) => {
    switch (type) {
        case '7538':
            return 'Auto Dealerships'
        case '5511':
            return 'Auto Service & Maintenance'
    }
}
export const parseManufacturer = (type) => {
    switch (type.toUpperCase()) {
        case 'ALL':
            return 'All'
        case 'H':
            return 'HYUNDAI'
        case 'K':
            return 'KIA'
        case 'GENESIS':
            return 'GENESIS'
    }
}
