export const API_PATH = {
    auth: {
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
        // add
        // captcha: '/captcha',
        // authcode: '/authcode',
        dummyToken: '/api/dummy',
        smscode: '/api/sms',
        captcha: '/api/captcha',
        login: '/api/login',
        logout: '/api/logout',
    },
    system: {
        service_regist: '/api/system/service/regist',
        service_list: '/api/system/service/list',
        service_update: '/api/system/service/modify',
        service_code: '/api/system/service/check',
        ue_regist: '/api/system/ue/regist',
        ue_list: '/api/system/ue/list',
        ue_update: '/api/system/ue/modify',
        ue_delete: '/api-system-ue-delete',
        loc_trans: '/loc-trans',
        loc_view: '/loc-view',
    },
    user: {
        user_regist: '/api/users/regist', // 사용자정보 등록
        user_dup: '/api/users/check',
        user_list: '/api/users/list', // 사죵자정보 list
        user_update: '/api/users/modify', // 사용자정보 수정
        user_delete: '/api/users/delete', // 사용자정보 삭제
        permission_list: '/api/users/authority/list', // 권한정보 조회
        permission_update: '/api/users/authority/modify', // 권한설정 저장
        user_history: '/api/users/history', //
    },
    facility: {
        wifi_search: '/facility-wifi-search',
        wifi_regist: '/facility-wifi-regist',
        wifi_delete: '/facility-wifi-delete',
        wifi_update: '/facility-wifi-update',
        bts_search: '/facility-bts-search',
        sync_history: '/facility-sync-history',
    },
    service: {
        history_detail: '/api/service/history/detail',
        history: '/api/services/history',
        service_stat: '/api/service/stat',
        crowd_stat: '/api/services/crowd',
        trigger: '/api/services/trigger',
    },
}
