import { getBtsTypeLabel } from '#/common/libs/facility'
import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        //flex: 1,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'type',
        headerName: '구분',
        width: 180,
        //flex: 1.5,
        renderCell: (params) => (
            <Typography color="primary">
                {getBtsTypeLabel[params.row.type] !== undefined
                    ? getBtsTypeLabel[params.row.type].label
                    : `${params.row.type} is not exist`}
            </Typography>
        ),
    },
    {
        field: 'startTime',
        headerName: '시작 일시',
        width: 200,
        //flex: 1.5,
        renderCell: (params) => <Typography>{params.row.startTime}</Typography>,
    },
    {
        field: 'finishTime',
        headerName: '종료 일시',
        width: 200,
        //flex: 1.5,
        renderCell: (params) => <Typography>{params.row.finishTime}</Typography>,
    },
    {
        field: 'elapsedTime',
        headerName: '소요시간(분)',
        width: 150,
        align: 'right',
        //flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.elapsedTime}</Typography>
        },
    },
    {
        field: 'rawCount',
        headerName: '원천 데이터 수',
        width: 200,
        align: 'right',
        //flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.rawCount.toLocaleString()}</Typography>
        },
    },
    {
        field: 'updateCount',
        headerName: '현행화 데이터 수',
        width: 200,
        align: 'right',
        //flex: 1.5,
        renderCell: (params) => {
            return <Typography>{params.row.updateCount.toLocaleString()}</Typography>
        },
    },
]
