import i18n, { t } from 'i18next';

import './style.css';

const changeLanguage = (language) => (
  i18n.changeLanguage(language)
);

function LanguageChange() {
  i18n.language === "en" ? 
    changeLanguage("es") : changeLanguage("en")
}

export default function PageLanguage() {
  return (
    <div className="search-language-container">
      <div className="search-language">
        {t('search.google_language')}&nbsp;
        <button
          onClick={() => LanguageChange()}
          onClickCapture={() => window.location.reload(false)}
        >
          {t('language_select.2')}
        </button>
      </div>
    </div>
  )
}
