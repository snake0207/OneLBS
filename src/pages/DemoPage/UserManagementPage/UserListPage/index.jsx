import SearchFilter from '#/components/users/list/SearchFilter'
import UserTable from '#/components/users/list/UserTable'
import users from './list.json'

function UserListPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>User List Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>User Table</h2>
            <UserTable rows={users} />
        </div>
    )
}

export default UserListPage
