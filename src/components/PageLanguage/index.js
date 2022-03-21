import React from 'react'
import './style.css';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const changeLanguage = (language) => {
    i18next.changeLanguage(language);
};

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

                <a onClick={() => changeLanguage("en")}>
                {t('language_name')}
                </a>
                <a onClick={() => changeLanguage("es")}>
                {t('language_name')}
                </a>
        </div>
    </div>
);

export default PageLanguage