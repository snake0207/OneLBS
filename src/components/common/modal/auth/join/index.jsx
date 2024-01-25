import { useFormik } from 'formik'
import TextInput from '#/components/common/input/TextInput'
import PasswordInput from '#/components/common/input/PasswordInput'
import { RadioInput } from '#/components/common/radio'
import { joinSchema } from '#/contents/validationSchema'
import { useModalActions } from '#/store/modalStore'
import { MODAL_TITLE } from '#/contents/constant'
import { Box, Button, Typography } from '@mui/material'
import FlexEndButtonContainer from '#/components/common/button/FlexEndButtonContainer'
import { usePostJoin } from '#/hooks/queries/auth'
import EmailSubmitInput from '#/components/common/modal/auth/join/EmailSubmitInput'
import VerifyCodeInput from '#/components/common/modal/auth/join/VerifyCodeInput'

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
    const { mutate: joinMutate } = usePostJoin()
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
            // joinMutate(form)
            openModal(MODAL_TITLE.privacyPolicy)
        },
    })

    return (
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            <Typography>
                <span style={{ color: 'red' }}>*</span> 필수 입력입니다.
            </Typography>
            <EmailSubmitInput name={'userMail'} formik={formik} />
            <VerifyCodeInput name={'emailverifyCode'} formik={formik} />
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
        </Box>
    )
}

export default JoinModal
