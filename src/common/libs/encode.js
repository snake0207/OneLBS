import { SHA256 } from 'crypto-js'

export const encryptPasswordSHA256 = (password) => {
    return SHA256(password).toString()
}

export const encryptPasswordSHA256WithTime = (password) => {
    const date = new Date().getTime()
    password = SHA256(`${password}/${date}`)
    return { password, date }
}

export const encryptPasswordBase64WithTime = ({ password, date }) => {
    return btoa(`${password}/${date}`)
}
