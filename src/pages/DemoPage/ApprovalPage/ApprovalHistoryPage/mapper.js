import poiDetailData from '../poiDetailData.json'
import { APPROVAL_STATUS } from '#/contents/constant.js'

const category = (data) => {
    const categories = ['EVCHARGING', 'FUEL', 'PARKING', 'H2CHARGING', 'DEALERPOI']
    const upperCaseKeys = Object.keys(data).map((key) => key.toUpperCase())
    return categories.find((category) => {
        if (upperCaseKeys.includes(category)) return category
    })
}

const detailDataMapper = (res) => {
    console.log('RES >> ', res)
    const data = res.result[0]
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

    const product = {
        status: parseStatus(res.status),
        category: category(data),
        basicInfo: {
            poiId: data.poiId,
            title: data.title,
            postalCode: data.postalCode,
            address: data.address,
            lat: data.position.center.lat,
            lng: data.position.center.lon,
        },
        evChargingInfo: {
            brand: data.evCharging.brand,
            maxWatt: data.evCharging.maxWatt,
            status: data.evCharging.stationStatus,
        },

        // name: productName,
        // options: productOptions.map(({ name, value }) => ({
        //     optionName: name,
        //     optionValue: parseStatus(value),
        // })),
        // colors: productOptions.map(({ colors }) => colors),
    }
    return { product }
}
console.log(detailDataMapper(poiDetailData))

export { detailDataMapper }
