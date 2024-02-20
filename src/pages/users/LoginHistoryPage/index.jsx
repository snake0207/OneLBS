import { Box } from '@mui/material'

import SearchFilter from '#/components/users/logins/SearchFilter'
import GeneralTable from '#/components/common/table/GeneralTable'
import TitleBar from '#/components/common/menu/TitleBar'

import t from '#/common/libs/trans'

import loginHistory from '#/mock/data/user_login_history.json'

function LoginHistoryPage() {
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
        <Box>
            <TitleBar title={t('top_menu.user_login_history')} />
            <SearchFilter onSearch={handleSearch} />
            <GeneralTable
                columns={createColumns()}
                rows={loginHistory}
                onPageChange={handlePageChange}
            />
        </Box>
    )
}

export default LoginHistoryPage
