import DataTable from '#/components/users/permission/DataTable'
import SearchFilter from '#/components/users/permission/SearchFilter'
import permissionHistory from './history.json'

function UserPermissionPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    const handlePageChange = (page) => {
        console.log(`page: ${page}`)
    }

    return (
        <div>
            <h1>User Permission History Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>Permission History Table</h2>
            <DataTable rows={permissionHistory} pageSize={25} onPageChange={handlePageChange} />
        </div>
    )
}

export default UserPermissionPage
