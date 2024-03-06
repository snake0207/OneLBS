import i18next from 'i18next'

const t = (field, ns = 'layout', label = {}) => {
    return i18next.t(field, {
        ns,
        ...label,
    })
}

export default t
