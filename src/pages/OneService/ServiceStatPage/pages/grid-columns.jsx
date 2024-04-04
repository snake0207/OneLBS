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
        field: 'serviceCode',
        headerName: '서비스 코드',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.serviceCode}</Typography>
        },
    },
    {
        field: 'ueModel',
        headerName: '단말 모델',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.ueModel}</Typography>
        },
    },
    {
        field: 'posInit',
        headerName: 'Pos INIT',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.posInit}</Typography>
        },
    },
    {
        field: 'posMethod',
        headerName: '측위 방식',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.posMethod}</Typography>
        },
    },
    {
        field: 'total',
        headerName: '전체',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.total}</Typography>
        },
    },
    {
        field: 'succ',
        headerName: '성공',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.succ}</Typography>
        },
    },
    {
        field: 'succRate',
        headerName: '성공률(%)',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.succRate}</Typography>
        },
    },
    {
        field: 'respTime',
        headerName: '평균응답(초)',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.respTime}</Typography>
        },
    },
]
