import SearchFilter from '#/components/users/logins/SearchFilter'
import GeneralTable from '#/components/common/table/GeneralTable'
import t from '#/common/libs/trans'

import loginHistory from '#/mock/data/user_login_history.json'

function UserLoginHistoryPage() {
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
            { field: 'ip_address', headerName: t('ip_address', 'users'), width: 130 },
            { field: 'permission', headerName: t('permission', 'users'), width: 130 },
            { field: 'login_date', headerName: t('login_date', 'users'), width: 200 },
        ]
    }

    return (
        <div>
            <h1>User Login History Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>Login History Table</h2>
            <GeneralTable
                columns={createColumns()}
                rows={loginHistory}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default UserLoginHistoryPage
