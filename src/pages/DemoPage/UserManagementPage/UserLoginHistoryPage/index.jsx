import SearchFilter from '#/components/users/logins/SearchFilter'
import DataTable from '#/components/users/logins/DataTable'
import loginHistory from './history.json'

function UserLoginHistoryPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>UserLoginHistoryPage</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>Login History Table</h2>
            <DataTable rows={loginHistory} />
        </div>
    )
}

export default UserLoginHistoryPage
