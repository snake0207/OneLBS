export const API_PATH = {
    auth: {
        login: '/user-auth/api/v1/user/login',
        join: '/user-auth/api/v1/user/register',
        confirm_eamil: '/user-auth/api/v1/user/confirm-email',
        verify_email: '/user-auth/api/v1/user/verify-email',
        get_ip: '/user-auth/api/v1/user/get-ip',
        renew_token: '/user-auth/api/v1/user/renew-token',
        verify_otp: '/user-auth/api/v1/user/verify-otp',
        password_reset: '/user-auth/api/v1/user/password/reset',
        logout: '/user-auth/api/v1/user/logout',
        password_change: 'user-auth/api/v1/user/password/change',
        defer_change: 'user-auth/api/v1/user/password/defer-change',
    },
    gpss: {
        reviewer: '/reviewer',
        approver: '/approver',
        gpss_searh: '/adminmgmt/api/v1/search/unified-search',
        gpss_detail: '/adminmgmt/api/v1/search/detail-search',
        gpss_suggestion: '/adminmgmt/api/v1/search/suggest',
    },
    approval: {
        history_list: '/approval-history-list',
    },
    permission: {
        role_menu_permission: '/user-auth/api/v1/auth/role-menu-permission',
        role_change_user_list: '/user-auth/api/v1/auth/role-change-user-list',
        target_userId_role: (targetUserId) => `/user-auth/api/v1/auth/${targetUserId}/role`,
        get_role_menu: 'user-auth/api/v1/auth/get-role-menu',
    },
}
