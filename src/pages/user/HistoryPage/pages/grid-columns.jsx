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
        headerName: '일시',
        flex: 1.5,
        renderCell: (params) => <Typography color="primary">{params.row.event_date}</Typography>,
    },
    {
        field: 'userid',
        headerName: '열람자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.userid}</Typography>
        },
    },
    {
        field: 'eventType',
        headerName: '이력 구분',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.eventType}</Typography>
        },
    },
    {
        field: 'permission',
        headerName: '권한',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.permission}</Typography>
        },
    },
    {
        field: 'userIp',
        headerName: '접속 IP',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.userIp}</Typography>
        },
    },
    {
        field: 'contents',
        headerName: '내용',
        flex: 2,
        renderCell: (params) => {
            return <Typography>{params.row.contents}</Typography>
        },
    },
]
