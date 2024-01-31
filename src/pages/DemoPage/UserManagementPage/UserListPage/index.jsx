import SearchFilter from '#/components/users/list/SearchFilter'

function UserListPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>User List Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
        </div>
    )
}

export default UserListPage
