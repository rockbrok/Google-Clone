import AccountHeader from '../Header';
import AccountSideBar from '../../../components/AccountSideBar';
import AccountNavBar from '../../../components/AccountNavBar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import './style.css';

export default function Account() {
  const obj = JSON.parse(localStorage.getItem('user'));
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const letter = firstName.charAt(0).toUpperCase();

  return (
    <>
      <Helmet>
        <title>Google Account</title>
      </Helmet>
      <main>
        <AccountHeader />
        <AccountNavBar />
        <section className="account-page-wrap">
          <AccountSideBar />
          <section className="account-flex">
            <section className="account-main-wrap">
              <Welcome letter={letter} firstName={firstName} lastName={lastName} />
              <div className="card-row">
                <PrivacyAndPersonalization />
                <PersonalInfo />
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

const XLProfileIcon = ({ letter }) => {
  return (
    <div className="user-icon-3">
      {letter}
    </div>
  );
}

const Welcome = ({ letter, firstName, lastName }) => (
  <>
    <XLProfileIcon letter={letter}/>
    <div className="welcome-head">
      Welcome,&nbsp;{firstName}&nbsp;{lastName}
    </div>
    <div className="welcome-subhead">
      Manage your info, privacy, and security to make Google work better for you.&nbsp;
      <a className="learn-more no-deco">
        Learn more
      </a>
    </div>
  </>
)

const PrivacyAndPersonalization = () => (
  <Link exact to="/myaccount/data-and-personalization/" className="no-deco flex-link">
    <section className="welcome-card">
      <div className="welcome-card-top">
        <div className="inner-card-row">
          <div className="welcome-top-card-info">
            <div className="welcome-card-head">
              Privacy &amp; personalization
            </div>
              See the data in your Google Account and choose what activity is saved to personalize your Google experience
            </div>
            <div className="personalize-img" />
          </div>
        </div>
        <div className="welcome-card-bottom">
          Manage your data &amp; privacy
      </div>
    </section>
  </Link>
)

const PersonalInfo = () => (
  <Link exact to="/myaccount/personalinfo/" className="no-deco flex-link">
    <section className="welcome-card">
      <div className="welcome-card-top">
        <div className="inner-card-row">
          <div className="welcome-top-card-info">
            <div className="welcome-card-head">
              Choose what others see
            </div>
              Decide what personal information you make visible to others
          </div>
          <div className="personalinfo-img" />
        </div>
      </div>
      <div className="welcome-card-bottom">
        Manage your personal info
      </div>
    </section>
  </Link>
)

export const BackArrow = () => (
  <Link to="/myaccount/personalinfo/">
    <div className="back-arrow">
      <ArrowLeftIcon className="back-arrow-icon"/>
    </div>
  </Link>
)
