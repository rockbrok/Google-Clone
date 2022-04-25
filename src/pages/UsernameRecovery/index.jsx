import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import './style.css';

export default function UsernameRecovery() {
  return (
    <>
      <Helmet>
        <title>Sign in - Google Accounts</title>
      </Helmet>
      <section className="sign-wrapper">
      <section className="flex-grow" />
      <section className="sign-container">
        <Logo />
        <Heading />
        <section className="sign-main">
        <Input />
        <section className="flex-row">
          <Next />
        </section>
        </section>

      </section>
      <section className="sign-footer" >
      <LanguageSelector />
        <Links />
        </section>
      </section>
    </>
  )
}

const Logo = () => (
  <div className="sign-logo" />
);

const Heading = () => (
  <>
    <h1 className="heading">Sign In</h1>
    <h4 className="sub-heading">Use your Google Account</h4>
  </>
);

const Input = () => (
  <div className="email-form">
    <form>
      <input className="input-email" type="email" spellCheck="false" dir="ltr" />
      <span className="input-placeholder">Email or phone</span>
    </form>
  </div>
);

const Next = () => (
  <button>
    Next
  </button>
);

const LanguageSelector = () => (
  <button className="language">
    Language
  </button>
);

const Links = () => (
  <ul className="footer-links">
    <li>Help</li>
    <li>Privacy</li>
    <li>Terms</li>
  </ul>
);