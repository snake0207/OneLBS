import IpTabel from '#/components/users/access/IpTable'
import SearchFilter from '#/components/users/access/SearchFilter'
import users from './list.json'

function IPManagePage() {
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    return (
        <div>
            <h1>IP Access Management</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>IP Table</h2>
            <IpTabel rows={users} />
        </div>
    )
}

export default IPManagePage
