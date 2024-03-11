import {
    parseCategory,
    parseCongestion,
    parseOpeningHours,
    parsePoiProviderType,
    parsePriceIsFree,
} from '#/common/libs/approvalParser.js'
import t from '#/common/libs/trans.js'

// TODO: null processing
const evChargerInfo = (data) => {
    return {}
}

const fuelInfo = (data) => {
    return {}
}

const parkingInfo = (data) => {
    return {}
}

const h2ChargingInfo = (data) => {
    return {}
}

const dealerInfo = (data) => {
    return {}
}

/**
 * POI Detail Request Mapper
 * @param req
 * @returns {{approvalInfo: *, poiId: *, category: *, status: string, basicInfo: {address: *, position: *, title: *}, evChargerInfo?: *, fuelInfo?: *, parkingInfo?: *, h2ChargingInfo?: *, dealerInfo?: *}}
 */
const detailRequestDataMapper = (req) => {}

export { detailRequestDataMapper }
