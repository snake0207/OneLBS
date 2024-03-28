// 서비스 유형
export const getServiceTypeList = () => [
    { key: 0, value: 0, label: `긴급` },
    { key: 1, value: 1, label: `일반` },
    { key: 2, value: 2, label: `예외` },
]

// 정확도
export const getAccuracys = () => [
    { key: 0, value: 0, label: `HIGH` },
    { key: 1, value: 1, label: `MID` },
    { key: 2, value: 2, label: `LOW` },
]

// 측위방법
export const getPosMethods = () => [
    { key: 0, value: 0, label: `CellID` },
    { key: 1, value: 1, label: `ECID` },
]

// Plane
export const getPlanes = () => [
    { key: 0, value: 0, label: `UP` },
    { key: 1, value: 1, label: `CP` },
]
// Plane
export const getModes = () => [
    { key: 0, value: 0, label: `MSB` },
    { key: 1, value: 1, label: `MSA` },
]

