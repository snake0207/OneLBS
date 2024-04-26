import { getCrowdTypeListLabel } from '#/common/libs/service'
import { Typography } from '@mui/material'

export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 0.8,
        renderCell: (params) => <Typography>{params.row.id}</Typography>,
    },
    {
        field: 'statDate',
        headerName: '통계일',
        flex: 1,
        renderCell: (params) => <Typography>{params.row.statDate}</Typography>,
    },
    {
        field: 'crowdType',
        headerName: '처리구분',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography>
                    {getCrowdTypeListLabel[params.row.crowdType] !== undefined
                        ? getCrowdTypeListLabel[params.row.crowdType].label
                        : `${params.row.crowdType} is not exist`}
                </Typography>
            )
        },
    },
    {
        field: 'records',
        headerName: '전체 레코드',
        flex: 1.2,
        renderCell: (params) => {
            return (
                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                    {params.row.records.toLocaleString()}
                </Typography>
            )
        },
    },
    {
        field: 'invalidFormat',
        headerName: '비정상',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography sx={{ color: 'red' }}>
                    {params.row.invalidFormat.toLocaleString()}
                </Typography>
            )
        },
    },
    {
        field: 'lackAccuracy',
        headerName: '부정확',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography sx={{ color: 'green' }}>
                    {params.row.lackAccuracy.toLocaleString()}
                </Typography>
            )
        },
    },
    {
        field: 'overseas',
        headerName: '유효범위 외',
        flex: 1,
        renderCell: (params) => {
            return (
                <Typography sx={{ color: 'magenta' }}>
                    {params.row.overseas.toLocaleString()}
                </Typography>
            )
        },
    },
    {
        field: 'apCount',
        headerName: 'AP 수',
        flex: 1,
        renderCell: (params) => {
            return <Typography color="primary">{params.row.apCount.toLocaleString()}</Typography>
        },
    },
    {
        field: 'infoError',
        headerName: '비정상',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.infoError.toLocaleString()}</Typography>
        },
    },
    {
        field: 'exceedRange',
        headerName: '비유효반경',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.exceedRange.toLocaleString()}</Typography>
        },
    },
    {
        field: 'nationWideCoverage',
        headerName: '커버리지(%)',
        flex: 1,
        renderCell: (params) => {
            return <Typography>{params.row.nationWideCoverage}</Typography>
        },
    },
]

export const columnGroupingModel = [
    {
        groupId: 'WiFi 처리정보',
        headerAlign: 'center',
        children: [
            { field: 'apCount' },
            { field: 'infoError' },
            { field: 'exceedRange' },
            { field: 'nationWideCoverage' },
        ],
    },
]
