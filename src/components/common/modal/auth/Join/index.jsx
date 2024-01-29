import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, DialogActions, DialogContent, IconButton, Typography } from '@mui/material'
import { usePostJoin } from '#/hooks/queries/auth'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import RadioInput from '#/components/common/Radio'
import { joinSchema } from '#/contents/validationSchema'
import EmailVerifyInput from '#/components/common/modal/auth/Join/EmailVerifyInput/index.jsx'
import VerifyCodeInput from '#/components/common/modal/auth/Join/VerifyCodeInput'
import JoinSuccessModal from '#/components/common/modal/auth/JoinSuccess'
import PrivacyPolicyModal from '#/components/common/modal/auth/PrivacyPolicy'
import Info from '@mui/icons-material/Info'
import IpInput from '#/components/common/input/IpInput'
import { formatJoinData } from '#/common/libs/formatData'

const JoinModal = () => {
    const dummyAuthorityArr = [
        { value: 'GUEST', label: '일반 사용자' },
        { value: 'USER', label: '요청자' },
        { value: 'REVIEWER', label: '검토자' },
        { value: 'MANAGER', label: '승인자' },
        { value: 'ADMIN', label: '운영자' },
    ]
    const dummyTermsArr = [
        { value: 'Y', label: '개인정보 수집이용동의' },
        { value: 'N', label: '동의하지 않음' },
    ]
    const { mutate } = usePostJoin()
    const [isJoinSuccess, setIsJoinSuccess] = useState(false)
    const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false)
    const [ipInputCount, setIpInputCount] = useState(1)

    const formik = useFormik({
        initialValues: {
            email: '',
            confirmEmailCode: '',
            password: '',
            confirmPassword: '',
            name: '',
            company: '',
            team: '',
            role: 'GUEST',
            terms: 'N',
            ipAddress1_0: '',
            ipAddress2_0: '',
            ipAddress3_0: '',
            ipAddress4_0: '',
            ipDescription_0: '',
            ipAddress1_1: '',
            ipAddress2_1: '',
            ipAddress3_1: '',
            ipAddress4_1: '',
            ipDescription_1: '',
            ipAddress1_2: '',
            ipAddress2_2: '',
            ipAddress3_2: '',
            ipAddress4_2: '',
            ipDescription_2: '',
        },
        validationSchema: joinSchema,
        onSubmit: (form) => {
            console.log(form)
            const data = formatJoinData(form)
            console.log(data)
            setIsJoinSuccess(true)
            // mutate(form)
        },
    })

    const handleClickAddIPInput = () => {
        setIpInputCount((prev) => prev + 1)
    }

    return (
        <>
            <DialogContent dividers>
                <Typography>
                    <span style={{ color: 'red' }}>*</span>필수 입력입니다.
                </Typography>
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>이메일
                </Typography>
                <EmailVerifyInput name={'email'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>메일인증코드
                </Typography>
                <VerifyCodeInput name={'confirmEmailCode'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>비밀번호
                </Typography>
                <PasswordInput
                    name={'password'}
                    placeholder={'비밀번호를 입력하세요'}
                    inputRule={'6~16자 이내 영문대문자, 숫자, 특수문자가 반드시 포함되야 합니다.'}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>비밀번호 확인
                </Typography>
                <PasswordInput
                    name={'confirmPassword'}
                    placeholder={'비밀번호를 다시 한번 입력하세요'}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>이름
                </Typography>
                <TextInput name={'name'} placeholder={'이름을 입력하세요'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>회사명
                </Typography>
                <TextInput name={'company'} placeholder={'회사명을 입력하세요'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>팀명
                </Typography>
                <TextInput name={'team'} placeholder={'팀명을 입력하세요'} formik={formik} />
                {formik.values.authority === '0' && (
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h6">
                                <span style={{ color: 'red' }}>*</span>IP
                            </Typography>
                            <IconButton
                                onClick={handleClickAddIPInput}
                                disabled={3 === ipInputCount}
                            >
                                <Info />
                            </IconButton>
                        </Box>
                        <Typography variant="body2">
                            <span style={{ color: 'red' }}>*</span>IP는 최대3개까지 입력 가능
                            합니다.
                        </Typography>
                        {Array.from({ length: ipInputCount }).map((_, idx) => (
                            <IpInput
                                key={idx}
                                ipName1={`ipAddress1_${idx}`}
                                ipName2={`ipAddress2_${idx}`}
                                ipName3={`ipAddress3_${idx}`}
                                ipName4={`ipAddress4_${idx}`}
                                ipDescription={`ipDescription_${idx}`}
                                formik={formik}
                            />
                        ))}
                    </>
                )}
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>권한
                </Typography>
                <RadioInput radioList={dummyAuthorityArr} name={'role'} formik={formik} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        <span style={{ color: 'red' }}>*</span>약관동의
                    </Typography>
                    <Button variant="contained" onClick={() => setIsOpenPrivacyPolicy(true)}>
                        자세히 보기
                    </Button>
                </Box>
                <RadioInput
                    radioList={dummyTermsArr}
                    name={'terms'}
                    formik={formik}
                    isDisabled={true}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={formik.handleSubmit} type="submit">
                    회원가입
                </Button>
            </DialogActions>
            <JoinSuccessModal isOpen={isJoinSuccess} onClose={() => setIsJoinSuccess(false)} />
            <PrivacyPolicyModal
                isOpen={isOpenPrivacyPolicy}
                onClose={() => setIsOpenPrivacyPolicy(false)}
            />
        </>
    )
}

export default JoinModal
