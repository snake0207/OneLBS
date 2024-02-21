import { Box } from '@mui/material'
import SearchFilter from '#/components/users/permission/SearchFilter'
import GeneralTable from '#/components/common/table/GeneralTable'
import t from '#/common/libs/trans'

import permissionHistory from '#/mock/data/user_permission_history.json'
import TitleBar from '#/components/common/menu/TitleBar'

function PermissionHistoryPage() {
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
            { field: 'permission', headerName: t('permission', 'users'), width: 130 },
            { field: 'update_date', headerName: t('update_date', 'users'), width: 200 },
            { field: 'update_history', headerName: t('update_history', 'users'), width: 280 },
        ]
    }

    return (
        <Box>
            <TitleBar title={t('top_menu.user_permission_history')} />{' '}
            <SearchFilter onSearch={handleSearch} />
            <GeneralTable
                columns={createColumns()}
                rows={permissionHistory}
                onPageChange={handlePageChange}
            />
        </Box>
    )
}

export default PermissionHistoryPage
