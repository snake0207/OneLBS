import GeneralTable from '#/components/common/table/GeneralTable'
import users from './list.json'

function TablePage() {
    const createColumns = () => {
        return [
            { field: 'id', headerName: 'No', width: 70 },
            { field: 'email', headerName: 'Email', width: 200 },
            { field: 'name', headerName: 'Name', width: 130 },
            { field: 'ip_address', headerName: 'IP Address', width: 130 },
            { field: 'permission', headerName: 'Permission', width: 130 },
            { field: 'login_date', headerName: 'Login Date', width: 200 },
        ]
    }

    const handleItemClick = (values) => {
        console.log('handleItemClick', values)
    }

    const handlePageChange = (page) => {
        console.log(`page: ${page}`)
    }

    return (
        <div>
            <h1>General Table</h1>
            <GeneralTable
                columns={createColumns()}
                rows={users}
                onItemClick={handleItemClick}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default TablePage
