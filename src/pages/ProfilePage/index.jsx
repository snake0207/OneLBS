import MobileProfileForm from '#/components/profile/MobileProfileForm'
import ProfileForm from '#/components/profile/ProfileForm'

import { BrowserView, MobileView } from 'react-device-detect'

function ProfilePage() {
    return (
        <>
            <BrowserView>
                <ProfileForm />
            </BrowserView>
            <MobileView>
                <MobileProfileForm />
            </MobileView>
        </>
    )
}

export default ProfilePage
