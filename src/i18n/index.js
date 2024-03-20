import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import kr from './kr'

export const translationsJson = {
    kr,
}

export const i18n = i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: translationsJson,
        fallbackLng: 'kr',
        interpolation: {
            escapeValue: false,
        },
    })
