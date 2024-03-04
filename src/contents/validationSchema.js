import * as yup from 'yup'
import t from '#/common/libs/trans.js'

const HELPER_TEXT = {
    emailRequired: t('email_required', 'validation'),
    emailNotMatch: t('email_not_match', 'validation'),
    passwordRequired: t('password_required', 'validation'),
    passwordMinLength: t('password_min_length', 'validation'),
    passwordMaxLength: t('password_max_length', 'validation'),
    passwordNotIncludeUppercase: t('password_not_include_uppercase', 'validation'),
    passwordNotIncludeChar: t('password_not_include_char', 'validation'),
    passwordNotIncludeNumber: t('password_not_include_number', 'validation'),
    confirmPasswordNotMatch: t('confirm_password_not_match', 'validation'),
    emailCodeNotVerify: t('email_code_not_verify', 'validation'),
    emailCodeRequired: t('email_code_required', 'validation'),
    emailCodeTimeOut: t('email_code_timeout', 'validation'),
    emailCodeNotMatch: t('email_code_not_match', 'validation'),
    companyRequired: t('company_required', 'validation'),
    companyLength: t('company_length', 'validation'),
    teamRequired: t('team_required', 'validation'),
    teamLength: t('team_length', 'validation'),
    nameRequired: t('name_required', 'validation'),
    nameLength: t('name_length', 'validation'),
    otpRequired: t('otp_required', 'validation'),
    otpNotMatch: t('otp_not_match', 'validation'),
    searchCountry: t('country_select', 'validation'),
    searchLat: t('lat_input', 'validation'),
    searchLng: t('lon_input', 'validation'),
    ipRequired: t('ip_required', 'validation'),
    ipNotMatch: t('ip_not_match', 'validation'),
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
    email: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    password: yup.string().required(HELPER_TEXT.passwordRequired),
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
    company: yup.string().min(2, HELPER_TEXT.companyLength).required(HELPER_TEXT.companyRequired),
    team: yup.string().min(2, HELPER_TEXT.teamLength).required(HELPER_TEXT.teamRequired),
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
    otp: yup
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
    otp: yup
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
