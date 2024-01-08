import LoginForm from './form/LoginForm'
import CertifiedForm from './form/CertifiedForm'
import SlideContainer from './slide'
import { useLoginProcessState } from '#/store/loginProcessStore'
import { LOGIN_PROCESS } from '#/contents/constant'
import * as S from './styled'

const LoginContainer = () => {
    const loginProcess = useLoginProcessState()
    return (
        <S.Layout>
            <S.Container>
                <SlideContainer />
                <S.LoginContainer>
                    <div>
                        <S.H2>로그인</S.H2>
                        <S.Hr />
                    </div>
                    <S.ContentContainer>
                        <S.ProcessContainer>
                            <S.Process isProcess={loginProcess === LOGIN_PROCESS.INFOMATION}>
                                <span>1</span>
                                <S.MediumText>정보입력</S.MediumText>
                            </S.Process>
                            <S.Process isProcess={loginProcess === LOGIN_PROCESS.CERTIFIED}>
                                <span>2</span>
                                <S.MediumText>인증</S.MediumText>
                            </S.Process>
                            <S.Process isProcess={loginProcess === LOGIN_PROCESS.LOGIN}>
                                <span>3</span>
                                <S.MediumText>로그인</S.MediumText>
                            </S.Process>
                        </S.ProcessContainer>
                        {loginProcess === LOGIN_PROCESS.INFOMATION && <LoginForm />}
                        {loginProcess === LOGIN_PROCESS.CERTIFIED && <CertifiedForm />}
                    </S.ContentContainer>
                </S.LoginContainer>
            </S.Container>
        </S.Layout>
    )
}

export default LoginContainer
