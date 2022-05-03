import SignPageFooter from '../../components/SignPage/Footer';
import SignPageHeader from '../../components/SignPage/Header';
import { ShowPassword } from '../../components/SignPage/ShowPassword';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { t } from 'i18next';

import './style.css';
import './../../components/SignPage/Container/style.css';
import './../../components/SignPage/NextButton/style.css';
import './../../components/SignPage/Heading/style.css';
import './../../components/SignPage/SignInForm/style.css';
import './../../components/SignPage/ShowPassword/style.css';

const NAME_REGEX = /^[a-z,A-Z ,.'-]{2,16}$/;
const PWD_REGEX = /^(?=.*?[A-Z,a-z]).{8,}$/;

// primary email validation regex 'valid email' //
const EMAIL_REGEX =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// email with characters only 'don't forget to include @' //
export const EMAIL1_REGEX = /^\w+([.-]?\w+)*$/;
// email with characters and a top-level-domain 'don't forget to include @' //
export const EMAIL2_REGEX = /^\w+([.-]?\w+)*(\.\w{2,3})+$/;
// email with characters and @ but no domain 'enter a domain after @' //
export const EMAIL3_REGEX = /^\w+([.-]?\w+)*@$/;
// email without username and only domain 'enter a username before the '@' //
export const EMAIL4_REGEX = /^@\w+([.-]?\w+)*$/;
// email without username and only domain and top-level domain 'enter a username before the '@' //
export const EMAIL5_REGEX = /^@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// email without username and only domain with dot 'enter a username before the '@' //
export const EMAIL6_REGEX = /^@\w+([.-]?\w+)*(\.)$/;
// email with characters and a top-level-domain 'don't forget to include @' //
export const EMAIL7_REGEX = /^\w+([.-]?\w+)*(\.)+$/;

export default function SignUp() {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validEmail1, setValidEmail1] = useState(false);
  const [validEmail2, setValidEmail2] = useState(false);
  const [validEmail3, setValidEmail3] = useState(false);
  const [validEmail4, setValidEmail4] = useState(false);
  const [validEmail5, setValidEmail5] = useState(false);
  const [validEmail6, setValidEmail6] = useState(false);
  const [validEmail7, setValidEmail7] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = NAME_REGEX.test(firstName.trim());
    console.log(result);
    console.log(firstName);
    setValidFirstName(result);
  }, [firstName])

  useEffect(() => {
    const result = NAME_REGEX.test(lastName.trim());
    console.log(result);
    console.log(lastName);
    setValidLastName(result);
  }, [lastName])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email.trim());
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL1_REGEX.test(email.trim());
    setValidEmail1(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL2_REGEX.test(email.trim());
    setValidEmail2(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL3_REGEX.test(email.trim());
    setValidEmail3(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL4_REGEX.test(email.trim());
    setValidEmail4(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL5_REGEX.test(email.trim());
    setValidEmail5(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL6_REGEX.test(email.trim());
    setValidEmail6(result);
  }, [email])

  useEffect(() => {
    const result = EMAIL7_REGEX.test(email.trim());
    setValidEmail7(result);
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd.trim());
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = NAME_REGEX.test(firstName, lastName);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd, matchPwd);
    if (!v1 || !v2 || !v3) {
      return;
    }
    console.log(firstName, lastName, email, pwd);
    setSuccess(true);
  }

  return (
    <>
      <Helmet>
        <title>Create your Google Account</title>
      </Helmet>
      { success ? (
        <section>
          <center><h1>Thanks, {firstName}</h1></center>
          <span><b>Email</b></span>
          <p>{email}</p>
          <span><b>Password</b></span>
          <p type="password">{pwd}</p>
          <br/>
          <p>Your Google Account comes with access to everything Google: apps, music, games, and more</p>
          <button>Next</button>
        </section>
      ) : (
      <section className="flex-container">
        <SignPageHeader />
        <section className="signpage-container">
          <section className="form-container">
            <Logo />
            <Heading />
            <form onSubmit={handleSubmit} className="signup-form" noValidate>
              <div className="name-row">
                <FirstName
                  firstName={firstName}
                  setFirstName={setFirstName}
                  validFirstName={validFirstName}
                  lastName={lastName}
                  validLastName={validLastName}
                  show={show}
                  setShow={setShow}
                />
                <LastName
                  lastName={lastName}
                  setLastName={setLastName}
                  validLastName={validLastName}
                />
              </div>
              <Email
                email={email}
                setEmail={setEmail}
                validEmail={validEmail}
                validEmail1={validEmail1}
                validEmail2={validEmail2}
                validEmail3={validEmail3}
                validEmail4={validEmail4}
                validEmail5={validEmail5}
                validEmail6={validEmail6}
                validEmail7={validEmail7}
              />
              <div className="name-row">
                <Password
                  pwd={pwd}
                  setPwd={setPwd}
                  validPwd={validPwd}
                  matchPwd={matchPwd}
                  validMatch={validMatch}
                />
                <PasswordConfirm
                  matchPwd={matchPwd}
                  setMatchPwd={setMatchPwd}
                  validMatch={validMatch}
                />
              </div>
              <ShowPassword />
              <div className="button-row">
                <SignInInstead />
                <Next />
              </div>
            </form>
          </section>
          <AccountLogo />
        </section>
        <SignPageFooter />
      </section>
      )}
    </>
  )
}

const Logo = () => (
  <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path>
    <path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path>
    <path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path>
    <path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path>
    <path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path>
    <path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path>
  </svg>
);

const Heading = () => (
  <h1 className="heading">
    {t("sign_up_heading")}
  </h1>
);

const FirstName = ({ firstName, setFirstName, validFirstName, lastName, validLastName }) => (
  <div className="input-container">
    <input
      id="firstname"
      type="text"
      autoComplete="off"
      spellCheck="false"
      dir="ltr"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className={!validFirstName ? "signup-input-error" : "signup-input"}
      required
      aria-describedby="firstnamenote"
      aria-invalid={validFirstName ? "false" : "true"}
    />
    <span className="signup-input-placeholder">
      {t("sign_up_first_name")}
    </span>
    <NameNote 
      firstName={firstName}
      validFirstName={validFirstName}
      lastName={lastName}
      validLastName={validLastName}
    />
  </div>
)

const NameNote = ({ firstName, lastName, validFirstName, validLastName }) => (
  <div>
  {/* If first and last name are empty */}
  <div id="firstnamenote" className={firstName === '' && lastName === '' ? "invalid" : "offscreen"} >
    <ErrorLogo/>
    <p className="invalidtext">Enter first and last names</p>
  </div>
  {/* If first name is empty and last name isn't empty */}
  <div id="firstnamenote" className={(firstName === `` && lastName !== '') ? "invalid" : "offscreen"} >
    <ErrorLogo/>
    <p className="invalidtext">Enter first name</p>
  </div>
  {/* If last name is empty and first name isn't empty */}
  <div id="lastnamenote" className={(lastName === '' && firstName !== '' ) ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Enter last name</p>
  </div>
  {/* If first and last name are entered but one or both aren't valid */}
  <div id="firstnamenote" className={firstName && lastName && (!validFirstName || !validLastName) ? "invalid" : "offscreen"} >
    <ErrorLogo/>
    <p className="invalidtext">Are you sure you entered your name correctly?</p>
  </div>
</div>
)

const LastName = ({ lastName, setLastName, validLastName }) => (
  <div className="input-container">
  <input
    id="lastname"
    type="text"
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    className={!validLastName ? "signup-input-error" : "signup-input"}
    required
    aria-describedby="lastnamenote"
    aria-invalid={validLastName ? "false" : "true"}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_last_name")}
  </span>
</div>
)

const Email = ({ email, setEmail, validEmail, validEmail1, validEmail2, validEmail3, validEmail4, validEmail5, validEmail6, validEmail7 }) => (
  <div className="input-container">
  <input
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className={!validEmail ? "signup-input-error" : "signup-input"}
    required
    aria-describedby="emailnote"
    aria-invalid={validEmail ? "false" : "true"}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_email")}
  </span>
  <EmailNote
    email={email}
    validEmail={validEmail}
    validEmail1={validEmail1}
    validEmail2={validEmail2}
    validEmail3={validEmail3}
    validEmail4={validEmail4}
    validEmail5={validEmail5}
    validEmail6={validEmail6}
    validEmail7={validEmail7}
  />
</div>
)

const EmailNote = ({ email, validEmail, validEmail1, validEmail2, validEmail3, validEmail4, validEmail5, validEmail6, validEmail7 }) => (
  <div>
    {/* If email is empty */}
    <div id="emailnote" className={email === '' ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Enter your email address</p>
    </div>
    <div id="emailnote" className={email && !validEmail && (validEmail1 || validEmail2 || validEmail7) ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Don't forget to include '@'.</p>
    </div>
    <div id="emailnote" className={email && !validEmail && validEmail3 ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Enter a domain after '@'.</p>
    </div>
    <div id="emailnote" className={email && !validEmail && (validEmail4 || validEmail5 || validEmail6) ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Enter a username before the '@'.</p>
    </div>
    <div id="emailnote" className={email && !validEmail && !validEmail1 && !validEmail2 && !validEmail3 && !validEmail4 && !validEmail5 && !validEmail6 && !validEmail7 ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">This email address is not valid.</p>
    </div>
  </div>
)

const Password = ({ pwd, setPwd, validPwd, matchPwd, validMatch }) => (
  <div className="input-container">
  <input 
    type="password"
    id="password"
    spellCheck="false"
    dir="ltr"
    value={pwd}
    onChange={(e) => setPwd(e.target.value)}
    className={!validPwd ? "signup-input-error" : "signup-input"}
    required
    aria-describedby="pwdnote"
    aria-invalid={validPwd ? "false" : "true"}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_password")}
  </span>
  <PasswordNote
    pwd={pwd}
    matchPwd={matchPwd}
    validPwd={validPwd}
    validMatch={validMatch}
  />
</div>
)

const PasswordNote = ({ pwd, matchPwd, validPwd, validMatch }) => (
  <div>
    {/* If password is empty OR password and confirm password are empty*/}
    <div id="pwdnote" className={pwd === '' || (pwd === '' && matchPwd === '') ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Enter a password</p>
    </div>
    {/* If password is entered and it's not valid */}
    <div id="pwdnote" className={(pwd && !validPwd) ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Use 8 characters or more for your password</p>
    </div>
    {/* If password is valid and confirm password is empty */}
    <div id="pwdmatchnote" className={validPwd && matchPwd === '' ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Confirm your password</p>
    </div>
    {/* If password is valid and there is a confirm password but the passwords don't match */}
    <div id="pwdmatchnote" className={validPwd && matchPwd && !validMatch ? "invalid" : "offscreen"}>
      <ErrorLogo/>
      <p className="invalidtext">Those passwords didn’t match. Try again.</p>
    </div>
  </div>
)

const PasswordConfirm = ({ matchPwd, setMatchPwd, validMatch }) => (
  <div className="input-container">
  <input 
    type="password"
    id="password2"
    spellCheck="false"
    dir="ltr"
    value={matchPwd}
    onChange={(e) => setMatchPwd(e.target.value)}
    className={!validMatch ? "signup-input-error" : "signup-input"}
    required
    aria-describedby="pwdmatchnote"
    aria-invalid={validMatch ? "false" : "true"}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_confirm")}
  </span>
</div>
)

export const ErrorLogo = () => (
  <div className="invalidlogo">
    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>
  </div>
)

export const SignInInstead = () => (
  <Link to="/signin/identifier/">
    <button className="create-account">
      {t("sign_up_sign_in")}
    </button>
  </Link>
);

export const Next = () => (
  <button type="submit" className="next">
    {t('next')}
  </button>
);

const AccountLogo = () => (
  <section className="account-app-icon">
    <figure className="account-app-figure">
      <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" />
      <figcaption className="fig-heading">
        {t("sign_up_figure_caption")}
      </figcaption>
    </figure>
  </section>
);