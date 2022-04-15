import i18n, { t } from 'i18next';

import './style.css';

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

function LanguageChange() {
  if(i18n.language === "es"){
    changeLanguage("en")
  } else {
    changeLanguage("es")
  }
}

export default function PageLanguage() {
  return (
    <Language />
  )
}

const Language = () => (
  <div className="search-language-container">
    <div className="search-language">
      {t('google_language')}&nbsp;
      <button onClick={() => LanguageChange()}>
        {t('language_name')}
      </button>
    </div>
  </div>
);
