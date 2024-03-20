import AuthStepper from '#/components/auth/AuthStepper'
import CertifiedForm from '#/components/auth/authForm/CertifiedForm'
import EmailAuthForm from '#/components/auth/authForm/EmailAuthForm'
import LoginForm from '#/components/auth/authForm/LoginForm'
import PasswordResetForm from '#/components/auth/authForm/PasswordResetForm'

const LoginDemoPage = () => {
    return (
        <div>
            <h1>Logins</h1>
            <h2>AuthStepper</h2>
            <AuthStepper />
            <h2>Form</h2>
            <div style={{ display: 'flex', gap: 30, height: 600 }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexShrink: 0,
                        width: 400,
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
                        width: 400,
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
                        width: 400,
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
                        width: 400,
                        height: '100%',
                    }}
                >
                    <EmailAuthForm />
                </div>
            </div>
        </div>
    )
}

export default LoginDemoPage
