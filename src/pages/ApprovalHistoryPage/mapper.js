import {
    parseCategory,
    parseChargerSpeed,
    parseChargerStatus,
    parseCongestion,
    parseFuelType,
    parseOpeningHours,
    parsePoiProviderType,
    parsePriceIsFree,
    parseStationStatus,
    parseSummaryConnectorType,
} from '#/common/libs/approvalParser.js'

const evChargerInfo = (data) => {
    return {
        brand: data.brand,
        maxWatt: data.maxWatt,
        parkingFee: data.pFee,
        status: parseStationStatus(data.stationStatus),
        summary:
            data.status?.map(({ connector, watt, speed, possibleCount }) => ({
                type: parseSummaryConnectorType(connector),
                watt,
                speed: parseChargerSpeed(speed),
                possibleCount,
            })) ?? [],
        openingHours: parseOpeningHours(data.openingHours),
        chargers:
            data.charger?.map(
                ({ id, speed, watt, status, lastUsedTime, connectorType, price }) => ({
                    id,
                    speed: speed,
                    watt,
                    status: parseChargerStatus(status),
                    lastUsedTime,
                    type: connectorType,
                    priceList: price?.map(
                        ({ price, priceUnit, currencyCode, currency, isFree }) => ({
                            price,
                            priceUnit,
                            currency,
                            currencyCode,
                            isFree: parsePriceIsFree(isFree),
                        }),
                    ),
                }),
            ) ?? [],
    }
}

const fuelInfo = (data) => {
    return {
        brand: data.brand,
        summary:
            data.status?.map(({ type, price }) => ({
                type: parseFuelType(type),
                price: price.price,
                priceUnit: price.priceUnit,
                currencyCode: price.currencyCode,
                currency: price.currency,
            })) ?? [],
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
        summary:
            data.status?.map(({ chargerCnt, availableCnt, cannotUseCnt, noInfoCnt }) => ({
                totalCount: chargerCnt,
                available: availableCnt,
                unavailable: cannotUseCnt,
                noInfo: noInfoCnt,
            })) ?? [],
        price: data.price.price,
        priceUnit: data.price.priceUnit,
        currencyCode: data.price.currencyCode,
        currency: data.price.currency,
        openingHours: parseOpeningHours(data.openingHours),
        chargers:
            data.charger?.map(({ id, speed, status }) => ({
                id,
                speed: speed,
                status: parseStationStatus(status),
            })) ?? [],
    }
}

const dealerInfo = (data) => {
    return {
        type: data.dealerType,
        manufacturer: data.type,
    }
}

/**
 * POI Detail Response Mapper
 * @param res
 * @returns {{approvalInfo: *, poiId: *, category: *, status: string, basicInfo: {address: *, position: *, title: *}, evChargerInfo?: *, fuelInfo?: *, parkingInfo?: *, h2ChargingInfo?: *, dealerInfo?: *}}
 */
const detailResponseDataMapper = (res) => {
    const data = res.data.result[0]
    const basicData = {
        status: res.data.approvalInfo.status, // service에서 보내줄 결재이력 상태값
        // category: 'fuel',
        category: parseCategory(data),
        approvalInfo: res.data.approvalInfo,
        poiId: data.poiId,
        basicInfo: {
            title: data.title,
            address: data.address,
            position: data.position,
        },
    }
    return setCategoryData(basicData, data)
}

/**
 * gpss 상세데이터 매퍼
 */
const gpssDetailResponseDataMapper = (res) => {
    const data = res.data.result[0]
    const basicData = {
        category: parseCategory(data),
        poiId: data.poiId,
        basicInfo: {
            title: data.title,
            address: data.address,
            position: data.position,
        },
    }
    return setCategoryData(basicData, data)
}

/**
 * gpss 리스트데이터 매퍼
 */
const gpssListResponseDataMapper = (res) => {
    if (!!res?.data?.result === false) return null
    const dataArr = res.data.result
    return dataArr.map((data) => ({
        poiId: data.poiId,
        cpType: parsePoiProviderType(data.poiId),
        category: parseCategory(data),
        title: data.title,
        address: data.address,
        position: data.position,
        country: data.country,
        progress: data.progress ?? null,
    }))
}

const setCategoryData = (basicData, originData) => {
    switch (basicData.category) {
        case 'evCharging':
            return { ...basicData, evChargingInfo: evChargerInfo(originData.evCharging) }
        case 'fuel':
            return { ...basicData, fuelInfo: fuelInfo(originData.fuel) }
        case 'parking':
            return { ...basicData, parkingInfo: parkingInfo(originData.parking) }
        case 'h2Charging':
            return { ...basicData, h2ChargingInfo: h2ChargingInfo(originData.h2Charging) }
        case 'dealerPoi':
            return { ...basicData, dealerPoiInfo: dealerInfo(originData.dealerPoi) }
    }
}

export { detailResponseDataMapper, gpssDetailResponseDataMapper, gpssListResponseDataMapper }
