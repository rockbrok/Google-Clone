import Form from './Form';
import { t } from 'i18next';

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
    <p>
      <svg aria-hidden="true" fill="currentColor" focusable="false" width="22px" height="22px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path>
      </svg>
      {value.email}
    </p>
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
