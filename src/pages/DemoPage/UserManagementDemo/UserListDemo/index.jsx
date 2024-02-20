import { useState } from 'react'
import SearchFilter from '#/components/users/list/SearchFilter'
import UserTable from '#/components/users/list/UserTable'

import { getPopupMessage } from '#/common/libs/permission'
import { usePopupActions } from '#/store/usePopupStore'
import UserDetail from '#/components/users/list/UserDetail'

import users from '#/mock/data/user_list.json'

function UserListDemo() {
    const actions = usePopupActions()
    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    const handleChangePage = (page) => {
        console.log('handleChangePage', page)
    }

    const handleResetPassword = (row) => {
        console.log('handleResetPassword', row)

        actions.showPopup(
            'confirm',
            getPopupMessage(8),
            handleConfirmResestPassword,
            handleCancelResestPassword,
        )
    }

    const handleConfirmResestPassword = () => {
        console.log('handleConfirmResestPassword')

        actions.showPopup('alert', getPopupMessage(9))
    }

    const handleCancelResestPassword = () => {
        // refresh table
    }

    const handleWithdraw = (row) => {
        console.log('handleWithdraw', row)

        actions.showPopup(
            'confirm',
            getPopupMessage(10),
            handleConfirmWithdraw,
            handleCancelWithdraw,
        )
    }

    const handleConfirmWithdraw = () => {
        console.log('handleConfirmWithdraw')

        actions.showPopup('alert', getPopupMessage(11))
    }

    const handleCancelWithdraw = () => {
        // refresh table
    }

    const handleChangePermission = (row, value) => {
        console.log('handleChangePermission', row, value)

        actions.showPopup(
            'confirm',
            getPopupMessage(0),
            handleConfirmPermission,
            handleCancelPermission,
        )
    }

    const handleConfirmPermission = () => {
        console.log('handleConfirmPermission')

        actions.showPopup('alert', getPopupMessage(1))
    }

    const handleCancelPermission = () => {
        // refresh table
    }

    const handleChangeStatus = (row, value) => {
        console.log('handleChangeStatus', row, value)

        actions.showPopup('confirm', getPopupMessage(2), handleConfirmStatus, handleCancelStatus)
    }

    const handleConfirmStatus = () => {
        console.log('handleConfirmStatus')

        actions.showPopup('alert', getPopupMessage(3))
    }

    const handleCancelStatus = () => {
        // refresh table
    }

    const handleChangeRemark = (row, value) => {
        console.log('handleChangeRemark', row, value)

        actions.showPopup('confirm', getPopupMessage(6), handleConfirmRemark, handleCancelRemark)
    }

    const handleConfirmRemark = () => {
        console.log('handleConfirmRemark')

        actions.showPopup('alert', getPopupMessage(7))
    }

    const handleCancelRemark = () => {
        // refresh table
    }

    const handleSelectRow = (row) => {
        console.log('handleSelectRow', row)
        setSelectedUser(row)
        setOpen(true)
    }

    const handleOpenUserDetail = () => {
        console.log('handleOpenUserDetail')
        setSelectedUser(users[0])
        setOpen(true)
    }

    const handleClose = () => {
        console.log('handleClose')
        setOpen(false)
    }

    return (
        <div>
            <h1>User List Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>User Table</h2>
            <UserTable
                rows={users}
                onChangePage={handleChangePage}
                onChangePermission={handleChangePermission}
                onChangeStatus={handleChangeStatus}
                onChangeRemark={handleChangeRemark}
                onResetPassword={handleResetPassword}
                onWithdraw={handleWithdraw}
                onSelectRow={handleSelectRow}
            />
            <h2>User Detail</h2>
            <button onClick={handleOpenUserDetail}>Open User Detail</button>
            <UserDetail
                user={selectedUser}
                open={open}
                onClose={handleClose}
                onApprove={handleChangeStatus}
                onResume={handleChangeStatus}
                onDeactivate={handleChangeStatus}
                onResetPassword={handleResetPassword}
                onChangePermission={handleChangePermission}
            />
        </div>
    )
}

export default UserListDemo
