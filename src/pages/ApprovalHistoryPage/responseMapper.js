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
const detailResponseDataMapper = ({ data }) => {
    if (!data?.data || !Object.keys(data?.data).length) return

    console.log('RES >>>>>> ', data)
    const requestData = data?.data?.request
    const originData = requestData?.originData
    const editData = requestData?.editData
    const basicData = {
        // category: 'h2Charging',
        status: requestData?.status, // service에서 보내줄 결재이력 상태값
        category: parseCategory(requestData) || '',
        approvalInfo: {
            requestComment: requestData.requestComment || '',
            reviewerComment: requestData.reviewerComment || '',
            approverComment: requestData.managerComment || '',
            approvalLineContents: {
                requester: {
                    id: requestData.userId,
                    team: requestData.userTeam || '',
                    name: requestData.userName || '',
                    date: requestData.requestDtString || '',
                },
                reviewer: {
                    id: requestData.reviewerId,
                    team: requestData.reviewerTeam || '',
                    name: requestData.reviewerName || '',
                    date: requestData.reviewDtString || '',
                },
                approver: {
                    id: requestData.managerId,
                    team: requestData.managerTeam || '',
                    name: requestData.managerName || '',
                    date: requestData.manageDtString || '',
                },
            },
            historyList: requestData.requestLog || [],
        },
        poiId: requestData?.poiId || '',
        basicInfo: {
            title: originData?.title || '',
            address: originData?.address || '',
            position: originData?.position || {},
        },
        editData: {
            basicInfo: {
                title: editData.title,
                address: editData.address || '',
                position: editData.position || {},
            },
            ...setCategoryData({ category: parseCategory(requestData) }, editData),
        },
    }
    return setCategoryData(basicData, requestData)
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
            return { ...basicData, evCharging: evChargerInfo(originData.evCharging) }
        case 'fuel':
            return { ...basicData, fuel: fuelInfo(originData.fuel) }
        case 'parking':
            return { ...basicData, parking: parkingInfo(originData.parking) }
        case 'h2Charging':
            return { ...basicData, h2Charging: h2ChargingInfo(originData.h2Charging) }
        case 'dealerPoi':
            return { ...basicData, dealerPoi: dealerInfo(originData.dealerPoi) }
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
