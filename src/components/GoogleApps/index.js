import React from 'react'
import './style.css';
import { t } from 'i18next';

export function GoogleApps() {

  return ( <>
    <div class="gapps-panel">
        <ul>
            <Account />
            <Search />
            <Maps />
            <YouTube />
            <Play />
            <News />
            <Gmail />
            <Meet />
            <Chat />
            <Contacts />
            <Drive />
            <Calendar />
            <Translate />
            <Photos />
            <Duo />

        </ul>
        <Divider />
        <ul>
        <Finance />
        <Docs />
        <Sheets />
        <Slides />
        <Books />
        <Blogger />
        <Hangouts />
        <Keep />
        <Jamboard />
        <Classroom />
        <Earth />
        <Collections />
        <ArtsAndCulture />
        <GoogleAds />
        <Podcasts />
        <GoogleOne />
        <Travel />
        <Forms />
        </ul>
        <AllApps />
    </div>
  </> )
}

const Account = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('account')}
        </a>
    </li>
);

const Search = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('search')}
        </a>
    </li>
);

const Maps = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('maps')}
        </a>
    </li>
);

const YouTube = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('youtube')}
        </a>
    </li>
);

const Play = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('play')}
        </a>
    </li>
);

const News = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('news')}
        </a>
    </li>
);

const Gmail = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('gmail')}
        </a>
    </li>
);

const Meet = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('meet')}
        </a>
    </li>
);

const Chat = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('chat')}
        </a>
    </li>
);

const Contacts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('contacts')}
        </a>
    </li>
);

const Drive = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('drive')}
        </a>
    </li>
);

const Calendar = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('calendar')}
        </a>
    </li>
);

const Translate = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('translate')}
        </a>
    </li>
);

const Photos = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('photos')}
        </a>
    </li>
);

const Duo = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('duo')}
        </a>
    </li>
);

const Divider = () => (
    <div class="divider" />
);

const Finance = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('finance')}
        </a>
    </li>
);

const Docs = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('docs')}
        </a>
    </li>
);

const Sheets = () => (
    <li>
        <a href="https://images.google.com/">
            {t('sheets')}
        </a>
    </li>
);

const Slides = () => (
    <li>
        <a href="https://accounts.google.com/ServiceLogin?hl=en">
            {t('slides')}
        </a>
    </li>
);

const Books = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('books')}
        </a>
    </li>
);

const Blogger = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('blogger')}
        </a>
    </li>
);

const Hangouts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('hangouts')}
        </a>
    </li>
);

const Keep = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('keep')}
        </a>
    </li>
);

const Jamboard = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('jamboard')}
        </a>
    </li>
);

const Classroom = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('classroom')}
        </a>
    </li>
);

const Earth = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('earth')}
        </a>
    </li>
);

const Collections = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('collections')}
        </a>
    </li>
);

const ArtsAndCulture = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('arts_and_culture')}
        </a>
    </li>
);

const GoogleAds = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('google_ads')}
        </a>
    </li>
);

const Podcasts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('podcasts')}
        </a>
    </li>
);

const GoogleOne = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('google_one')}
        </a>
    </li>
);

const Travel = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('travel')}
        </a>
    </li>
);

const Forms = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            {t('forms')}
        </a>
    </li>
);

const AllApps = () => (
    <div class="more-from-google">
        <a href="https://mail.google.com/mail/">
            {t('more_from_google')}
        </a>
    </div>
);
