import React from 'react'
import './style.css';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';
import './../../languages.js'

function Header() {
  const { t } = useTranslation()

  return (
    <header>
        <ul>
            <Gmail />
            <Images />
            <GoogleApps />
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

const GoogleApps = () => (
    <li>
        <a class="gapps-icon-link" href="#" alt="Google Apps" data-title="Google Apps">
            <svg className="gapps-icon" focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
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