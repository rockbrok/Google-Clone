import { t } from 'i18next';

import './style.css';

export default function AccountFooter() {
  return (
    <footer className="account-footer">
      <Privacy />
      <Terms />
      <Help />
      <About />
    </footer>
  )
}

const Privacy = () => (
  <a className="account-footer-items" href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">
    {t('privacy')}
  </a>
)

const Terms = () => (
  <a className="account-footer-items" href="https://policies.google.com/terms" rel="noreferrer" target="_blank">
    {t('terms')}
  </a>
)

const Help = () => (
  <a className="account-footer-items" href="https://myaccount.google.com/support" rel="noreferrer" target="_blank">
    {t('help')}
  </a>
)

const About = () => (
  <a className="account-footer-items" href="https://www.google.com/account/about/" rel="noreferrer" target="_blank">
    {t('my-account.about')}
  </a>
)
