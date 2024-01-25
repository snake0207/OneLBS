import * as yup from 'yup'

const HELPER_TEXT = {
    emailRequired: '이메일을 입력해 주세요.',
    emailNotMatch: '이메일을 형식이 맞지 않습니다.',
    passwordRequired: '비밀번호를 입력해 주세요.',
    passwordMinLength: '8자 이상 입력해 주세요.',
    passwordMaxLength: '16자 이하로 입력해 주세요.',
    passwordNotIncludeUppercase: '반드시 영문 대문자가 포함되어야 됩니다.',
    passwordNotIncludeChar: '반드시 특수문자가 포함되어야 됩니다.',
    passwordNotIncludeNumber: '반드시 숫자가 포함되어야 됩니다.',
    confirmPasswordNotMatch: '비밀번호가 일치하지 않습니다.',
    emailCodeNotVerify: '입력하신 인증코드가 유효하지 않습니다.',
    emailCodeRequired: '인증코드를 입력해 주세요.',
    emailCodeTimeOut: '입력 시간이 초과 하였습니다. 재 인증해 주세요.',
    emailCodeNotMatch: '6자리 숫자를 입력해 주세요.',
    companyRequired: '회사명을 입력해 주세요.',
    companyLength: '한 글자 이상 입력해 주세요.',
    teamRequired: '팀명을 입력해 주세요.',
    teamLength: '한 글자 이상 입력해 주세요.',
    nameRequired: '이름을 입력해 주세요.',
    nameLength: '한 글자 이상 입력해 주세요.',
    otpRequired: 'OTP를 입력해 주세요.',
    otpNotMatch: '6자리 숫자를 입력해 주세요.',
    searchCountry: '국가를 선택해주세요',
    searchLat: '위도를 입력 해 주세요',
    searchLng: '경도를 입력 해 주세요',
}

export const loginSchema = yup.object({
    userMail: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    password: yup.string().required(HELPER_TEXT.passwordRequired),
})

export const joinSchema = yup.object({
    userMail: yup.string().email(HELPER_TEXT.emailNotMatch).required(HELPER_TEXT.emailRequired),
    emailverifyCode: yup
        .string()
        .matches(/^\d{6}$/, HELPER_TEXT.emailCodeNotMatch)
        .required(HELPER_TEXT.emailCodeRequired),
    password: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(/(?=.*[!@#$%^&*()-_+=])/, HELPER_TEXT.passwordNotIncludeChar)
        .matches(/^(?=.*[A-Z])/, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(/^(?=.*\d)/, HELPER_TEXT.passwordNotIncludeNumber)
        .required(HELPER_TEXT.passwordRequired),
    confirmPassword: yup
        .string()
        .min(8, HELPER_TEXT.passwordMinLength)
        .max(16, HELPER_TEXT.passwordMaxLength)
        .matches(/(?=.*[!@#$%^&*()-_+=])/, HELPER_TEXT.passwordNotIncludeChar)
        .matches(/^(?=.*[A-Z])/, HELPER_TEXT.passwordNotIncludeUppercase)
        .matches(/^(?=.*\d)/, HELPER_TEXT.passwordNotIncludeNumber)
        .oneOf([yup.ref('password'), null], HELPER_TEXT.confirmPasswordNotMatch)
        .required(HELPER_TEXT.passwordRequired),
    userName: yup.string().min(2, HELPER_TEXT.nameLength).required(HELPER_TEXT.nameRequired),
    userCompany: yup
        .string()
        .min(2, HELPER_TEXT.companyLength)
        .required(HELPER_TEXT.companyRequired),
    userTeamName: yup.string().min(2, HELPER_TEXT.teamLength).required(HELPER_TEXT.teamRequired),
})

export const otpSchema = yup.object({
    otp: yup
        .string()
        .matches(/^\d{6}$/, HELPER_TEXT.otpNotMatch)
        .required(HELPER_TEXT.otpRequired),
})

export const mapSearchSchema = yup.object({
    country: yup.string().required(HELPER_TEXT.searchCountry),
    lat: yup
        .string()
        .matches(/^([-+]?\d{1,3}(?:\.\d{1,7})?)$/, HELPER_TEXT.searchLat)
        .required(HELPER_TEXT.searchLat),
    lng: yup
        .string()
        .matches(/^([-+]?\d{1,3}(?:\.\d{1,7})?)$/, HELPER_TEXT.searchLng)
        .required(HELPER_TEXT.searchLng),
})
