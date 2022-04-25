import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import './style.css';

export default function SignUp() {
  return (
    <>
      <Helmet>
        <title>Sign up - Google Accounts</title>
      </Helmet>
      <section className="">
        <Logo />
        <Heading />
        <Input />
        <Forgot />
        <Note />
        <CreateAccount />
        <Next />
        <LanguageSelector />
        <Links />
      </section>
    </>
  )
}

const Logo = () => (
  <div>
    Google
  </div>
);

const Heading = () => (
  <div>
    <h4>Sign In</h4>
    <h6>Use your Google Account</h6>
  </div>
);

const Input = () => (
  <div>
    <input placeholder="Email or phone"/>
  </div>
);

const Forgot = () => (
  <button>
    Forgot Email?
  </button>
);

const Note = () => (
  <p>
    Not your computer? Use Guest mode to sign in privately.
      <a href="https://support.google.com/chrome/answer/6130773?hl=en" rel="noreferrer" target="_blank">Learn more</a>
  </p>
);

const CreateAccount = () => (
  <Link to="/signup/">
    <button>
      Create Account
    </button>
  </Link>
);

const Next = () => (
  <button>
    Next
  </button>
);

const LanguageSelector = () => (
  <button>
    Language
  </button>
);

const Links = () => (
  <ul>
    <li>Help</li>
    <li>Privacy</li>
    <li>Terms</li>
  </ul>
);