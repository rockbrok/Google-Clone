import React from 'react'
import './style.css';
import { ToggleApps } from './toggleApps.js';
import { t } from 'i18next';

function Header() {

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
    <li>
        <a href="https://mail.google.com/mail/">
            {t('gmail')}
        </a>
    </li>
);

const Images = () => (
    <li>
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

export default Header