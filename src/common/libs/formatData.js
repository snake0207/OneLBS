import { encryptPasswordSHA256 } from '#/common/libs/encode'

/**
 * IP 형식으로 포멧팅 해주는 함수
 * @param {string} addr1 IP
 * @param {string} addr2 IP
 * @param {string} addr3 IP
 * @param {string} addr4 IP
 * @returns ex) 123.123.123.123
 */
export const formatIpAddress = (addr1, addr2, addr3, addr4) => {
    if (addr1 === '' || addr2 === '' || addr3 === '' || addr4 === '') return ''
    return `${addr1}.${addr2}.${addr3}.${addr4}`
}

/**
 * 회원가입 데이터 가공 함수
 * @param {object} form 회원가입 form 데이터
 * @returns API body 데이터
 */
export const formatJoinData = (form) => {
    if (form.role === 25 || form.role === 26)
        return {
            email: form.email,
            password: encryptPasswordSHA256(form.password),
            name: form.name,
            company: form.company,
            team: form.team,
            role: parseInt(form.role),
            terms: form.terms,
        }

    const ipList = []
    for (let i = 0; i < 3; i++) {
        const address = formatIpAddress(
            form[`ipAddress1_${i}`],
            form[`ipAddress2_${i}`],
            form[`ipAddress3_${i}`],
            form[`ipAddress4_${i}`],
        )
        ipList.push({ address, desc: form[`ipDescription_${i}`] })
    }

    return {
        email: form.email,
        password: encryptPasswordSHA256(form.password),
        name: form.name,
        company: form.company,
        team: form.team,
        role: parseInt(form.role),
        terms: form.terms,
        ip: ipList.filter((item) => item.address !== ''),
    }
}
