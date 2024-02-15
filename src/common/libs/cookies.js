import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const getCookieExpireDate = (duration) => {
    return new Date(Date.now() + 1000 * 60 * duration)
}

export const cookieNames = {
    refreshToken: 'refresh-token',
}

export const RefreshTokenCookie = {
    set: (values) => {
        const expireDate = getCookieExpireDate(1)
        console.log(expireDate)
        cookies.set(cookieNames.refreshToken, values, {
            sameSite: 'strict',
            path: '/',
            expires: expireDate,
            // secure: true,
            // httpOnly: true,
        })
    },
    get: () => cookies.get(cookieNames.refreshToken),
    remove: () => {
        cookies.remove(cookieNames.refreshToken, {
            sameSite: 'strict',
            path: '/',
            secure: true,
        })
    },
}
