import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'statDate',
        headerName: '통계일',
        flex: 1.2,
        renderCell: (params) => <Typography color="primary">{params.row.statDate}</Typography>,
    },
    {
        field: 'service',
        headerName: '서비스 코드',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.service}</Typography>,
    },
    {
        field: 'appId',
        headerName: 'APP ID',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.appId}</Typography>,
    },
    {
        field: 'model',
        headerName: '단말 모델',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.model}</Typography>,
    },
    {
        field: 'opType',
        headerName: 'OP Type',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.opType}</Typography>,
    },
    {
        field: 'respCode',
        headerName: '응답코드',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.respCode}</Typography>,
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
        headerName: '평균응답(초)',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.elapsedTime}</Typography>,
    },
]
