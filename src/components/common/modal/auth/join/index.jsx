import { useState } from 'react'
import { useFormik } from 'formik'
import { Button, DialogActions, DialogContent, Typography } from '@mui/material'
import { usePostJoin } from '#/hooks/queries/auth'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import { RadioInput } from '#/components/common/radio'
import { joinSchema } from '#/contents/validationSchema'
import EmailSubmitInput from '#/components/common/modal/auth/join/EmailSubmitInput'
import VerifyCodeInput from '#/components/common/modal/auth/join/VerifyCodeInput'
import JoinSuccessModal from '#/components/common/modal/auth/join/JoinSuccessModal'

const JoinModal = () => {
    const dummyAuthorityArr = [
        { value: '0', label: '일반 사용자' },
        { value: '1', label: '일반 관리자' },
        { value: '3', label: '승인 관리자' },
        { value: '4', label: '운영 관리자' },
    ]
    const dummyTermsArr = [
        { value: '1', label: '개인정보 수집이용동의' },
        { value: '0', label: '동의하지 않음' },
    ]
    const { mutate } = usePostJoin()
    const [isJoinSuccess, setIsJoinSuccess] = useState(false)
    const formik = useFormik({
        initialValues: {
            userMail: '',
            emailverifyCode: '',
            password: '',
            confirmPassword: '',
            userName: '',
            userCompany: '',
            userTeamName: '',
            authority: '0',
            isTermsAgreed: '1',
        },
        validationSchema: joinSchema,
        onSubmit: (form) => {
            console.log(form)
            setIsJoinSuccess(true)
            // mutate(form)
        },
    })

    return (
        <>
            <DialogContent dividers>
                <Typography>
                    <span style={{ color: 'red' }}>*</span>필수 입력입니다.
                </Typography>
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>이메일
                </Typography>
                <EmailSubmitInput name={'userMail'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>메일인증코드
                </Typography>
                <VerifyCodeInput name={'emailverifyCode'} formik={formik} />
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
                <TextInput name={'userName'} placeholder={'이름을 입력하세요'} formik={formik} />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>회사명
                </Typography>
                <TextInput
                    name={'userCompany'}
                    placeholder={'회사명을 입력하세요'}
                    formik={formik}
                />
                <Typography variant="h6">
                    <span style={{ color: 'red' }}>*</span>팀명
                </Typography>
                <TextInput
                    name={'userTeamName'}
                    placeholder={'팀명을 입력하세요'}
                    formik={formik}
                />
                <RadioInput
                    items={dummyAuthorityArr}
                    name={'authority'}
                    label={'권한'}
                    formik={formik}
                    isRequired={true}
                />
                <RadioInput
                    items={dummyTermsArr}
                    name={'isTermsAgreed'}
                    label={'약관동의'}
                    formik={formik}
                    isRequired={true}
                >
                    <RadioInput.RadioButton name={'자세히 보기'} onClick={null} />
                </RadioInput>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={formik.handleSubmit} type="submit">
                    회원가입
                </Button>
            </DialogActions>
            <JoinSuccessModal isOpen={isJoinSuccess} onClose={() => setIsJoinSuccess(false)} />
        </>
    )
}

export default JoinModal
