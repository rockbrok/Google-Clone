import { t } from 'i18next';

import './style.css';

export default function AccountFooter() {
  return (
    <div className="account-footer">
      <Privacy />
      <Terms />
      <Help />
      <About />
    </div>
  )
}

const Privacy = () => (
  <a className="account-footer-items" href="https://policies.google.com/privacy" target="_blank">
    {t('privacy')}
  </a>
)

const Terms = () => (
  <a className="account-footer-items" href="https://policies.google.com/terms" target="_blank">
    {t('terms')}
  </a>
)

const Help = () => (
  <a className="account-footer-items" href="https://myaccount.google.com/support" target="_blank">
    {t('help')}
  </a>
)

const About = () => (
  <a className="account-footer-items" href="https://www.google.com/account/about/" target="_blank">
    {t('account_about')}
  </a>
)
