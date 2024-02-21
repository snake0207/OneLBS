export const API_PATH = {
    auth: {
        login: '/',
        join: '/userAuth/api/v1/user/register',
        confirm_eamil: '/userAuth/api/v1/user/confirm-email',
        verify_email: '/userAuth/api/v1/user/verify-email',
        get_ip: '/userAuth/api/v1/user/get-ip',
        refresh_token: '/userAuth/v1/user/refresh',
    },
    gpss: {
        reviewer: '/reviewer',
        approver: '/approver',
    },
}
