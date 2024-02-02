import SearchFilter from '#/components/users/access/SearchFilter'

function IPManagePage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>IP Access Management</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
        </div>
    )
}

export default IPManagePage
