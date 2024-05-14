import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: '번호',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'statTime',
        headerName: '통계 일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.reqDate}</Typography>,
    },
    {
        field: 'serviceCode',
        headerName: '서비스코드',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.serviceCode}</Typography>
        },
    },
    {
        field: 'posMethod',
        headerName: '측위 방식',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.posMethod}</Typography>
        },
    },
    {
        field: 'count',
        headerName: '전체',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.count.toLocaleString()}</Typography>,
    },
    {
        field: 'successCnt',
        headerName: '성공',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.successCnt.toLocaleString()}</Typography>,
    },
    {
        field: 'successRate',
        headerName: '성공률(%)',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.successRate}</Typography>,
    },
    {
        field: 'elapsedTime',
        headerName: '평균 응답(초)',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.elapsedTime}</Typography>,
    },
]
