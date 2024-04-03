import * as yup from 'yup'
import t from '#/common/libs/trans.js'

const HELPER_TEXT = {
    useridRequired: '아이디를 입력해 주세요.',
    useridMinLength: '8자 이상 입력해 주세요.',
    useridMaxLength: '12자 이하로 입력해 주세요.',
    emailRequired: '이메일을 입력해 주세요.',
    emailNotMatch: '이메일 형식이 맞지 않습니다.',
    passwordRequired: '비밀번호를 입력해 주세요.',
    passwordMinLength: '8자 이상 입력해 주세요.',
    passwordMaxLength: '16자 이하로 입력해 주세요.',
    passwordNotIncludeUppercase: '반드시 영문 대문자가 포함되어야 됩니다.',
    passwordNotIncludeChar: '반드시 특수문자가 포함되어야 됩니다.',
    passwordNotIncludeNumber: '반드시 숫자가 포함되어야 됩니다.',
    confirmPasswordNotMatch: '비밀번호가 일치하지 않습니다.',
    authCodeRequired: '휴대폰으로 발송된 인증코드를 입력해 주세요.',
    authCodeNotMatch: '6자리 숫자를 입력해 주세요.',
    captchaTextRequired: '화면에 보이는 보안문자의 정보를 입력해 주세요.',
    emailCodeNotVerify: '입력하신 인증코드가 유효하지 않습니다.',
    emailCodeRequired: '이메일 인증코드를 입력해 주세요.',
    emailCodeTimeOut: '입력 시간이 초과 하였습니다. 재 인증해 주세요.',
    emailCodeNotMatch: '6자리 숫자를 입력해 주세요.',
    companyRequired: '회사명을 입력해 주세요.',
    companyLength: '회사명은 한 글자 이상 입력해 주세요.',
    teamRequired: '팀명을 입력해 주세요.',
    teamLength: '팀명은 한 글자 이상 입력해 주세요.',
    nameRequired: '이름을 입력해 주세요.',
    nameLength: '한 글자 이상 입력해 주세요.',
    otpRequired: 'OTP를 입력해 주세요.',
    otpNotMatch: '6자리 숫자를 입력해 주세요.',
    searchCountry: '국가를 선택 해 주세요',
    searchLat: '위도를 입력해 주세요',
    searchLng: '경도를 입력해 주세요',
    ipRequired: 'IP 입력해 주세요.',
    ipNotMatch: 'IP 형식이 맞지 않습니다.',

    serviceNameRequired: '서비스명을 입력해 주세요.',
    serviceCodeRequired: '서비스코드를 입력해 주세요.',
    cpNameRequired: '고객사명을 입력해 주세요.',
    serviceProviderRequired: '서비스 제공사명을 입력해 주세요.',
    userCheckRequired: '가입자 등록확인을 체크해 주세요.',
    authCheckRequired: '상호인증확인을 체크해 주세요.',
    respTimeRequired: '희망응답시간을 입력해 주세요.',
    IntegerRequired: '정수만 입력해 주세요.',
    cellCheckRequired: '기지국측위 사용여부를 체크해 주세요.',
    gpsCheckRequired: '위성측위 사용여부를 체크해 주세요.',
    lppeCheckRequired: 'LPPe 사용여부를 체크해 주세요.',
    lppRespTimeRequired: 'LPP 희망응답시간을 입력해 주세요.',
    ksaCheckRequired: 'KSA 사용여부를 체크해 주세요.',
    versionRequired: 'KSA 버전정보를 입력해 주세요.',
    collectionCountRequired: 'KSA 수집횟수 정보를 입력해 주세요.',

    ueNameRequired: '모델명을 입력해 주세요.',
    ueCodeRequired: '코드명을 입력해 주세요.',
    remarksRequired: '비고란을 입력해 주세요.',
    suplVersionRequired: 'SUPL Ver정보 입력해 주세요.',
    ksaVersionRequired: 'KSA Ver정보 입력해 주세요.',

    phoneNumberRequired: '전화번호를 입력해 주세요.',
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
    userid: yup
        .string()
        .min(8, HELPER_TEXT.useridMinLength)
        .max(12, HELPER_TEXT.useridMaxLength)
        .required(HELPER_TEXT.useridRequired),
    password: yup.string().required(HELPER_TEXT.passwordRequired),
    authcode: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.authCodeNotMatch)
        .required(HELPER_TEXT.authCodeRequired),
    captchaText: yup.string().required(HELPER_TEXT.captchaTextRequired),
})

export const joinSchema = yup.object().shape({
    email: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    code: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.emailCodeNotMatch)
        .required(HELPER_TEXT.emailCodeRequired),
    password: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .required(HELPER_TEXT.passwordRequired),
    confirmPassword: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .oneOf([yup.ref('password'), null], HELPER_TEXT.confirmPasswordNotMatch)
        .required(HELPER_TEXT.passwordRequired),
    name: yup.string().min(2, HELPER_TEXT.nameLength).required(HELPER_TEXT.nameRequired),
    ipAddress1_0: yup.string().when(['role', 'isIpAutoAdd'], {
        is: (role, isIpAutoAdd) => role === '29' && !isIpAutoAdd,
        then: () =>
            yup
                .string()
                .matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch)
                .required(HELPER_TEXT.ipRequired),
    }),
    ipAddress2_0: yup.string().when(['role', 'isIpAutoAdd'], {
        is: (role, isIpAutoAdd) => role === '29' && !isIpAutoAdd,
        then: () =>
            yup
                .string()
                .matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch)
                .required(HELPER_TEXT.ipRequired),
    }),
    ipAddress3_0: yup.string().when(['role', 'isIpAutoAdd'], {
        is: (role, isIpAutoAdd) => role === '29' && !isIpAutoAdd,
        then: () =>
            yup
                .string()
                .matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch)
                .required(HELPER_TEXT.ipRequired),
    }),
    ipAddress4_0: yup.string().when(['role', 'isIpAutoAdd'], {
        is: (role, isIpAutoAdd) => role === '29' && !isIpAutoAdd,
        then: () =>
            yup
                .string()
                .matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch)
                .required(HELPER_TEXT.ipRequired),
    }),
    ipDescription_0: yup.string(),
    ipAddress1_1: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress2_1: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress3_1: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress4_1: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipDescription_1: yup.string(),
    ipAddress1_2: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress2_2: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress3_2: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipAddress4_2: yup.string().matches(REGEXP.ipNumber, HELPER_TEXT.ipNotMatch),
    ipDescription_2: yup.string(),
})

// 서비스 등록, 수정 화면에서 사용
// ~src/pages/system/ServicePage/forms
export const registServiceSchema = yup.object({
    serviceName: yup.string().required(HELPER_TEXT.serviceNameRequired),
    serviceCode: yup.string().required(HELPER_TEXT.serviceCodeRequired),
    cpName: yup.string().required(HELPER_TEXT.cpNameRequired),
    serviceProvider: yup.string().required(HELPER_TEXT.serviceProviderRequired),
    // userCheck: yup.string().required(HELPER_TEXT.userCheckRequired),
    // authCheck: yup.string().required(HELPER_TEXT.authCheckRequired),
    respTime: yup
        .string()
        .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
        .required(HELPER_TEXT.respTimeRequired),
    // cellCheck: yup.string().required(HELPER_TEXT.cellCheckRequired),
    // gpsCheck: yup.string().required(HELPER_TEXT.gpsCheckRequired),
    // lppeCheck: yup.string().required(HELPER_TEXT.lppeCheckRequired),
    lppRespTime: yup
        .string()
        .matches(/^\d+$/, HELPER_TEXT.IntegerRequired)
        .required(HELPER_TEXT.lppRespTimeRequired),
    // ksaCheck: yup.string().required(HELPER_TEXT.ksaCheckRequired),
    version: yup.string().required(HELPER_TEXT.versionRequired),
    collectionCount: yup
        .string()
        .matches(/^[1-9]$|10$/, `1부터 10까지의 ` + HELPER_TEXT.IntegerRequired)
        .required(HELPER_TEXT.collectionCountRequired),
})

// 단말모델 등록, 수정 화면에서 사용
// ~src/pages/system/UeModelPage/forms
export const registUESchema = yup.object({
    ueName: yup.string().required(HELPER_TEXT.ueNameRequired),
    ueCodes: yup.array(yup.string()).required(HELPER_TEXT.ueCodeRequired),
    remarks: yup.string().required(HELPER_TEXT.remarksRequired),
    suplVersion: yup.string().required(HELPER_TEXT.suplVersionRequired),
    ksaVersion: yup.string().required(HELPER_TEXT.ksaVersionRequired),
})

// 사용자관리 등록, 수정 화면에서 사용
// ~src/pages/user/ManagePage/forms
export const registUserSchema = yup.object({
    userid: yup
        .string()
        // .min(8, HELPER_TEXT.useridMinLength)
        .max(12, HELPER_TEXT.useridMaxLength)
        .required(HELPER_TEXT.useridRequired),
    company: yup.string().required(HELPER_TEXT.companyRequired),
    phoneNo: yup.string().matches(REGEXP.phoneNumber, HELPER_TEXT.phoneNumberRequired),
    ipAddr_1: yup.string().required(HELPER_TEXT.ipRequired),
})

export const otpSchema = yup.object({
    code: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.otpNotMatch)
        .required(HELPER_TEXT.otpRequired),
})

export const emailAuthSchema = yup.object({
    email: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    code: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.emailCodeNotMatch)
        .required(HELPER_TEXT.emailCodeRequired),
})

export const passwordResetSchema = yup.object({
    email: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    password: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .required(HELPER_TEXT.passwordRequired),
    confirmPassword: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .oneOf([yup.ref('password'), null], HELPER_TEXT.confirmPasswordNotMatch)
        .required(HELPER_TEXT.passwordRequired),
    code: yup
        .string()
        .matches(REGEXP.verifyCode, HELPER_TEXT.otpNotMatch)
        .required(HELPER_TEXT.otpRequired),
})

export const mapSearchSchema = yup.object({
    country: yup.array().of(yup.string()).min(1, HELPER_TEXT.searchCountry),
    lat: yup
        .string()
        .matches(REGEXP.coordinates, HELPER_TEXT.searchLat)
        .required(HELPER_TEXT.searchLat),
    lon: yup
        .string()
        .matches(REGEXP.coordinates, HELPER_TEXT.searchLng)
        .required(HELPER_TEXT.searchLng),
})

export const poiDetailSchema = yup.object({
    position: yup.object().shape({
        center: yup.object().shape({
            lat: yup.string().matches(REGEXP.coordinates, HELPER_TEXT.searchLat),
            lon: yup.string().matches(REGEXP.coordinates, HELPER_TEXT.searchLng),
        }),
        guide: yup.object().shape({
            lat: yup.string().matches(REGEXP.coordinates, HELPER_TEXT.searchLat),
            lon: yup.string().matches(REGEXP.coordinates, HELPER_TEXT.searchLng),
        }),
    }),
})

export const passwordChangeSchema = yup.object({
    currentPassword: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .required(HELPER_TEXT.passwordRequired),
    password: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .required(HELPER_TEXT.passwordRequired),
    confirmPassword: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(REGEXP.passwordIncludeChar, HELPER_TEXT.passwordNotIncludeChar)
        .matches(REGEXP.passwordIncludeUppercase, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(REGEXP.passwordIncludeNumber, HELPER_TEXT.passwordNotIncludeNumber)
        .oneOf([yup.ref('password'), null], HELPER_TEXT.confirmPasswordNotMatch)
        .required(HELPER_TEXT.passwordRequired),
})
