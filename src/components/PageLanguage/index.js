import React from 'react'
import './style.css';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';

const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};

function PageLanguage() {
    const { t } = useTranslation()

    return (
        <Language />
    )
}

const Language = () => (
    <div className="search-language-container">
        <div className="search-language">
            {t('google_language')}&nbsp;
            <button onClick={() => changeLanguage("es" || "en")}>
                {t('language_name')}
            </button>
        </div>
    </div>
);

export default PageLanguage