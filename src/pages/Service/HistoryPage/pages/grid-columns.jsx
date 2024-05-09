import { getCenterLabel, getPosMethodHistoryLabel } from '#/common/libs/service'
import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'center',
        headerName: '센터',
        flex: 0.8,
        renderCell: (params) => (
            <Typography color="primary">
                {getCenterLabel[params.row.center] !== undefined
                    ? getCenterLabel[params.row.center].label
                    : `${params.row.center} is Unknown`}
            </Typography>
        ),
    },
    {
        field: 'reqDate',
        headerName: '요청일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.reqDate}</Typography>,
    },
    {
        field: 'resDate',
        headerName: '응답일시',
        flex: 1.5,
        renderCell: (params) => <Typography>{params.row.resDate}</Typography>,
    },
    {
        field: 'serviceName',
        headerName: '서비스명',
        flex: 1.2,
        renderCell: (params) => {
            return <Typography>{params.row.serviceName}</Typography>
        },
    },
    // {
    //     field: 'serviceCode',
    //     headerName: '서비스코드',
    //     flex: 1.2,
    //     renderCell: (params) => {
    //         return <Typography>{params.row.serviceCode}</Typography>
    //     },
    // },
    {
        field: 'opType',
        headerName: 'OP Type',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.opType}</Typography>
        },
    },
    {
        field: 'reqMdn',
        headerName: '요청자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.reqMdn}</Typography>
        },
    },
    {
        field: 'targetMdn',
        headerName: '대상자',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.targetMdn}</Typography>
        },
    },
    {
        field: 'posMethod',
        headerName: '측위 방식',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography>
                    {getPosMethodHistoryLabel[params.row.posMethod] !== undefined
                        ? getPosMethodHistoryLabel[params.row.posMethod].label
                        : `${params.row.posMethod} is Unknown`}
                </Typography>
            )
        },
    },
    // {
    //     field: 'model',
    //     headerName: '단말 모델',
    //     flex: 1,
    //     renderCell: (params) => {
    //         return <Typography>{params.row.model}</Typography>
    //     },
    // },
    {
        field: 'result',
        headerName: '결과',
        flex: 0.8,
        renderCell: (params) => {
            return <Typography>{params.row.result}</Typography>
        },
    },
    {
        field: 'respTime',
        headerName: '응답시간(초)',
        flex: 1,
        align: 'right',
        renderCell: (params) => {
            return <Typography>{params.row.respTime}</Typography>
        },
    },
]
