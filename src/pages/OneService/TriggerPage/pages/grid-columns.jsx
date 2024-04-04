import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'reg_date',
        headerName: '등록 일시',
        flex: 1.5,
        renderCell: (params) => <Typography color="primary">{params.row.reg_date}</Typography>,
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
        field: 'interval',
        headerName: '주기(초)',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.interval}</Typography>
        },
    },
    {
        field: 'phoneNo',
        headerName: '전화번호',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.phoneNo}</Typography>
        },
    },
    {
        field: 'url',
        headerName: 'URL',
        flex: 2.5,
        renderCell: (params) => {
            return <Typography>{params.row.url}</Typography>
        },
    },
]
