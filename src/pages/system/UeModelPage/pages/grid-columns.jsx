import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.5,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'ueName',
        headerName: '모델명',
        flex: 1.5,
        renderCell: (params) => <Typography color="primary">{params.row.ueName}</Typography>,
    },
    {
        field: 'remarks',
        headerName: '비고',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.remarks}</Typography>
        },
    },
    {
        field: 'register_date',
        headerName: '등록일시',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.register_date}</Typography>
        },
    },
    {
        field: 'change_date',
        headerName: '변경일시',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.change_date}</Typography>
        },
    },
]
