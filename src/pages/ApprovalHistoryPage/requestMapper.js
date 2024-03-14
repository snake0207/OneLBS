// TODO: null processing
const evChargerInfo = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        if (key === 'parkingFee') acc['pFee'] = data[key]
        else if (key === 'chargers') acc['charger'] = objectToArray(data[key])
        else acc[key] = data[key]

        return acc
    }, {})
}

const parkingInfo = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        if (key === 'brand') acc['company'] = data[key]
        else if (key === 'type') acc['parkingType'] = data[key]
        else acc[key] = data[key]

        return acc
    }, {})
}

const h2ChargingInfo = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        if (key === 'chargers') acc['charger'] = objectToArray(data[key])
        else acc[key] = data[key]

        return acc
    }, {})
}

const dealerInfo = (data) => {
    return Object.keys(data).reduce((acc, key) => {
        if (key === 'type') acc['dealerType'] = data[key]
        else if (key === 'manufacturer') acc['type'] = data[key]

        return acc
    }, {})
}

const objectToArray = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc.push({ ...obj[key] })
        return acc
    }, [])
}

/**
 * POI Detail Request Mapper
 * @returns {{approvalInfo: *, poiId: *, category: *, status: string, basicInfo: {address: *, position: *, title: *}, evCharger?: *, fuel?: *, parking?: *, h2Charging?: *, dealer?: *}}
 * @param id
 * @param req
 */
const detailRequestDataMapper = (id, req) => {
    if (!id || !req) return

    return {
        requestId: parseInt(id),
        editData: {
            ...req,
            ...(req.evCharging && { evCharging: evChargerInfo(req.evCharging) }),
            ...(req.fuel && { fuel: req.fuel }),
            ...(req.parking && { parking: parkingInfo(req.parking) }),
            ...(req.h2Charging && { h2Charging: h2ChargingInfo(req.h2Charging) }),
            ...(req.dealerPoi && { dealerPoi: dealerInfo(req.dealerPoi) }),
        },
    }
}

export { detailRequestDataMapper }
