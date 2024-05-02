import { Typography } from '@mui/material'

const authTypeLabel = {
    A: { label: `관리자` },
    O: { label: `운영자` },
    '00001': { label: `슈퍼관리자` },
}

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'userId',
        headerName: '아이디',
        flex: 1,
        renderCell: (params) => <Typography color="primary">{params.row.userId}</Typography>,
    },
    {
        field: 'authType',
        headerName: '권한',
        flex: 0.8,
        renderCell: (params) => {
            return <Typography>{authTypeLabel[params.row.authType].label}</Typography>
        },
    },
    {
        field: 'cropName',
        headerName: '소속',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.cropName}</Typography>
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
        field: 'lastLoginTime',
        headerName: '마지막 로그인',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.lastLoginTime}</Typography>
        },
    },
    {
        field: 'regDate',
        headerName: '등록일시',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.regDate}</Typography>
        },
    },
    {
        field: 'updDate',
        headerName: '변경일시',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.updDate}</Typography>
        },
    },
]
