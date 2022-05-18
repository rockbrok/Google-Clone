import AccountHeader from '../Header';
import AccountSideBar from '../../../components/AccountSideBar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeftIcon } from '@heroicons/react/solid';

import './style.css';

export default function Account() {
  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const letter = firstName.charAt(0).toUpperCase();

  return (
    <>
      <Helmet>
        <title>Google Account</title>
      </Helmet>
      <AccountHeader />
      <section className="account-page-wrap">
        <AccountSideBar />
        <section className="account-flex">
          <XLProfileIcon letter={letter}/>
          <h1>Welcome, {firstName}&nbsp;{lastName}</h1>
          <p>Manage your info, privacy, and security to make Google work better for you.
            &nbsp;<a>Learn more</a>
          </p>
        </section>
      </section>
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

export const BackArrow = () => (
  <Link to="/myaccount/personalinfo/">
    <div className="back-arrow">
      <ArrowLeftIcon className="back-arrow-icon"/>
    </div>
  </Link>
)