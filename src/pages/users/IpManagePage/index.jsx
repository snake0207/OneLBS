import { useState } from 'react'

import IpTabel from '#/components/users/access/IpTable'
import SearchFilter from '#/components/users/access/SearchFilter'
import t from '#/common/libs/trans'

import { usePopupActions } from '#/store/usePopupStore'
import AddIpDialog from '#/components/users/access/AddIpDialog'
import { Box, Button } from '@mui/material'

import users from '#/mock/data/user_ip_list.json'
import TitleBar from '#/components/common/menu/TitleBar'

function IpManagePage() {
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

    const handleChangePage = (page) => {
        console.log('handleChangePage', page)
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
        <Box>
            <TitleBar title={t('top_menu.user_ip_access_management')} />
            <SearchFilter onSearch={handleSearch} />
            <IpTabel
                rows={users}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onChangePage={handleChangePage}
            />
            <Button variant="contained" onClick={handleOpenRegisterIp}>
                {t('register_ip', 'users')}
            </Button>
            <AddIpDialog
                user={selectedUser}
                open={open}
                onClose={handleClose}
                onRegister={handleRegister}
            />
        </Box>
    )
}

export default IpManagePage
