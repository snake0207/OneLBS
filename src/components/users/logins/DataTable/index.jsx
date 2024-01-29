import { DataGrid } from '@mui/x-data-grid'
import t from '#/common/libs/trans'

function DataTable({ rows }) {
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

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={createColumns()} /*hideFooterPagination={true}*/ />
        </div>
    )
}

export default DataTable
