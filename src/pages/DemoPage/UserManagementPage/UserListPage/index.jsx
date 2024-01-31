import SearchFilter from '#/components/users/list/SearchFilter'
import UserTable from '#/components/users/list/UserTable'
import users from './list.json'

import { getPopupMessage } from '#/common/libs/permission'
import { usePopupActions } from '#/store/usePopupStore'

function UserListPage() {
    const actions = usePopupActions()
    const handleSearch = (values) => {
        console.log('handleSearch', values)
    }

    const handleNextPage = (page) => {
        console.log('handleNextPage', page)
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

    const handleDeactivate = (row) => {
        console.log('handleDeactivate', row)

        actions.showPopup(
            'confirm',
            getPopupMessage(10),
            handleConfirmDeactivate,
            handleCancelDeactivate,
        )
    }

    const handleConfirmDeactivate = () => {
        console.log('handleConfirmDeactivate')

        actions.showPopup('alert', getPopupMessage(11))
    }

    const handleCancelDeactivate = () => {
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

    return (
        <div>
            <h1>User List Page</h1>
            <h2>Search Filter</h2>
            <SearchFilter onSearch={handleSearch} />
            <h2>User Table</h2>
            <UserTable
                rows={users}
                onNextPage={handleNextPage}
                onChangePermission={handleChangePermission}
                onChangeStatus={handleChangeStatus}
                onChangeRemark={handleChangeRemark}
                onResetPassword={handleResetPassword}
                onDeactivate={handleDeactivate}
            />
        </div>
    )
}

export default UserListPage
