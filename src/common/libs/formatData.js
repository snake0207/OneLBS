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
 * @param {object} formData 회원가입 form 데이터
 * @returns API body 데이터
 */
export const formatJoinData = (formData) => {
    if (formData.role !== '29')
        return {
            email: formData.email,
            password: encryptPasswordSHA256(formData.password),
            name: formData.name,
            company: formData.company,
            team: formData.team,
            role: parseInt(formData.role),
            terms: formData.terms,
        }

    const ipList = []
    for (let i = 0; i < 3; i++) {
        const address = formatIpAddress(
            formData[`ipAddress1_${i}`],
            formData[`ipAddress2_${i}`],
            formData[`ipAddress3_${i}`],
            formData[`ipAddress4_${i}`],
        )
        ipList.push({ address, desc: formData[`ipDescription_${i}`] })
    }

    return {
        email: formData.email,
        password: encryptPasswordSHA256(formData.password),
        name: formData.name,
        company: formData.company,
        team: formData.team,
        role: parseInt(formData.role),
        terms: formData.terms,
        ip: ipList.filter((item) => item.address !== ''),
    }
}

export const formatPermissionMenuData = (formData) => {
    const list = []
    formData.forEach((listItem) =>
        listItem.children.forEach((childrenItem) => list.push(childrenItem.permission)),
    )
    return list
}
