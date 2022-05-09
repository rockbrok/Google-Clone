import { t } from 'i18next';

import './style.css'

export default function SignPageFooter() {
  return (
    <section className="signup-footer" >
      <div className="signup-footer-container">
      <LanguageSelector />
      <Links />
      </div>
    </section>
  );
}

const LanguageSelector = () => (
  <button className="signup-footer-language">
    English (United States)
  </button>
);
  
const Links = () => (
  <ul className="signup-footer-links">
    <li>{t('signpage_footer_help')}</li>
    <li>{t('privacy')}</li>
    <li>{t('terms')}</li>
  </ul>
);
