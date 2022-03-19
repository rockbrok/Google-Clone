import React from 'react'
import './style.css';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const languages = [
    {
        code: 'en',
        language_name: 'English (United States)',
    },
    {
        code: 'es',
        language_name: 'Español (Latinoamérica)',
    },
]

function PageLanguage() {
    const { t } = useTranslation()

    return (
        <Language />
    )
}

const Language = () => (
    <div class="search-language-container">
        <div class="search-language">
            {t('google_language')}&nbsp;

            {languages.map(({ code, language_name}) => (

            <a
              onClick={() => i18next.changeLanguage(code)}
            >
              {language_name}
            </a>
            ))}
        </div>
    </div>
);

export default PageLanguage