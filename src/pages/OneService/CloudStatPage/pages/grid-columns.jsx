import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'event_date',
        headerName: '통계일',
        flex: 1.5,
        renderCell: (params) => <Typography color="primary">{params.row.event_date}</Typography>,
    },
    {
        field: 'processType',
        headerName: '처리구분',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.processType}</Typography>
        },
    },
    {
        field: 'total',
        headerName: '전체 레코드',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.total}</Typography>
        },
    },
    {
        field: 'unNormal',
        headerName: '비정상',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.unNormal}</Typography>
        },
    },
    {
        field: 'unAccuracy',
        headerName: '부정확',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.unAccuracy}</Typography>
        },
    },
    {
        field: 'outsideEffect',
        headerName: '유효범위 외',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.outsideEffect}</Typography>
        },
    },
    {
        field: 'apCount',
        headerName: 'AP 수',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.apCount}</Typography>
        },
    },
    {
        field: 'apUnNormal',
        headerName: '비정상',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.apUnNormal}</Typography>
        },
    },
    {
        field: 'apOutsideEffect',
        headerName: '비유효반경',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.apOutsideEffect}</Typography>
        },
    },
    {
        field: 'coverage',
        headerName: '커버리지(%)',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.coverage}</Typography>
        },
    },
]
