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
            <span class="gapps-panel-icons" style={{'background-position': '0 -1587px',}} />
            {t('account')}
        </a>
    </li>
);

const Search = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1794px'}} />
            {t('search')}
        </a>
    </li>
);

const Maps = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -483px'}} />
            {t('maps')}
        </a>
    </li>
);

const YouTube = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2622px'}} />
            {t('youtube')}
        </a>
    </li>
);

const Play = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -207px'}} />
            {t('play')}
        </a>
    </li>
);

const News = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1311px'}} />
            {t('news')}
        </a>
    </li>
);

const Gmail = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2001px'}} />
            {t('gmail')}
        </a>
    </li>
);

const Meet = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -690px'}} />
            {t('meet')}
        </a>
    </li>
);

const Chat = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1656px'}} />
            {t('chat')}
        </a>
    </li>
);

const Contacts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2898px'}} />
            {t('contacts')}
        </a>
    </li>
);

const Drive = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2967px'}} />
            {t('drive')}
        </a>
    </li>
);

const Calendar = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2553px'}} />
            {t('calendar')}
        </a>
    </li>
);

const Translate = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1932px'}} />
            {t('translate')}
        </a>
    </li>
);

const Photos = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2829px'}} />
            {t('photos')}
        </a>
    </li>
);

const Duo = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2484px'}} />
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
            <span class="gapps-panel-icons" style={{'background-position': '0 -345px'}} />
            {t('finance')}
        </a>
    </li>
);

const Docs = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1242px'}} />
            {t('docs')}
        </a>
    </li>
);

const Sheets = () => (
    <li>
        <a href="https://images.google.com/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2208px'}} />
            {t('sheets')}
        </a>
    </li>
);

const Slides = () => (
    <li>
        <a href="https://accounts.google.com/ServiceLogin?hl=en">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2277px'}} />
            {t('slides')}
        </a>
    </li>
);

const Books = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2760px'}} />
            {t('books')}
        </a>
    </li>
);

const Blogger = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1863px'}} />
            {t('blogger')}
        </a>
    </li>
);

const Hangouts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2415px'}} />
            {t('hangouts')}
        </a>
    </li>
);

const Keep = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -276px'}} />
            {t('keep')}
        </a>
    </li>
);

const Jamboard = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2070px'}} />
            {t('jamboard')}
        </a>
    </li>
);

const Classroom = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -966px'}} />
            {t('classroom')}
        </a>
    </li>
);

const Earth = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1380px'}} />
            {t('earth')}
        </a>
    </li>
);

const Collections = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -621px'}} />
            {t('collections')}
        </a>
    </li>
);

const ArtsAndCulture = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -1518px'}} />
            {t('arts_and_culture')}
        </a>
    </li>
);

const GoogleAds = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -414px'}} />
            {t('google_ads')}
        </a>
    </li>
);

const Podcasts = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -552px'}} />
            {t('podcasts')}
        </a>
    </li>
);

const GoogleOne = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2691px'}} />
            {t('google_one')}
        </a>
    </li>
);

const Travel = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -3036px'}} />
            {t('travel')}
        </a>
    </li>
);

const Forms = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <span class="gapps-panel-icons" style={{'background-position': '0 -2139px'}} />
            {t('forms')}
        </a>
    </li>
);

const AllApps = () => (
    <div class="more-from-google">
        <a href="https://mail.google.com/mail/" target="_blank">
            {t('more_from_google')}
        </a>
    </div>
);
