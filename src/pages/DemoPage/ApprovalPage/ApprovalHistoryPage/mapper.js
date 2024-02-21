import { APPROVAL_STATUS } from '#/contents/constant.js'

const category = (data) => {
    const categories = ['EVCHARGING', 'FUEL', 'PARKING', 'H2CHARGING', 'DEALERPOI']
    const upperCaseKeys = Object.keys(data).map((key) => key.toUpperCase())
    return categories.find((category) => {
        if (upperCaseKeys.includes(category)) return category
    })
}

const parseStatus = (value) => {
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

// common Parser
const parseOpeningHours = (openingHours) => {
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
const parseStationStatus = (status) => {
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
// evCharging Parser
const parseChargerStatus = (status) => {
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
const parseSummaryConnectorType = (type) => {
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
const parseConnectorType = (type) => {
    switch (type) {
        case 0:
            return '알수없음'
        case 1:
            return 'ACtype1'
        case 2:
            return 'ACtype2'
        case 3:
            return 'Combo(AC+DC)'
        case 4:
            return 'CHAdeMO'
    }
}
const parseChargerSpeed = (speed) => {
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
// fuel Parser
const parseFuelType = (type) => {
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
const parseParkingType = (type) => {
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
const parseCongestion = (congestion) => {
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
const parseH2ChargerSpeed = (speed) => {
    return speed === 750 || speed === 350 ? `${speed}bar 수소차` : '확인불가'
}
// dealer Parser
const parseDealerType = (type) => {
    switch (type) {
        case '7538':
            return 'Auto Dealerships'
        case '5511':
            return 'Auto Service & Maintenance'
    }
}
const parseManufacturer = (type) => {
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

const evChargerInfo = (data) => {
    return {
        brand: data.brand,
        maxWatt: data.maxWatt,
        status: parseStationStatus(data.stationStatus),
        summary: data.status.map(({ connector, watt, speed, possibleCount }) => ({
            type: parseSummaryConnectorType(connector),
            watt,
            speed: parseChargerSpeed(speed),
            possibleCount,
        })),
        openingHours: parseOpeningHours(data.openingHours),
        chargers: data.charger.map(({ id, speed, watt, status, lastUsedTime, connectorType }) => ({
            id,
            speed: parseChargerSpeed(speed),
            watt,
            status: parseChargerStatus(status),
            lastUsedTime,
            type: parseConnectorType(connectorType),
        })),
    }
}

const fuelInfo = (data) => {
    return {
        brand: data.brand,
        price: data.status.map(({ type, price }) => ({
            type: parseFuelType(type),
            price: price.price,
            unit: price.priceUnit,
            currencyCode: price.currencyCode,
            currency: price.currency,
        })),
        openingHours: parseOpeningHours(data.openingHours),
    }
}

const parkingInfo = (data) => {
    return {
        brand: data.compnay,
        type: parseParkingType(data.parkingType),
        price: data.price,
        openingHours: parseOpeningHours(data.openingHours),
        congestion: parseCongestion(data.congestion),
    }
}

const h2ChargingInfo = (data) => {
    return {
        brand: data.brand,
        summary: data.status.map(({ chargerCnt, availableCnt, cannotUseCnt, noInfoCnt }) => ({
            totalCount: chargerCnt,
            available: availableCnt,
            unavailable: cannotUseCnt,
            noInfo: noInfoCnt,
        })),
        openingHours: parseOpeningHours(data.openingHours),
        chargers: data.charger.map(({ id, speed, status }) => ({
            id,
            speed: parseH2ChargerSpeed(speed),
            status: parseStationStatus(status),
        })),
    }
}

const dealerInfo = (data) => {
    return {
        type: parseDealerType(data.dealerType),
        manufacturer: parseManufacturer(data.type),
    }
}

const detailResponseDataMapper = (res) => {
    const data = res.data.result[0]
    const basicData = {
        status: parseStatus(res.data.approvalStatus), // service에서 보내줄 결재이력 상태값
        category: category(data),
        basicInfo: {
            poiId: data.poiId,
            title: data.title,
            postalCode: data.postalCode,
            address: data.address,
            centerCoord: {
                lat: data.position.center.lat,
                lng: data.position.center.lon,
            },
            guideCoord: {
                lat: data.position.guide.lat,
                lng: data.position.guide.lon,
            },
        },
    }

    switch (basicData.category) {
        case 'EVCHARGING':
            return { ...basicData, evChargingInfo: evChargerInfo(data.evCharging) }
        case 'FUEL':
            return { ...basicData, fuelInfo: fuelInfo(data.fuel) }
        case 'PARKING':
            return { ...basicData, parkingInfo: parkingInfo(data.parking) }
        case 'H2CHARGING':
            return { ...basicData, h2ChargingInfo: h2ChargingInfo(data.h2Charging) }
        case 'DEALERPOI':
            return { ...basicData, dealerInfo: dealerInfo(data.dealerPoi) }
    }
    return basicData
}

export { detailResponseDataMapper }
