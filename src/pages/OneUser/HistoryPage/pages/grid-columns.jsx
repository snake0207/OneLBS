import { Typography } from '@mui/material'

const reqTypeLabel = {
    T: { label: `전체` },
    L: { label: `로그인` },
    A: { label: `권한변경` },
    M: { label: `메뉴접근` },
}

const authTypeLabel = {
    A: { label: `관리자` },
    O: { label: `운영자` },
}

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'regDate',
        headerName: '일시',
        flex: 2,
        renderCell: (params) => <Typography color="primary">{params.row.regDate}</Typography>,
    },
    {
        field: 'userId',
        headerName: '열람자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.userId}</Typography>
        },
    },
    {
        field: 'reqType',
        headerName: '이력 구분',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{reqTypeLabel[params.row.reqType].label}</Typography>
        },
    },
    {
        field: 'authType',
        headerName: '권한',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{authTypeLabel[params.row.authType].label}</Typography>
        },
    },
    {
        field: 'ipAddr',
        headerName: '접속 IP',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.ipAddr}</Typography>
        },
    },
    {
        field: 'detail',
        headerName: '내용',
        flex: 2,
        renderCell: (params) => {
            return <Typography>{params.row.detail}</Typography>
        },
    },
]
