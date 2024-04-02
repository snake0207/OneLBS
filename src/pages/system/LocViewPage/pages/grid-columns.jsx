import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.5,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'view_date',
        headerName: '열람 일시',
        flex: 1,
        renderCell: (params) => <Typography color="primary">{params.row.view_date}</Typography>,
    },
    {
        field: 'viewer',
        headerName: '열람자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.viewer}</Typography>
        },
    },
    {
        field: 'target',
        headerName: '열람 대상자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.target}</Typography>
        },
    },
    {
        field: 'query_date',
        headerName: '조회 기간',
        flex: 2,
        renderCell: (params) => {
            return (
                <Typography>
                    {params.row.start_date} ~ {params.row.end_date}
                </Typography>
            )
        },
    },
    {
        field: 'purpose',
        headerName: '열람 목적',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.purpose}</Typography>
        },
    },
    {
        field: 'contents',
        headerName: '열람 내용',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.contents}</Typography>
        },
    },
    {
        field: 'viewCount',
        headerName: '열람 건수',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.viewCount}</Typography>
        },
    },
]
