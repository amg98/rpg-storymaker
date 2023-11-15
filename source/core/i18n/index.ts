import "intl-pluralrules"
import type { Dictionary, Language } from "./types"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./languages/en"

const defaultLanguage: Language = "en"

export const availableLanguages = { en }

export const languages = Object.entries(availableLanguages).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [`${key}`]: {
            translation: value,
        },
    }),
    {} as {
        [id in Language]: Dictionary
    }
)

export const initI18N = () => {
    i18n.use(initReactI18next).init({
        resources: languages,
        lng: defaultLanguage,
    })
}
