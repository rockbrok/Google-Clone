import './style.css';
import { t } from 'i18next';

export default function AppsPanel() {
  return (
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
        <Shopping />
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
  )
}

const Account = () => (
  <li>
    <a className="gapps-link" href="https://myaccount.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1587px',}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.account')}</span>
    </a>
  </li>
);

const Search = () => (
  <li>
    <a className="gapps-link" href="https://www.google.com/search/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1794px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.search')}</span>
    </a>
  </li>
);

const Maps = () => (
  <li>
    <a className="gapps-link" href="https://maps.google.com/maps/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -483px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.maps')}</span>
    </a>
  </li>
);

const YouTube = () => (
  <li>
    <a className="gapps-link" href="https://www.youtube.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2622px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.youtube')}</span>
    </a>
  </li>
);

const Play = () => (
  <li>
    <a className="gapps-link" href="https://play.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -207px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.play')}</span>
    </a>
  </li>
);

const News = () => (
  <li>
    <a className="gapps-link" href="https://news.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1311px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.news')}</span>
    </a>
  </li>
);

const Gmail = () => (
  <li>
    <a className="gapps-link" href="https://mail.google.com/mail/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2001px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gmail')}</span>
    </a>
  </li>
);

const Meet = () => (
  <li>
    <a className="gapps-link" href="https://meet.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -690px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.meet')}</span>
    </a>
  </li>
);

const Chat = () => (
  <li>
    <a className="gapps-link" href="https://chat.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1656px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.chat')}</span>
    </a>
  </li>
);

const Contacts = () => (
  <li>
    <a className="gapps-link" href="https://contacts.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2898px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.contacts')}</span>
    </a>
  </li>
);

const Drive = () => (
  <li>
    <a className="gapps-link" href="https://drive.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2967px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.drive')}</span>
    </a>
  </li>
);

const Calendar = () => (
  <li>
    <a className="gapps-link" href="https://calendar.google.com/calendar/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2553px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.calendar')}</span>
    </a>
  </li>
);

const Translate = () => (
  <li>
    <a className="gapps-link" href="https://translate.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1932px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.translate')}</span>
    </a>
  </li>
);

const Photos = () => (
  <li>
    <a className="gapps-link" href="https://photos.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2829px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.photos')}</span>
    </a>
  </li>
);

const Duo = () => (
  <li>
    <a className="gapps-link" href="https://duo.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2484px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.duo')}</span>
    </a>
  </li>
);

const Shopping = () => (
  <li>
    <a className="gapps-link" href="https://shopping.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -69px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.shopping')}</span>
    </a>
  </li>
);

const Divider = () => (
  <div className="divider" />
);

const Finance = () => (
  <li>
    <a className="gapps-link" href="https://www.google.com/finance/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -345px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.finance')}</span>
    </a>
  </li>
);

const Docs = () => (
  <li>
    <a className="gapps-link" href="https://docs.google.com/document/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1242px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.docs')}</span>
    </a>
  </li>
);

const Sheets = () => (
  <li>
    <a className="gapps-link" href="https://docs.google.com/spreadsheets/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2208px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.sheets')}</span>
    </a>
  </li>
);

const Slides = () => (
  <li>
    <a className="gapps-link" href="https://docs.google.com/presentation">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2277px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.slides')}</span>
    </a>
  </li>
);

const Books = () => (
  <li>
    <a className="gapps-link" href="https://books.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2760px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.books')}</span>
    </a>
  </li>
);

const Blogger = () => (
  <li>
    <a className="gapps-link" href="https://www.blogger.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1863px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.blogger')}</span>
    </a>
  </li>
);

const Hangouts = () => (
  <li>
    <a className="gapps-link" href="https://hangouts.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2415px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.hangouts')}</span>
    </a>
  </li>
);

const Keep = () => (
  <li>
    <a className="gapps-link" href="https://keep.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -276px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.keep')}</span>
    </a>
  </li>
);

const Jamboard = () => (
  <li>
    <a className="gapps-link" href="https://jamboard.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2070px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.jamboard')}</span>
    </a>
  </li>
);

const Classroom = () => (
  <li>
    <a className="gapps-link" href="https://classroom.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -966px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.classroom')}</span>
    </a>
  </li>
);

const Earth = () => (
  <li>
    <a className="gapps-link" href="https://earth.google.com/web/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1380px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.earth')}</span>
    </a>
  </li>
);

const Collections = () => (
  <li>
    <a className="gapps-link" href="https://www.google.com/save/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -621px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.collections')}</span>
    </a>
  </li>
);

const ArtsAndCulture = () => (
  <li>
    <a className="gapps-link" href="https://artsandculture.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -1518px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.arts_and_culture')}</span>
    </a>
  </li>
);

const GoogleAds = () => (
  <li>
    <a className="gapps-link" href="https://ads.google.com/home/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -414px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.google_ads')}</span>
    </a>
  </li>
);

const Podcasts = () => (
  <li>
    <a className="gapps-link" href="https://podcasts.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -552px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.podcasts')}</span>
    </a>
  </li>
);

const GoogleOne = () => (
  <li>
    <a className="gapps-link" href="https://one.google.com/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2691px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.google_one')}</span>
    </a>
  </li>
);

const Travel = () => (
  <li>
    <a className="gapps-link" href="https://www.google.com/travel/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -3036px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.travel')}</span>
    </a>
  </li>
);

const Forms = () => (
  <li>
    <a className="gapps-link" href="https://docs.google.com/forms/">
      <div className="gapps-icons-transform">
        <span className="gapps-panel-icons" style={{'backgroundPosition': '0 -2139px'}} />
      </div>
      <span className="gapps-panel-labels">{t('gapps.forms')}</span>
    </a>
  </li>
);

const AllApps = () => (
  <div className="more-from-google">
    <a href="https://about.google/products/">
      {t('gapps.more_from_google')}
    </a>
  </div>
);
