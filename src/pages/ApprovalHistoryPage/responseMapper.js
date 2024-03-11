import {
    parseCategory,
    parseCongestion,
    parseOpeningHours,
    parsePoiProviderType,
    parsePriceIsFree,
} from '#/common/libs/approvalParser.js'
import t from '#/common/libs/trans.js'

// TODO: request mapper, null processing
const evChargerInfo = (data) => {
    return {
        brand: data.brand,
        maxWatt: data.maxWatt,
        parkingFee: data.pFee,
        status: t(`commonInfo.stationStatus.${data.stationStatus}`, 'approval'),
        summary:
            data.status?.map(({ connector, watt, speed, possibleCount }) => ({
                type: t(`evChargingInfo.connector.${connector}`, 'approval'),
                // type: parseSummaryConnectorType(connector),
                watt,
                speed: t(`evChargingInfo.speed.${speed}`, 'approval'),
                possibleCount,
            })) ?? [],
        openingHours: parseOpeningHours(data.openingHours),
        chargers:
            data.charger?.map(
                ({ id, speed, watt, status, lastUsedTime, connectorType, price }) => ({
                    id,
                    speed: speed,
                    watt,
                    status: t(`evChargingInfo.status.${status}`, 'approval'),
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
                type: type,
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
                status: t(`commonInfo.stationStatus.${status}`, 'approval'),
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
    const data = res?.data?.result[0]
    const basicData = {
        status: 'rejected_approval',
        // category: 'h2Charging',
        // status: res.data.status, // service에서 보내줄 결재이력 상태값
        category: parseCategory(data) || '',
        approvalInfo: {
            requestComment: res?.data.requestComment || '',
            reviewerComment: res?.data.reviewerComment || '',
            approverComment: res?.data.managerComment || '',
            approvalLineContents: {
                requester: {
                    team: res?.data.userTeam || '',
                    name: res?.data.userName || '',
                    date: res?.data.requestDtString || '',
                },
                reviewer: {
                    team: res?.data.reviewerTeam || '',
                    name: res?.data.reviewerName || '',
                    date: res?.data.reviewDtString || '',
                },
                approver: {
                    team: res?.data.managerTeam || '',
                    name: res?.data.managerName || '',
                    date: res?.data.manageDtString || '',
                },
            },
            historyList: res?.data.historyList || [],
        },
        poiId: data?.poiId || '',
        basicInfo: {
            title: data?.title || '',
            address: data?.address || '',
            position: data?.position || {},
        },
    }
    return setCategoryData(basicData, data)
}

/**
 * gpss 상세데이터 매퍼
 */
const gpssDetailResponseDataMapper = (res) => {
    if (!!res?.data?.result === false) return null
    const data = res.data.result[0]
    const basicData = {
        category: parseCategory(data),
        cpType: parsePoiProviderType(data.poiId),
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

const countByTypeMapper = (total, counts) => {
    return {
        total,
        temporary: counts.DRAFT,
        request: counts.REVIEW_REQUESTED,
        reviewed: counts.REVIEW_COMPLETED,
        approved: counts.APPROVAL_COMPLETED,
        rejected_review: counts.REVIEW_REJECTED,
        rejected_approval: counts.APPROVAL_REJECTED,
    }
}

export {
    detailResponseDataMapper,
    gpssDetailResponseDataMapper,
    gpssListResponseDataMapper,
    countByTypeMapper,
}
