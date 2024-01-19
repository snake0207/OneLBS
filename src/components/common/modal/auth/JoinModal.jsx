import { useState } from 'react'
import { useFormik } from 'formik'
import { TextInput } from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import { RadioInput } from '#/components/common/radio'
import { joinSchema } from '#/contents/validationSchema'
import { useModalActions } from '#/store/modalStore'
import { MODAL_TITLE } from '#/contents/constant'
import { Button, Typography } from '@mui/material'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'

const JoinModal = () => {
    const dummyAuthorityArr = [
        { value: '0', label: '일반 사용자(guest)' },
        { value: '1', label: '일반 관리자(user)' },
        { value: '3', label: '승인 관리자(manager)' },
        { value: '4', label: '운영 관리자(admin)' },
    ]
    const dummyTermsArr = [
        { value: '1', label: '개인정보 수집이용동의' },
        { value: '0', label: '동의하지 않음' },
    ]
    const { openModal } = useModalActions()
    const [isSendMail, setIsSendMail] = useState(false)
    const formik = useFormik({
        initialValues: {
            userMail: '',
            confirmMail: '',
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
            openModal(MODAL_TITLE.privacyPolicy)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography>
                <span style={{ color: 'red' }}>*</span> 필수 입력입니다.
            </Typography>
            <TextInput
                label={'아이디(이메일)'}
                name={'userMail'}
                placeholder={'E-mail'}
                formik={formik}
                isRequired={true}
            >
                <TextInput.SubmitButton name={'인증메일전송'} onClick={() => setIsSendMail(true)} />
            </TextInput>
            <TextInput
                label={'메일인증코드'}
                name={'confirmMail'}
                placeholder={'6자리 숫자를 입력해 주세요.'}
                formik={formik}
                isRequired={true}
            >
                <TextInput.SubmitButton name={'인증하기'} onClick={null} />
                {isSendMail && <TextInput.InputTimer />}
            </TextInput>
            <PasswordInput
                label={'비밀번호'}
                name={'password'}
                placeholder={'Password'}
                inputRule={'6~16자 이내 영문대문자, 숫자, 특수문자가 반드시 포함되야 합니다.'}
                formik={formik}
                isRequired={true}
            />
            <PasswordInput
                label={'비밀번호 확인'}
                name={'confirmPassword'}
                placeholder={'Password'}
                formik={formik}
                isRequired={true}
            />
            <TextInput
                label={'이름'}
                name={'userName'}
                placeholder={'Name'}
                formik={formik}
                isRequired={true}
            />
            <TextInput label={'Company'} name={'userCompany'} formik={formik} isRequired={true} />
            <TextInput label={'팀명'} name={'userTeamName'} formik={formik} isRequired={true} />
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
            <FlexEndButtonContainer>
                <Button variant="contained" type="submit">
                    회원가입
                </Button>
            </FlexEndButtonContainer>
        </form>
    )
}

export default JoinModal
