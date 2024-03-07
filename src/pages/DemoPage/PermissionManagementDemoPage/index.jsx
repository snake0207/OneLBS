import PermissionCard from '#/components/permission/PermissionCard'
import PermissionLabel from '#/components/permission/PermissionCard/PermissionLabel'

const PermissionManagementDemoPage = () => {
    const permissionCardMockData = {
        roleId: 29,
        roleName: 'ADMIN',
        permissionList: [
            { menu: '101', permissions: ['R'] },
            { menu: '111', permissions: ['R', 'U'] },
            { menu: '131', permissions: ['R'] },
            { menu: '141', permissions: ['R'] },
            { menu: '151', permissions: ['R'] },
            { menu: '152', permissions: ['R'] },
            { menu: '153', permissions: ['R'] },
            { menu: '154', permissions: ['R'] },
            { menu: '162', permissions: ['R'] },
            { menu: '161', permissions: ['A', 'D', 'R', 'U'] },
            { menu: '163', permissions: ['R'] },
            { menu: '171', permissions: ['R', 'U'] },
            { menu: '164', permissions: ['C', 'R', 'U'] },
            { menu: '181', permissions: ['R', 'U'] },
            { menu: '182', permissions: ['R', 'U'] },
            { menu: '183', permissions: ['R', 'U'] },
            { menu: '184', permissions: ['D', 'R', 'U'] },
            { menu: '121', permissions: ['R'] },
        ],
        userCount: 2,
    }

    const permissionLabelMockData = { menu: '161', permissions: ['A', 'D', 'R', 'U'] }

    return (
        <div>
            <h1>Permission Card</h1>
            <h2>Card</h2>
            <PermissionCard permissionCardData={permissionCardMockData} />
            <h2>Label</h2>
            <PermissionLabel permissionItem={permissionLabelMockData} />
        </div>
    )
}

export default PermissionManagementDemoPage
