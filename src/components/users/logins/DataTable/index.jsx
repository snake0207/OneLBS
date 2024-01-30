import { DataGrid } from '@mui/x-data-grid'
import t from '#/common/libs/trans'
import { Box } from '@mui/material'
import CommonPagination from '#/components/common/pagination/CommonPagination'

function DataTable({ rows, pageSize = 25, onPageChange, ...props }) {
    const createColumns = () => {
        return [
            { field: 'id', headerName: t('no', 'users'), width: 70 },
            { field: 'email', headerName: t('email', 'users'), width: 200 },
            { field: 'name', headerName: t('name', 'users'), width: 130 },
            { field: 'ip_address', headerName: t('ip_address', 'users'), width: 130 },
            { field: 'permission', headerName: t('permission', 'users'), width: 130 },
            { field: 'login_date', headerName: t('login_date', 'users'), width: 200 },
        ]
    }

    const CustomPagenation = (props) => {
        //console.log('CustomPagenation', dataLength, onChangePageFunction)

        return <CommonPagination {...props} />
    }

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={createColumns()}
                rowSelection={false}
                slots={{
                    footer: CustomPagenation,
                }}
                slotProps={{
                    footer: {
                        dataLength: rows.length,
                        onChangePageFunction: onPageChange,
                    },
                }}
                initialState={{
                    pagination: { paginationModel: { pageSize } },
                }}
                {...props}
            />
        </Box>
    )
}

export default DataTable
