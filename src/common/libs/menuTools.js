const mobileMenuIds = [0, 120, 130, 140]

export const userMenuItem = {
    menuId: 0,
    name: 'My Page',
    menuOrder: 1,
    label: 'mypage',
    children: [
        {
            menuId: 1,
            name: 'My Page',
            menuOrder: 1,
            menuUrl: '/mypage/profile',
            iconName: null,
            label: 'profile',
        },
    ],
}

export const filterMobileMenuItems = (menuItems) => {
    const newMenuItems = [userMenuItem, ...menuItems]
    return newMenuItems.filter((item) => mobileMenuIds.includes(item.menuId))
}
