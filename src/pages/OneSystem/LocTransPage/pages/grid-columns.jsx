import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.5,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'procType',
        headerName: '처리유형',
        flex: 1,
        renderCell: (params) => <Typography color="primary">{params.row.procType}</Typography>,
    },
    {
        field: 'center',
        headerName: '센터',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.center}</Typography>
        },
    },
    {
        field: 'start_date',
        headerName: '처리 시작일시',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.start_date}</Typography>
        },
    },
    {
        field: 'end_date',
        headerName: '처리 종료일시',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.end_date}</Typography>
        },
    },
    {
        field: 'procTime',
        headerName: '소요시간(분)',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.procTime}</Typography>
        },
    },
    {
        field: 'procCount',
        headerName: '처리 건수',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.procCount}</Typography>
        },
    },
]
