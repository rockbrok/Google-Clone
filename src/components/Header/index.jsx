import ToggleApps from './../AppsPanel/ToggleApps';
import ToggleUser from '../UserPanel/ToggleUser';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {
  let user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <ul>
        <Gmail />
        <Images />
        <ToggleApps />
        { user !== null ? <ToggleUser /> : <SignIn /> }
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
    <Link to="/signin/identifier/">
      <button className="sign-in" target="_top">
        {t('sign_in')}
      </button>
    </Link> 
  </li>
);
