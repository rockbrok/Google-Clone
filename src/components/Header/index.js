import ToggleApps from '../GoogleApps/ToggleApps';
import { t } from 'i18next';

import './style.css';

export default function Header() {
  return (
    <header>
      <ul>
        <Gmail />
        <Images />
        <ToggleApps />
        <SignIn />
      </ul>
    </header>
  )
}

const Gmail = () => (
  <li className="pl">
    <a href="https://mail.google.com/mail/">
      {t('gmail')}
    </a>
  </li>
);

const Images = () => (
  <li className="pl">
    <a href="https://images.google.com/">
      {t('images')}
    </a>
  </li>
);

const SignIn = () => (
  <li>
    <a className="sign-in" href="https://accounts.google.com/ServiceLogin?hl=en" target="_top">
      {t('sign_in')}
    </a>
  </li>
);
