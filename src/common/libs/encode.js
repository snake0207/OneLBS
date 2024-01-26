import { SHA256 } from 'crypto-js'

export const encryptPasswordSHA256 = (password) => {
    return SHA256(password).toString()
}

export const encryptPasswordBase64 = (password) => {
    const date = new Date().getTime()
    return btoa(`${password}/${date}`)
}
