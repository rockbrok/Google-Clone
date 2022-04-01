import React from 'react'
import './style.css';
import { GoogleApps } from './../GoogleApps/index';
import { t } from 'i18next';

function Header() {

  return (
    <header>
        <ul>
            <Gmail />
            <Images />
            <GApps />
            <SignIn />
            <GoogleApps />
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

const GApps = () => (
    <li>
        <button className="gapps-icon-link" href="#" alt="Google apps" data-title="Google apps">
            <svg className="gapps-icon" focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
        </button>
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