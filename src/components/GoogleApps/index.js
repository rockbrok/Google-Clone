import React from 'react'
import './style.css';
import { t } from 'i18next';

export default function GoogleApps() {

  return ( <>
    <div className="gapps-panel">
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
        <a href="https://myaccount.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1587px',}} />
            </div>
            {t('account')}
        </a>
    </li>
);

const Search = () => (
    <li>
        <a href="https://www.google.com/search/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1794px'}} />
            </div>
            {t('search')}
        </a>
    </li>
);

const Maps = () => (
    <li>
        <a href="https://maps.google.com/maps/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -483px'}} />
            </div>
            {t('maps')}
        </a>
    </li>
);

const YouTube = () => (
    <li>
        <a href="https://www.youtube.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2622px'}} />
            </div>
            {t('youtube')}
        </a>
    </li>
);

const Play = () => (
    <li>
        <a href="https://play.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -207px'}} />
            </div>
            {t('play')}
        </a>
    </li>
);

const News = () => (
    <li>
        <a href="https://news.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1311px'}} />
            </div>
            {t('news')}
        </a>
    </li>
);

const Gmail = () => (
    <li>
        <a href="https://mail.google.com/mail/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2001px'}} />
            </div>
            {t('gmail')}
        </a>
    </li>
);

const Meet = () => (
    <li>
        <a href="https://meet.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -690px'}} />
            </div>
            {t('meet')}
        </a>
    </li>
);

const Chat = () => (
    <li>
        <a href="https://chat.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1656px'}} />
            </div>
            {t('chat')}
        </a>
    </li>
);

const Contacts = () => (
    <li>
        <a href="https://contacts.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2898px'}} />
            </div>
            {t('contacts')}
        </a>
    </li>
);

const Drive = () => (
    <li>
        <a href="https://drive.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2967px'}} />
            </div>
            {t('drive')}
        </a>
    </li>
);

const Calendar = () => (
    <li>
        <a href="https://calendar.google.com/calendar/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2553px'}} />
            </div>
            {t('calendar')}
        </a>
    </li>
);

const Translate = () => (
    <li>
        <a href="https://translate.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1932px'}} />
            </div>
            {t('translate')}
        </a>
    </li>
);

const Photos = () => (
    <li>
        <a href="https://photos.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2829px'}} />
            </div>
            {t('photos')}
        </a>
    </li>
);

const Duo = () => (
    <li>
        <a href="https://duo.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2484px'}} />
            </div>
            {t('duo')}
        </a>
    </li>
);

const Divider = () => (
    <div className="divider" />
);

const Finance = () => (
    <li>
        <a href="https://www.google.com/finance/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -345px'}} />
            </div>
            {t('finance')}
        </a>
    </li>
);

const Docs = () => (
    <li>
        <a href="https://docs.google.com/document/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1242px'}} />
            </div>
            {t('docs')}
        </a>
    </li>
);

const Sheets = () => (
    <li>
        <a href="https://docs.google.com/spreadsheets/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2208px'}} />
            </div>
            {t('sheets')}
        </a>
    </li>
);

const Slides = () => (
    <li>
        <a href="https://docs.google.com/presentation">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2277px'}} />
            </div>
            {t('slides')}
        </a>
    </li>
);

const Books = () => (
    <li>
        <a href="https://books.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2760px'}} />
            </div>
            {t('books')}
        </a>
    </li>
);

const Blogger = () => (
    <li>
        <a href="https://www.blogger.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1863px'}} />
            </div>
            {t('blogger')}
        </a>
    </li>
);

const Hangouts = () => (
    <li>
        <a href="https://hangouts.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2415px'}} />
            </div>
            {t('hangouts')}
        </a>
    </li>
);

const Keep = () => (
    <li>
        <a href="https://keep.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -276px'}} />
            </div>
            {t('keep')}
        </a>
    </li>
);

const Jamboard = () => (
    <li>
        <a href="https://jamboard.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2070px'}} />
            </div>
            {t('jamboard')}
        </a>
    </li>
);

const Classroom = () => (
    <li>
        <a href="https://classroom.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -966px'}} />
            </div>
            {t('classroom')}
        </a>
    </li>
);

const Earth = () => (
    <li>
        <a href="https://earth.google.com/web/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1380px'}} />
            </div>
            {t('earth')}
        </a>
    </li>
);

const Collections = () => (
    <li>
        <a href="https://www.google.com/save/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -621px'}} />
            </div>
            {t('collections')}
        </a>
    </li>
);

const ArtsAndCulture = () => (
    <li>
        <a href="https://artsandculture.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -1518px'}} />
            </div>
            {t('arts_and_culture')}
        </a>
    </li>
);

const GoogleAds = () => (
    <li>
        <a href="https://ads.google.com/home/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -414px'}} />
            </div>
            {t('google_ads')}
        </a>
    </li>
);

const Podcasts = () => (
    <li>
        <a href="https://podcasts.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -552px'}} />
            </div>
            {t('podcasts')}
        </a>
    </li>
);

const GoogleOne = () => (
    <li>
        <a href="https://one.google.com/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2691px'}} />
            </div>
            {t('google_one')}
        </a>
    </li>
);

const Travel = () => (
    <li>
        <a href="https://www.google.com/travel/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -3036px'}} />
            </div>
            {t('travel')}
        </a>
    </li>
);

const Forms = () => (
    <li>
        <a href="https://docs.google.com/forms/">
            <div className="gapps-icons-transform">
                <span className="gapps-panel-icons" style={{'background-position': '0 -2139px'}} />
            </div>
            {t('forms')}
        </a>
    </li>
);

const AllApps = () => (
    <div className="more-from-google">
        <a href="https://mail.google.com/mail/">
            {t('more_from_google')}
        </a>
    </div>
);
