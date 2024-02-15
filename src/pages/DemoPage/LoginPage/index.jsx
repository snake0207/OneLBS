import AuthStepper from '#/components/auth/AuthStepper'
import CarouselOverview from '#/components/auth/CarouselOverview'
import CertifiedForm from '#/components/auth/authForm/CertifiedForm'
import LoginForm from '#/components/auth/authForm/LoginForm'
import PasswordResetForm from '#/components/auth/authForm/PasswordResetForm'
import EmailAuth from '#/components/auth/authForm/EmailAuth'

const LoginDemoPage = () => {
    const dummyImageList = [
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 1',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 2',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 3',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
    ]
    return (
        <div>
            <h1>Logins</h1>
            <h2>CarouselOverview</h2>
            <div style={{ width: 600 }}>
                <CarouselOverview dummyImageList={dummyImageList} />
            </div>
            <h2>AuthStepper</h2>
            <AuthStepper />
            <h2>Form</h2>
            <div style={{ display: 'flex', gap: 30, height: 600 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        width: 600,
                        height: '100%',
                    }}
                >
                    <LoginForm />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        width: 600,
                        height: '100%',
                    }}
                >
                    <CertifiedForm />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        width: 600,
                        height: '100%',
                    }}
                >
                    <PasswordResetForm />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        width: 600,
                        height: '100%',
                    }}
                >
                    <EmailAuth />
                </div>
            </div>
        </div>
    )
}

export default LoginDemoPage
