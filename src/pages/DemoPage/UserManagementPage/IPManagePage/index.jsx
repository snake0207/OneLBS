import IpTabel from '#/components/users/access/IpTable'
import SearchFilter from '#/components/users/access/SearchFilter'
import t from '#/common/libs/trans'

import { usePopupActions } from '#/store/usePopupStore'
import AddIpDialog from '#/components/users/access/AddIpDialog'
import { useState } from 'react'
import users from '#/mock/data/user_ip_list.json'

function IPManagePage() {
    const actions = usePopupActions()
    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

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

    const handleNextPage = (page) => {
        console.log('handleNextPage', page)
    }

    const handleOpenRegisterIp = () => {
        setSelectedUser(users[0])
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleRegister = (values) => {
        console.log('handleRegister', values)

        setOpen(false)
    }

    return (
        <div>
            <h1>IP Access Management</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>IP Table</h2>
            <IpTabel
                rows={users}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onNextPage={handleNextPage}
            />
            <h2>Register IP Address</h2>
            <button onClick={handleOpenRegisterIp}>Add IP Address</button>
            <AddIpDialog
                user={selectedUser}
                open={open}
                onClose={handleClose}
                onRegister={handleRegister}
            />
        </div>
    )
}

export default IPManagePage
