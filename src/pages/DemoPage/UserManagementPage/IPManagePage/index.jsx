import IpTabel from '#/components/users/access/IpTable'
import SearchFilter from '#/components/users/access/SearchFilter'
import users from './list.json'
import t from '#/common/libs/trans'

import { usePopupActions } from '#/store/usePopupStore'

function IPManagePage() {
    const actions = usePopupActions()
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    const handleEdit = (values) => {
        console.log('handleEdit', values)
    }

    const handleDelete = (values) => {
        console.log('handleDelete', values)

        actions.showPopup(
            'confirm',
            t('popup_confirm_delete', 'users'),
            handleConfirmDelete,
            () => {},
        )
    }

    const handleConfirmDelete = () => {
        console.log('handleConfirmDelete')

        actions.showPopup('alert', t('popup_confirm_delete_success', 'users'))
    }

    return (
        <div>
            <h1>IP Access Management</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>IP Table</h2>
            <IpTabel rows={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}

export default IPManagePage
