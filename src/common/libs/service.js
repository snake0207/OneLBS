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

// Plane
export const getPlanes = () => [
    { key: 0, value: `UP`, label: `UP` },
    { key: 1, value: `CP`, label: `CP` },
]
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
