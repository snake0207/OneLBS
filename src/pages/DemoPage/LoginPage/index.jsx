import AuthStepper from '#/components/auth/AuthStepper'
import CarouselOverview from '#/components/auth/CarouselOverview'
import CertifiedForm from '#/components/auth/authForm/CertifiedForm'
import LoginForm from '#/components/auth/authForm/LoginForm'
import PasswordResetForm from '#/components/auth/authForm/PasswordResetForm'

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
            <div style={{ display: 'flex', gap: 30, height: 630 }}>
                <div style={{ flexShrink: 0, width: 600 }}>
                    <LoginForm />
                </div>
                <div style={{ flexShrink: 0, width: 600 }}>
                    <CertifiedForm />
                </div>
                <div style={{ flexShrink: 0, width: 600 }}>
                    <PasswordResetForm />
                </div>
            </div>
        </div>
    )
}

export default LoginDemoPage
