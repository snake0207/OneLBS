import SearchFilter from '#/components/users/permission/SearchFilter'

function UserPermissionPage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>User Permission History Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
        </div>
    )
}

export default UserPermissionPage
