import PermissionCard from '#/components/permission/PermissionCard'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'

const PermissionManagementDemoPage = () => {
    const permissionCardMockData = {
        roleId: 29,
        roleName: 'ADMIN',
        permissions: [
            'M101R',
            'M111R',
            'M111U',
            'M131R',
            'M141R',
            'M151R',
            'M152R',
            'M153R',
            'M154R',
            'M162R',
            'M161A',
            'M161R',
            'M161U',
            'M161D',
            'M163R',
            'M171R',
            'M171U',
            'M164C',
            'M164R',
            'M164U',
            'M181R',
            'M181U',
            'M182R',
            'M182U',
            'M183R',
            'M183U',
            'M184R',
            'M184U',
            'M184D',
            'M121R',
        ],
        userCount: 2,
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
