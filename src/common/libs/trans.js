import i18next from 'i18next'

const t = (field, ns = 'layout') => {
    return i18next.t(field, {
        ns,
        label: '${label}',
    })
}

export default t
