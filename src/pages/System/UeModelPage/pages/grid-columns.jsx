import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'modelCode',
        headerName: '모델코드',
        flex: 1.2,
        renderCell: (params) => <Typography color="primary">{params.row.modelCode}</Typography>,
    },
    {
        field: 'note',
        headerName: '비고',
        flex: 2,
        renderCell: (params) => {
            return <Typography>{params.row.note}</Typography>
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
