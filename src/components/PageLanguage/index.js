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

const change = () => {
 arr = ["Español (Latinoamérica)", "English (United States)"];
 index = 0;
    $('#next').click(function(){
      $('#quote').html(arr[index])
      index = (index + 1) % arr.length;
    }),
};

const Language = () => (
    <div class="search-language-container">
        <div class="search-language">
            {t('google_language')}&nbsp;
            <div id="next">
                <a onClick={() => changeLanguage("es")}>
                    {t('language_name')}
                </a>
                <a onClick={() => changeLanguage("en")}>
                    {t('language_name')}
                </a>
            </div>
        </div>
    </div>
);

export default PageLanguage