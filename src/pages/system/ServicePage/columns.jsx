import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.5,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'serviceName',
        headerName: '서비스명',
        flex: 1.3,
        renderCell: (params) => <Typography color="primary">{params.row.serviceName}</Typography>,
    },
    {
        field: 'serviceCode',
        headerName: '서비스코드',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.serviceCode}</Typography>,
    },
    {
        field: 'cpName',
        headerName: '고객사',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.cpName}</Typography>
        },
    },
    {
        field: 'serviceProvider',
        headerName: '서비스제공사',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.serviceProvider}</Typography>
        },
    },
    {
        field: 'status',
        headerName: '서비스 유형',
        flex: 1,
        align: 'center',
        renderCell: (params) => {
            return <Typography>{params.row.status}</Typography>
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

    // {
    //     field: 'comment',
    //     headerName: 'Comment',
    //     flex: 1,
    //     renderCell: (params) => {
    //         return (
    //             <Stack direction="row" spacing={0.5}>
    //                 <MuiSubButton
    //                     name="edit"
    //                     title="수정"
    //                     onClick={() => console.log(`편집 버튼 click : ${params.row.id}`)}
    //                 />
    //                 <MuiSubButton
    //                     name="delete"
    //                     title="삭제"
    //                     onClick={() => console.log(`삭제 버튼 click : ${params.row.id}`)}
    //                 />
    //             </Stack>
    //         )
    //     },
    // },
]
