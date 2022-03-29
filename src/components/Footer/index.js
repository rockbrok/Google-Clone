import React from 'react'
import './style.css';
import SettingsPanel from './../../components/SettingsPanel/index';
import { t } from 'i18next';

function Footer() {
  return (
    <footer>
        <FooterCountry />
        <div class="footer-content">
            <ul>
                <About />
                <Advertising />
                <Business />
                <HowSearchWorks />
            </ul>
            <ul>
                <Privacy />
                <Terms />
                <Settings />
                    <SettingsPanel />
            </ul>
        </div>
    </footer>
  )
}

const FooterCountry = () => (
    <div class="footer-country">
        <p>Argentina</p>
    </div>
);

const About = () => (
    <li>
        <a href="https://about.google/" alt="About">
            {t('about')}
        </a>
    </li>
);

const Advertising = () => (
    <li>
        <a href="https://ads.google.com/" alt="Advertising">
            {t('advertising')}
        </a>
    </li>
);

const Business = () => (
    <li>
        <a href="https://smallbusiness.withgoogle.com/" alt="Business">
            {t('business')}
        </a>
    </li>
);

const HowSearchWorks = () => (
    <li>
        <a href="https://www.google.com/search/howsearchworks/" alt="How Search Works">
            {t('how_search_works')}
        </a>
    </li>
);

const Privacy = () => (
    <li>
        <a href="https://policies.google.com/privacy/" alt="Privacy">
            {t('privacy')}
        </a>
    </li>
);

const Terms = () => (
    <li>
        <a href="https://policies.google.com/terms/" alt="Terms">
            {t('terms')}
        </a>
    </li>
);

const Settings = () => (
    <li>
        <button class="settings" alt="Settings">
            {t('settings')}
        </button>
    </li>
);

export default Footer