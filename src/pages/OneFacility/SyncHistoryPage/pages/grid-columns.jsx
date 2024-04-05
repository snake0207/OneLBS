import { Typography } from '@mui/material'

const btsTypeLabel = {
    0: { label: `3G 기지국` },
    1: { label: `LTE 기지국(KT)` },
    2: { label: `LTE 공동망 기지국(SKT)` },
    3: { label: `LTE 공동망 기지국(U+)` },
    4: { label: `5G 기지국` },
    5: { label: `Wing WiFi` },
}

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'btsType',
        headerName: '구분',
        flex: 1.5,
        renderCell: (params) => (
            <Typography color="primary">{btsTypeLabel[params.row.btsType].label}</Typography>
        ),
    },
    {
        field: 'start_date',
        headerName: '시작 일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.start_date}</Typography>,
    },
    {
        field: 'end_date',
        headerName: '종료 일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.end_date}</Typography>,
    },
    {
        field: 'procTime',
        headerName: '소요시간(분)',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.procTime}</Typography>
        },
    },
    {
        field: 'rowCount',
        headerName: '원천 데이터 수',
        flex: 1.2,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.rowCount}</Typography>
        },
    },
    {
        field: 'syncCount',
        headerName: '현행화 데이터 수',
        flex: 1.2,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.syncCount}</Typography>
        },
    },
]
