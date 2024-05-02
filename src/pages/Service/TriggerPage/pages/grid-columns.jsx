import { Typography } from '@mui/material'

const SCREEN_WIDTH = 1400

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: SCREEN_WIDTH * (7 / 100),
        // flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'regDate',
        headerName: '등록 일시',
        width: SCREEN_WIDTH * (12 / 100),
        // flex: 1.5,
        renderCell: (params) => <Typography>{params.row.regDate}</Typography>,
    },
    {
        field: 'startDate',
        headerName: '시작 일시',
        width: SCREEN_WIDTH * (12 / 100),
        // flex: 1.5,
        renderCell: (params) => <Typography>{params.row.startDate}</Typography>,
    },
    {
        field: 'endDate',
        headerName: '종료 일시',
        width: SCREEN_WIDTH * (12 / 100),
        // flex: 1.5,
        renderCell: (params) => <Typography>{params.row.endDate}</Typography>,
    },
    {
        field: 'interval',
        headerName: '주기(초)',
        width: SCREEN_WIDTH * (7 / 100),
        // flex: 0.8,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.interval}</Typography>
        },
    },
    {
        field: 'requestorMdn',
        headerName: '요청자',
        width: SCREEN_WIDTH * (10 / 100),
        // flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.requestorMdn}</Typography>
        },
    },
    {
        field: 'targetMdn',
        headerName: '대상자',
        width: SCREEN_WIDTH * (10 / 100),
        // flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.targetMdn}</Typography>
        },
    },
    {
        field: 'urlPage',
        headerName: 'URL',
        width: SCREEN_WIDTH * (30 / 100),
        // flex: 3,
        renderCell: (params) => {
            return <Typography>{params.row.urlPage}</Typography>
        },
    },
]
