import ToggleApps from './../AppsPanel/ToggleApps';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

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
    <Link to="/signin/">
      <button className="sign-in" target="_top">
        {t('sign_in')}
      </button>
    </Link> 
  </li>
);
