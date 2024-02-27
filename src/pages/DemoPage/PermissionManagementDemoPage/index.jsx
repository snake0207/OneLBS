import PermissionCard from '#/components/permission/PermissionCard'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'

const PermissionManagementDemoPage = () => {
    const permissionCardMockData = {
        roleId: 25,
        permission: ['M131R', 'M151R', 'M152R', 'M153R', 'M154R', 'M111R', 'M111U', 'M121R'],
        count: 50,
    }

    const permissionLabelMockData = 'M131R'

    return (
        <div>
            <h1>Permission Card</h1>
            <h2>Card</h2>
            <PermissionCard permissionCard={permissionCardMockData} />
            <h2>Label</h2>
            <PermissionLabel permission={permissionLabelMockData} />
        </div>
    )
}

export default PermissionManagementDemoPage
