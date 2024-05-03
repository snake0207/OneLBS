// 서비스 유형

export const getServiceTypeList = () => [
    { key: 'E', value: 'E', label: `긴급` },
    { key: 'N', value: 'N', label: `일반` },
    { key: 'S', value: 'S', label: `안심` },
]

export const getServiceTypeLabel = {
    T: { label: `전체` },
    E: { label: `긴급` },
    N: { label: `일반` },
    S: { label: `안심` },
}

export const unionServiceTypeList = () => [
    { key: 'T', value: 'T', label: `전체` },
    ...getServiceTypeList(),
]
// 정확도
export const getAccuracys = () => [
    { key: 0, value: `HIGH`, label: `HIGH` },
    { key: 1, value: `MID`, label: `MID` },
    { key: 2, value: `LOW`, label: `LOW` },
]

// 측위방법
export const getPosMethods = () => [
    { key: 0, value: `CellID`, label: `CellID` },
    { key: 1, value: `ECID`, label: `ECID` },
]

// 서비스 통계 측위방법
// export const getStatPosMethods = () => [
//     { key: 0, value: `CELL`, label: `CELL` },
//     { key: 1, value: `ECID`, label: `ECID` },
//     { key: 2, value: `GUA`, label: `GUA` },
//     { key: 3, value: `GUB`, label: `GUB` },
//     { key: 4, value: `GCA`, label: `GCA` },
//     { key: 5, value: `GCB`, label: `GCB` },
//     { key: 6, value: `KSA2`, label: `KSA2` },
//     { key: 7, value: `KSA3`, label: `KSA3` },
//     { key: 8, value: `KSA4`, label: `KSA4` },
// ]
export const getStatPosMethods = () => [
    { key: 0, value: 0, label: `CELL` },
    { key: 1, value: 1, label: `GPS` },
    { key: 10, value: 10, label: `WiFi` },
    { key: 11, value: 11, label: `RGNSS` },
]

export const unionGetStatPosMethods = () => [
    { key: 'N', value: `N`, label: `NONE` },
    ...getStatPosMethods(),
]

// Plane
export const getPlanes = () => [
    { key: 0, value: `UP`, label: `UP` },
    { key: 1, value: `CP`, label: `CP` },
]

export const unionGetPlanes = () => [{ key: 'N', value: `N`, label: `NONE` }, ...getPlanes()]
// Plane
export const getModes = () => [
    { key: 0, value: `MSB`, label: `MSB` },
    { key: 1, value: `MSA`, label: `MSA` },
]

export const getDataTypeList = () => [
    { key: 'S', value: 'S', label: `String` },
    { key: 'I', value: 'I', label: `Integer` },
    { key: 'D', value: 'D', label: `Double` },
    { key: 'B', value: 'B', label: `Boolean` },
    { key: 'AS', value: 'AS', label: `Array(String)` },
    { key: 'AI', value: 'AI', label: `Array(Integer)` },
    { key: 'AD', value: 'AD', label: `Array(Double)` },
]

export const getDataTypeLabel = {
    S: { label: `String` },
    I: { label: `Integer` },
    D: { label: `Double` },
    B: { label: `Boolean` },
    AS: { label: `Array(String)` },
    AI: { label: `Array(Integer)` },
    AD: { label: `Array(Double)` },
}

export const getCenterList = () => [
    { key: 'BD', value: 'BD', label: `분당` },
    { key: 'DR', value: 'DR', label: `대전` },
]

export const getCenterLabel = {
    BD: { label: `분당` },
    DR: { label: `대전` },
}

export const getPosMethodHistoryList = () => [
    { key: 0, value: 0, label: `기지국` },
    { key: 1, value: 1, label: `GPS` },
    { key: 10, value: 10, label: `WiFi` },
    { key: 11, value: 11, label: `복합측위` },
]

export const getPosMethodHistoryLabel = {
    0: { label: `기지국` },
    1: { label: `GPS` },
    10: { label: `WiFi` },
    11: { label: `복합측위` },
}

export const getBtsTypeList = () => [
    { key: 3, value: 3, label: `WCDMA` },
    { key: 4, value: 4, label: `LTE` },
    { key: 5, value: 5, label: `5G` },
]

export const getBtsTypeListLabel = {
    3: { label: `WCDMA` },
    4: { label: `LTE` },
    5: { label: `5G` },
}

export const getCrowdTypeList = () => [
    { key: 'D', value: 'D', label: `일간` },
    { key: 'M', value: 'M', label: `통합` },
]

export const unionGetCrowdTypeList = () => [
    { key: 'T', value: 'T', label: `전체` },
    ...getCrowdTypeList(),
]

export const getCrowdTypeListLabel = {
    D: { label: `일간` },
    M: { label: `통합` },
}

export const getTimeTypeList = () => [
    { key: 'M', value: 'M', label: `분별` },
    { key: 'H', value: 'H', label: `시간별` },
    { key: 'D', value: 'D', label: `일별` },
]
