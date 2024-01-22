import * as yup from 'yup'

const HELPER_TEXT = {
    loginMail: '아이디(이메일) 입력해 주세요. 아이디(이메일)가 맞지 않습니다.',
    loginPassword: '비밀번호를 입력해 주세요. 비밀번호가 맞지 않습니다.',
    joinMail: '이메일을 입력해 주세요.',
    joinConfirmMail: '인증코드를 입력해 주세요. 인증코드가 맞지 않습니다.',
    joinPassword: '비밀번호를 입력해 주세요. 비밀번호 규칙에 맞지 않습니다.',
    joinConfirmPassword: '비밀번호를 입력해 주세요. 비밀번호가 맞지 않습니다.',
    joinUserName: '이름을 입력해 주세요.',
    certifiedOtp: 'OTP 숫자를 입력해 주세요. OTP 숫자가 맞지 않습니다.',
    searchCountry: '국가를 선택해주세요',
    searchLat: '위도를 입력 해 주세요',
    searchLng: '경도를 입력 해 주세요',
}

export const loginSchema = yup.object({
    userMail: yup
        .string(HELPER_TEXT.loginMail)
        .email(HELPER_TEXT.loginMail)
        .required(HELPER_TEXT.loginMail),
    password: yup.string(HELPER_TEXT.loginPassword).required(HELPER_TEXT.loginPassword),
})

export const joinSchema = yup.object({
    userMail: yup
        .string(HELPER_TEXT.joinMail)
        .email(HELPER_TEXT.joinMail)
        .required(HELPER_TEXT.joinMail),
    confirmMail: yup
        .string(HELPER_TEXT.joinConfirmMail)
        .min(6, HELPER_TEXT.joinConfirmMail)
        .max(6, HELPER_TEXT.joinConfirmMail)
        .required(HELPER_TEXT.joinConfirmMail),
    password: yup
        .string(HELPER_TEXT.joinPassword)
        .min(6, HELPER_TEXT.joinPassword)
        .max(16, HELPER_TEXT.joinPassword)
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])/, HELPER_TEXT.joinPassword)
        .required(HELPER_TEXT.joinPassword),
    confirmPassword: yup
        .string(HELPER_TEXT.joinConfirmPassword)
        .oneOf([yup.ref('password'), null], HELPER_TEXT.joinConfirmPassword)
        .required(HELPER_TEXT.joinConfirmPassword),
    userName: yup.string(HELPER_TEXT.joinUserName).required(HELPER_TEXT.joinUserName),
    userCompany: yup.string('').required('필수 입력입니다.'),
    userTeamName: yup.string('').required('필수 입력입니다.'),
})

export const otpSchema = yup.object({
    otp: yup
        .string(HELPER_TEXT.certifiedOtp)
        .min(6, HELPER_TEXT.certifiedOtp)
        .max(6, HELPER_TEXT.certifiedOtp)
        .required(HELPER_TEXT.certifiedOtp),
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
