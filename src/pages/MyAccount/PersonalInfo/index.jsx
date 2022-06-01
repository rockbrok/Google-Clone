import AccountHeader from "../Header";
import AccountSideBar from "../../../components/AccountSideBar";
import AccountNavBar from "../../../components/AccountNavBar";
import { Arrow } from "../Home";
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
            <div className="blue-wrap">
              <section className="account-main-wrap">
                <Heading />
                <Card />
                <BasicInfo 
                  firstName={firstName}
                  lastName={lastName}
                  dateOfBirth={dateOfBirth}
                  gender={gender}
                />
                <ContactInfo 
                  email={email}
                />
                <Card2 />
                <PasswordInfo
                  password={password}
                />
            </section>
            <div className="red-wrap" />
          </div>
        </section>
      </section>
      </main>
    </>
  )
}

const Heading = () => (
  <>
    <div className="account-page-head align-center">{t("my-account.personal-info.personal_info")}</div>
    <div className="account-page-subhead align-center">{t("my-account.personal-info.subheading")}</div>
  </>
)

const Card = () => (
  <div className="personal-card-1">
    <div>
      <div className="account-page-head">Your profile information in Google services</div>
      <div className="account-page-subhead">Personal information and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</div>
    </div>
    <div className="personal-scene-img-contain">
      <div className="personal-scene-img" />
    </div>
  </div>
)

const BasicInfo = ({ firstName, lastName, dateOfBirth, gender }) => (
  <div className="info-card">
    <div className="h3">Basic information</div>
    <div className="h3-note">Some information may be visible to other people using Google services.&nbsp;
      <a href="https://support.google.com/accounts/answer/6304920" target="_blank" rel="noreferrer" className="learn-more no-deco">More information</a>
    </div>
    <button className="info-button">
      <Link to="/myaccount/name/" className="no-deco">
        <div className="info-wrap-divide" />
        <div className="info-wrap">
          <div className="info-title">
            {t("my-account.personal-info.personal-name.name")}
          </div>
          <div className="info-value">
            {firstName}&nbsp;{lastName}
          </div>
          <Arrow />
        </div>
      </Link>
    </button>
    <button className="info-button">
      <Link to="/myaccount/birthday/" className="no-deco">
        <div className="info-wrap-divide" />
        <div className="info-wrap">
          <div className="info-title">
            {t("my-account.personal-info.personal-birthday.birthday")}
          </div>
          <div className="info-value">
            {dateOfBirth}
          </div>
          <Arrow />
        </div>
      </Link>
    </button>
    <button className="info-button">
      <Link to="/myaccount/gender/" className="no-deco">
        <div className="info-wrap-divide" />
        <div className="info-wrap info-wrap-bottom">
          <div className="info-title">
            {t("my-account.personal-info.personal-gender.gender")}
          </div>
          <div className="info-value capitalize">
            {gender}
          </div>
          <Arrow />
        </div>
      </Link>
    </button>
  </div>
)

const ContactInfo = ({ email }) => (
  <div className="info-card">
    <div className="h3">Contact information</div>
    <div className="h3-note" />
    <button className="info-button">
      <Link to="/myaccount/email/" className="no-deco">
        <div className="info-wrap-divide" />
        <div className="info-wrap info-wrap-bottom">
          <div className="info-title">
            {t("my-account.personal-info.personal-email.email")}
          </div>
          <div className="info-value undercase">
            {email}
          </div>
          <Arrow />
        </div>
      </Link>
    </button>
  </div>
)

const Card2 = () => (
  <div className="personal-card-1">
  <div>
    <div className="account-page-head">Other information and preferences for Google services</div>
    <div className="account-page-subhead">Ways to verify it's you and settings for the Web.</div>
  </div>
  <div className="personal-scene-img-contain">
    <div className="personal-scene-pref-img" />
  </div>
</div>
)

const PasswordInfo = ({ password }) => (
  <div className="info-card account-bottom-marg">
    <div className="h3">Password</div>
      <div className="h3-note">A secure password helps protect your Google Account</div>
      <button className="info-button">
      <Link to="/myaccount/password/" className="no-deco">
        <div className="info-wrap-divide" />
        <div className="info-wrap info-wrap-bottom">
          <div className="info-title">
            Password
          </div>
          <div className="info-value password">
            {password}
          </div>
          <Arrow />
        </div>
      </Link>
    </button>
  </div>
)
