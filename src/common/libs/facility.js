export const getBtsTypeList = () => [
    { key: 'C3', value: 'C3', label: `3G 기지국` },
    { key: 'C4', value: 'C4', label: `LTE 기지국(KT)` },
    { key: 'C4S', value: 'C4S', label: `LTE 공동망 기지국(SKT)` },
    { key: 'C4U', value: 'C4U', label: `LTE 공동망 기지국(U+)` },
    { key: 'C5', value: 'C5', label: `5G 기지국` },
    { key: 'WW', value: 'WW', label: `Wing WiFi` },
]

export const getBtsTypeLabel = {
    C3: { label: `3G 기지국` },
    C4: { label: `LTE 기지국(KT)` },
    C4S: { label: `LTE 공동망 기지국(SKT)` },
    C4U: { label: `LTE 공동망 기지국(U+)` },
    C5: { label: `5G 기지국` },
    WW: { label: `Wing WiFi` },
}

export const unionBtsTypeList = () => [{ key: 'T', value: 'T', label: `전체` }, ...getBtsTypeList()]

export const networkTypeList = () => [
    { key: 'C4', value: 'C4', label: `LTE` },
    { key: 'C3', value: 'C3', label: `3G` },
    { key: 'C5', value: 'C5', label: `5G` },
]

export const networkTypeLabel = {
    C4: { label: 'LTE' },
    C3: { label: '3G' },
    C5: { label: '5G' },
}

export const mncTypeList = () => [
    { key: '08', value: '08', label: `KT` },
    { key: '05', value: '05', label: `SKT` },
    { key: '06', value: '06', label: `LGU+` },
]

export const mncTypeLabel = {
    '08': { label: 'KT' },
    '05': { label: 'SKT' },
    '06': { label: 'LGU+' },
}

export const wifiSourceTypeList = () => [
  { key: 'W', value: 'W', label: `WING` },
  { key: 'C', value: 'C', label: `CS` },
  { key: 'V', value: 'V', label: `VOC` },
]

export const wifiSourceTypeLabel = {
  W: { label: 'WING' },
  C: { label: 'CS' },
  V: { label: 'VOC' },
}