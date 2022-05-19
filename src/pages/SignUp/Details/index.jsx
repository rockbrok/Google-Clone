import Form from './Form';
import { t } from 'i18next';
import { UserCircleIcon } from '@heroicons/react/outline';

import './style.css';
import '../../../components/SignPage/Container/style.css';
import '../../../components/SignPage/Heading/style.css';

export default function SignUpDetails({ value, setValue, register, handleSubmit, errors, watch, Next, Logo }) {
  return (
    <>
      <main className="form-container">
        <Logo />
        <Heading value={value}/>
        <Form
          value={value} 
          Next={Next} 
          setValue={setValue} 
          register={register} 
          handleSubmit={handleSubmit} 
          errors={errors} 
          watch={watch} 
        />
      </main>
      <AccountLogo />
    </>
  )
}

const Heading = ({ value }) => (
  <>
    <h1 className="heading">
      {value.firstName}, welcome to Google
    </h1>
    <div className="welcome-subhead">
    <UserCircleIcon className="sidebar-icon"/>
    <div className="welcome-subhead-email">{value.email}</div>
    </div>
  </>
);

export const ErrorLogo = () => (
  <div className="invalidlogo">
    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>
  </div>
)

export const Information = () => (
  <a target="_blank" rel="noreferrer" href="https://support.google.com/accounts/answer/1733224?hl=en" className="create-account">
    Why we ask for this information
  </a>
);

export const Back = () => (
  <button className="create-account" onClick={() => window.location.reload()}>
    Back
  </button>
);

const AccountLogo = () => (
  <section className="account-app-icon">
    <figure className="account-app-figure">
      <img src="https://ssl.gstatic.com/accounts/signup/glif/personal.svg" alt="" width="244" height="244" />
      <figcaption className="fig-heading">
        Your personal info is private & safe
      </figcaption>
    </figure>
  </section>
);
