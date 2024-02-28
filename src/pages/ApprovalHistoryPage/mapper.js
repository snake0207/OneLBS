import {
    parseChargerSpeed,
    parseChargerStatus,
    parseCongestion,
    parseFuelType,
    parseOpeningHours,
    parseParkingType,
    parsePriceIsFree,
    parseStationStatus,
    parseApprovalStatus,
    parseSummaryConnectorType,
    parseCategory,
} from '#/common/libs/approvalParser.js'

const evChargerInfo = (data) => {
    return {
        brand: data.brand,
        maxWatt: data.maxWatt,
        parkingFee: data.pFee,
        status: parseStationStatus(data.stationStatus),
        summary: data.status.map(({ connector, watt, speed, possibleCount }) => ({
            type: parseSummaryConnectorType(connector),
            watt,
            speed: parseChargerSpeed(speed),
            possibleCount,
        })),
        openingHours: parseOpeningHours(data.openingHours),
        chargers: data.charger?.map(
            ({ id, speed, watt, status, lastUsedTime, connectorType, price }) => ({
                id,
                speed: speed,
                watt,
                status: parseChargerStatus(status),
                lastUsedTime,
                type: connectorType,
                priceList: price?.map(({ price, priceUnit, currencyCode, currency, isFree }) => ({
                    price,
                    priceUnit,
                    currency,
                    currencyCode,
                    isFree: parsePriceIsFree(isFree),
                })),
            }),
        ),
    }
}

const fuelInfo = (data) => {
    return {
        brand: data.brand,
        summary: data.status.map(({ type, price }) => ({
            type: parseFuelType(type),
            price: price.price,
            priceUnit: price.priceUnit,
            currencyCode: price.currencyCode,
            currency: price.currency,
        })),
        openingHours: parseOpeningHours(data.openingHours),
    }
}

const parkingInfo = (data) => {
    return {
        brand: data.company,
        type: data.parkingType,
        priceList: data.price,
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
        price: data.price.price,
        priceUnit: data.price.priceUnit,
        currencyCode: data.price.currencyCode,
        currency: data.price.currency,
        openingHours: parseOpeningHours(data.openingHours),
        chargers: data.charger.map(({ id, speed, status }) => ({
            id,
            speed: speed,
            status: parseStationStatus(status),
        })),
    }
}

const dealerInfo = (data) => {
    return {
        type: data.dealerType,
        manufacturer: data.type,
    }
}

const detailResponseDataMapper = (res) => {
    const data = res.data.result[0]
    const basicData = {
        status: parseApprovalStatus(res.data.approvalStatus), // service에서 보내줄 결재이력 상태값
        category: parseCategory(data),
        approvalInfo: res.data.approvalInfo,
        poiId: data.poiId,
        basicInfo: {
            title: data.title,
            address: data.address,
            position: data.position,
        },
    }

    switch (basicData.category) {
        case 'evCharging':
            return { ...basicData, evChargingInfo: evChargerInfo(data.evCharging) }
        case 'fuel':
            return { ...basicData, fuelInfo: fuelInfo(data.fuel) }
        case 'parking':
            return { ...basicData, parkingInfo: parkingInfo(data.parking) }
        case 'h2Charging':
            return { ...basicData, h2ChargingInfo: h2ChargingInfo(data.h2Charging) }
        case 'dealerPoi':
            return { ...basicData, dealerPoiInfo: dealerInfo(data.dealerPoi) }
    }
    return basicData
}

export { detailResponseDataMapper }
