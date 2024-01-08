import { useFormik } from 'formik'
import { TextInput } from '#/components/common/input/TextInput'
import * as S from '../styled'
import { otpSchema } from '#/contents/validationSchema'

const CertifiedForm = () => {
    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: otpSchema,
        onSubmit: (form) => {
            console.log(form)
        },
    })
    return (
        <S.FormContainer onSubmit={formik.handleSubmit}>
            <S.MediumText>인증(OTP) 등록 안내</S.MediumText>
            <S.OtpContainer>
                <S.QR />
                <S.OtpExplan>
                    <S.LargeText>
                        구글 OTP 앱에서 QR코드를 스캔한 후 발급받은 6자리 숫자를 입력해 주세요.
                    </S.LargeText>
                    <a href="#">등록방법</a>
                </S.OtpExplan>
            </S.OtpContainer>
            <TextInput
                label={'OTP'}
                name={'otp'}
                placeholder={'6자리 숫자를 입력해 주세요.'}
                formik={formik}
            />
            <S.Actions>
                <S.Button type="submit">인증</S.Button>
            </S.Actions>
        </S.FormContainer>
    )
}

export default CertifiedForm
