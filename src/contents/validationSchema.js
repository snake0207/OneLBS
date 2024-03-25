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
}

const REGEXP = {
    ipNumber: /^\d{1,3}$/,
    verifyCode: /^\d{6}$/, // 6자리 숫자만
    passwordIncludeChar: /^(?=.*[!@#$%^&*()\-_+=]).+$/, // 숫자키 특수문자 1개 이상 포함
    passwordIncludeNumber: /^(?=.*\d).*$/, // 숫자 1개 이상 포함
    passwordIncludeUppercase: /^(?=.*[A-Z]).*$/, // 영문 대문자 1개 이상 포함
    coordinates: /^([-+]?\d{1,3}(?:\.\d{1,7})?)$/, // 위경도
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
