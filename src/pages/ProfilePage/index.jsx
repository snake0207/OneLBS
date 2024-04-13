import ProfileForm from '#/components/profile/ProfileForm'

import { BrowserView,  } from 'react-device-detect'

function ProfilePage() {
    return (
        <>
            <BrowserView>
                <ProfileForm />
            </BrowserView>
        </>
    )
}

export default ProfilePage
