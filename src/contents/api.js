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
    },
    approval: {
        history_list: '/approval-history-list',
        history_detail: '/adminmgmt/api/v1/history/history/detail',
        history_temp_save_requester: '/adminmgmt/api/v1/request/draft-requester',
        history_temp_save_reviewer: '/adminmgmt/api/v1/request/draft-reviewer',
    },
}
