import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'userid',
        headerName: '아이디',
        flex: 1,
        renderCell: (params) => <Typography color="primary">{params.row.userid}</Typography>,
    },
    {
        field: 'permission',
        headerName: '권한',
        flex: 0.8,
        renderCell: (params) => {
            return <Typography>{params.row.permission}</Typography>
        },
    },
    {
        field: 'company',
        headerName: '소속',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.company}</Typography>
        },
    },
    {
        field: 'loginFailCount',
        headerName: '로그인 실패',
        flex: 1,
        align: 'center',
        renderCell: (params) => {
            return <Typography>{params.row.loginFailCount}</Typography>
        },
    },
    {
        field: 'lastLogin_date',
        headerName: '마지막 로그인',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.lastLogin_date}</Typography>
        },
    },
    {
        field: 'regist_date',
        headerName: '등록일시',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.regist_date}</Typography>
        },
    },
    {
        field: 'change_date',
        headerName: '변경일시',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.change_date}</Typography>
        },
    },
]
