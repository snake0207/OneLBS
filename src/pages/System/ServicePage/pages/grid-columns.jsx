import { getServiceTypeLabel } from '#/common/libs/service'
import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
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
        field: 'customerName',
        headerName: '고객사',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.customerName}</Typography>
        },
    },
    {
        field: 'cpName',
        headerName: '서비스제공사',
        flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.cpName}</Typography>
        },
    },
    {
        field: 'serviceType',
        headerName: '서비스 유형',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography>
                    {getServiceTypeLabel[params.row.serviceType] !== undefined
                        ? getServiceTypeLabel[params.row.serviceType].label
                        : `${params.row.serviceType} is not exist`}
                </Typography>
            )
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
