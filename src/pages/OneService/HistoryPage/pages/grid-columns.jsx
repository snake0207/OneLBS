import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'center',
        headerName: '센터',
        flex: 1,
        renderCell: (params) => <Typography color="primary">{params.row.center}</Typography>,
    },
    {
        field: 'req_date',
        headerName: '요청일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.req_date}</Typography>,
    },
    {
        field: 'resp_date',
        headerName: '응답일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.resp_date}</Typography>,
    },
    {
        field: 'serviceCode',
        headerName: '서비스',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.serviceCode}</Typography>
        },
    },
    {
        field: 'opType',
        headerName: 'OP Type',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.opType}</Typography>
        },
    },
    {
        field: 'reqNo',
        headerName: '요청자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.reqNo}</Typography>
        },
    },
    {
        field: 'targetNo',
        headerName: '대상자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.targetNo}</Typography>
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
        field: 'ueModel',
        headerName: '단말 모델',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.ueModel}</Typography>
        },
    },
    {
        field: 'respCode',
        headerName: '결과',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.respCode}</Typography>
        },
    },
    {
        field: 'respTime',
        headerName: '응답시간(초)',
        flex: 1.2,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.respTime}</Typography>
        },
    },
]
