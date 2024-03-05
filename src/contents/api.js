export const API_PATH = {
    auth: {
        login: '/user-auth/api/v1/user/login',
        join: '/user-auth/api/v1/user/register',
        confirm_eamil: '/user-auth/api/v1/user/confirm-email',
        verify_email: '/user-auth/api/v1/user/verify-email',
        get_ip: '/user-auth/api/v1/user/get-ip',
        renew_token: '/user-auth/api/v1/user/renew-token',
        verify_otp: '/user-auth/api/v1/user/verify-otp',
    },
    gpss: {
        reviewer: '/reviewer',
        approver: '/approver',
    },
}
