import AccountHeader from "../Header";
import AccountSideBar from "../../../components/AccountSideBar";
import AccountNavBar from "../../../components/AccountNavBar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { t } from 'i18next';

import './style.css';

export default function PersonalInfo() {
  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const gender = obj[0].gender;
  const dateOfBirth = obj[0].dateOfBirth;
  const password = obj[0].password;

  return (
    <>
      <Helmet>
        <title>{t("my-account.personal-info.personal_info")}</title>
      </Helmet>
      <main>
      <AccountHeader />
      <AccountNavBar />
      <section className="account-page-wrap">
        <AccountSideBar />
        <section className="account-flex">
          <div className="account-page-head">{t("my-account.personal-info.personal_info")}</div>
          <div className="account-page-subhead">{t("my-account.personal-info.subheading")}</div>
          <h1>Your profile info in Google services</h1>
          <h3>Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</h3>
          <h6>Basic info</h6>
          <p>Some info may be visible to other people using Google services.&nbsp;
            <a>{t("learn_more")}</a>
          </p>
          <button className="manage-account-button">
            <Link to="/myaccount/name/">
              {t("my-account.personal-info.personal-name.name")}&nbsp;{firstName}&nbsp;{lastName}
            </Link>
          </button><br />
          <button className="manage-account-button">
            <Link to="/myaccount/birthday/">
              {t("my-account.personal-info.personal-birthday.birthday")}&nbsp;{dateOfBirth}
            </Link>
          </button><br />
          <button className="manage-account-button">
            <Link to="/myaccount/gender/">
              {t("my-account.personal-info.personal-gender.gender")}&nbsp;{gender}
            </Link>
          </button><br />
          <h6>Contact info</h6>
          <button className="manage-account-button">
            <Link to="/myaccount/email/">
              {t("my-account.personal-info.personal-email.email")}&nbsp;{email}
            </Link>
          </button>
          <h1>Other info and preferences for Google services</h1>
          <h3>Ways to verify it’s you and settings for the web</h3>
          <h6>Password</h6>
          <p>A secure password helps protect your Google Account</p>
          <button className="manage-account-button">
            <Link to="/myaccount/password/">
              Password {password}
            </Link>
          </button>
          <h6>General preferences for the web</h6>
          <p>Manage settings for Google services on the web</p>
          <p>GlobeIcon Language   English (United States)</p>
        </section>
      </section>
      </main>
    </>
  )
}
