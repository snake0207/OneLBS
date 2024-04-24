import * as yup from 'yup'

const HELPER_TEXT = {
    userIdRequired: '아이디를 입력해 주세요.',
    userIdMinLength: '8자 이상 입력해 주세요.',
    userIdMaxLength: '12자 이하로 입력해 주세요.',
    passwordRequired: '비밀번호를 입력해 주세요.',
    passwordMinLength: '8자 이상 입력해 주세요.',
    passwordMaxLength: '16자 이하로 입력해 주세요.',
    passwordNotIncludeUppercase: '반드시 영문 대문자가 포함되어야 됩니다.',
    passwordNotIncludeChar: '반드시 특수문자가 포함되어야 됩니다.',
    passwordNotIncludeNumber: '반드시 숫자가 포함되어야 됩니다.',
    confirmPasswordNotMatch: '비밀번호가 일치하지 않습니다.',
    certNumRequired: '휴대폰으로 발송된 인증코드를 입력해 주세요.',
    certNumNotMatch: '6자리 숫자를 입력해 주세요.',
    captchaRequired: '화면에 보이는 보안문자의 정보를 입력해 주세요.',
    cropNameRequired: '회사명을 입력해 주세요.',
    cropNameLength: '회사명은 한 글자 이상 입력해 주세요.',
    nameRequired: '이름을 입력해 주세요.',
    nameLength: '한 글자 이상 입력해 주세요.',
    searchLat: '위도를 입력해 주세요',
    searchLng: '경도를 입력해 주세요',
    ipRequired: 'IP 입력해 주세요.',
    ipNotMatch: 'IP 형식이 맞지 않습니다.',

    serviceNameRequired: '서비스명을 입력해 주세요.',
    serviceCodeRequired: '서비스코드를 입력해 주세요.',
    customerNameRequired: '고객사명을 입력해 주세요.',
    cpNameRequired: '서비스 제공사명을 입력해 주세요.',
    requiredTimeoutRequired: '희망응답시간을 입력해 주세요.',
    IntegerRequired: '정수만 입력해 주세요.',
    lppRespTimeRequired: 'LPP 희망응답시간을 입력해 주세요.',
    verRequired: '버전정보를 입력해 주세요.',
    countRequired: '수집횟수를 입력해 주세요.',

    modelCodeRequired: '모델코드명을 입력해 주세요.',
    noteRequired: '비고란을 입력해 주세요.',
    suplVersionRequired: 'SUPL Ver정보 입력해 주세요.',
    ksaVersionRequired: 'KSA Ver정보 입력해 주세요.',

    phoneNumberNotMatch: '10~11자리 숫자를 입력해 주세요.',
    phoneNumberRequired: '전화번호를 입력해 주세요.',
    smsContentRequired: 'SMS 발송문구를 입력해 주세요.',
}

const REGEXP = {
    ipNumber: /^\d{1,3}$/,
    verifyCode: /^\d{6}$/, // 6자리 숫자만
    passwordIncludeChar: /^(?=.*[!@#$%^&*()\-_+=]).+$/, // 숫자키 특수문자 1개 이상 포함
    passwordIncludeNumber: /^(?=.*\d).*$/, // 숫자 1개 이상 포함
    passwordIncludeUppercase: /^(?=.*[A-Z]).*$/, // 영문 대문자 1개 이상 포함
    coordinates: /^([-+]?\d{1,3}(?:\.\d{1,7})?)$/, // 위경도
    phoneNumber: /^\d{10}$|^\d{11}$/,
}

export const loginSchema = yup.object({
    userId: yup
        .string()
        .min(8, HELPER_TEXT.useridMinLength)
        .max(12, HELPER_TEXT.useridMaxLength)
        .required(HELPER_TEXT.useridRequired),
    password: yup.string().required(HELPER_TEXT.passwordRequired),
    certNum: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.certNumNotMatch)
        .required(HELPER_TEXT.certNumRequired),
    captcha: yup.string().required(HELPER_TEXT.captchaRequired),
})

// 서비스 등록, 수정 화면에서 사용
// ~src/pages/system/ServicePage/forms
export const registServiceSchema = yup.object({
    serviceName: yup.string().required(HELPER_TEXT.serviceNameRequired),
    serviceCode: yup.string().required(HELPER_TEXT.serviceCodeRequired),
    customerName: yup.string().required(HELPER_TEXT.customerNameRequired),
    cpName: yup.string().required(HELPER_TEXT.cpNameRequired),
    smsCallbackNumber: yup
        .string()
        .matches(REGEXP.phoneNumber, HELPER_TEXT.phoneNumberNotMatch)
        .required(HELPER_TEXT.phoneNumberRequired),
    smsContent: yup.string().required(HELPER_TEXT.smsContentRequired),
    posConfig: yup.object({
        requiredTimeout: yup
            .string()
            .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
            .required(HELPER_TEXT.requiredTimeoutRequired),
        gnssConfig: yup.object({
            lppRespTime: yup
                .string()
                .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
                .required(HELPER_TEXT.lppRespTimeRequired),
        }),
        ksaConfig: yup.object({
            ver: yup
                .string()
                .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
                .required(HELPER_TEXT.verRequired),
            count: yup
                .string()
                .matches(/^[1-9]$|10$/, `1부터 10까지의 ` + HELPER_TEXT.IntegerRequired)
                .required(HELPER_TEXT.countRequired),
        }),
    }),
})

// 단말모델 등록, 수정 화면에서 사용
// ~src/pages/system/UeModelPage/forms
export const registUESchema = yup.object({
    modelCode: yup.array(yup.string()).required(HELPER_TEXT.modelCodeRequired),
    note: yup.string().required(HELPER_TEXT.noteRequired),
    posConfig: yup.object({
        gnssConfig: yup.object({
            suplVer: yup.string().required(HELPER_TEXT.verRequired),
        }),
        ksaConfig: yup.object({
            ver: yup
                .string()
                .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
                .required(HELPER_TEXT.verRequired),
        }),
    }),
})

export const deleteUpdateUESchema = yup.object({
    modelCode: yup.string().required(HELPER_TEXT.modelCodeRequired),
    note: yup.string().required(HELPER_TEXT.noteRequired),
    posConfig: yup.object({
        gnssConfig: yup.object({
            suplVer: yup.string().required(HELPER_TEXT.verRequired),
        }),
        ksaConfig: yup.object({
            ver: yup
                .string()
                .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
                .required(HELPER_TEXT.verRequired),
        }),
    }),
})

// 사용자관리 등록, 수정 화면에서 사용
// ~src/pages/user/ManagePage/forms
export const registUserSchema = yup.object({
    userId: yup
        .string()
        // .min(8, HELPER_TEXT.useridMinLength)
        .max(12, HELPER_TEXT.userIdMaxLength)
        .required(HELPER_TEXT.userIdRequired),
    cropName: yup.string().required(HELPER_TEXT.cropNameRequired),
    ipAddr_1: yup.string().required(HELPER_TEXT.ipRequired),
})
