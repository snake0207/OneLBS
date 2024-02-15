function UserManagementPage() {
    return (
        <div>
            <h1>User Management Page</h1>
            <ul>
                <li>
                    <a href="/components/users/list">User List</a>
                </li>
                <li>
                    <a href="/components/users/login-history">User Login History</a>
                </li>
                <li>
                    <a href="/components/users/permission-history">User Permission History</a>
                </li>
                <li>
                    <a href="/components/users/ip-management">User IP Access Management</a>
                </li>
            </ul>
        </div>
    )
}

export default UserManagementPage
