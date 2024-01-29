import { encryptPasswordSHA256 } from '#/common/libs/encode'

export const formatIpAddress = (addr1, addr2, addr3, addr4) => {
    if (addr1 === '' || addr2 === '' || addr3 === '' || addr4 === '') return ''
    return `${addr1}.${addr2}.${addr3}.${addr4}`
}

export const formatJoinData = (form) => {
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
        role: form.role,
        terms: form.terms,
        ip: ipList.filter((item) => item.address !== ''),
    }
}
