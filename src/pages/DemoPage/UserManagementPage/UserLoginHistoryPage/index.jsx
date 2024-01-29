import SearchFilter from '#/components/users/logins/SearchFilter'

function UserLoginHistoryPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>UserLoginHistoryPage</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
        </div>
    )
}

export default UserLoginHistoryPage
