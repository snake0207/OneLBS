import SearchFilter from '#/components/users/permission/SearchFilter'
import permissionHistory from './history.json'
import GeneralTable from '#/components/common/table/GeneralTable'
import t from '#/common/libs/trans'

function UserPermissionPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    const handlePageChange = (page) => {
        console.log(`page: ${page}`)
    }

    const createColumns = () => {
        return [
            { field: 'id', headerName: t('no', 'users'), width: 70 },
            { field: 'email', headerName: t('email', 'users'), width: 200 },
            { field: 'name', headerName: t('name', 'users'), width: 130 },
            { field: 'permission', headerName: t('permission', 'users'), width: 130 },
            { field: 'update_date', headerName: t('update_date', 'users'), width: 200 },
            { field: 'update_history', headerName: t('update_history', 'users'), width: 280 },
        ]
    }

    return (
        <div>
            <h1>User Permission History Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>Permission History Table</h2>
            <GeneralTable
                columns={createColumns()}
                rows={permissionHistory}
                onNextPage={handlePageChange}
            />
        </div>
    )
}

export default UserPermissionPage
