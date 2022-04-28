import { useRef, useState, useEffect } from "react";
import { t } from 'i18next';

const NAME_REGEX = /^[a-z,A-Z ,.'-]{2,16}$/;
const EMAIL_REGEX =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register () {
  const userRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    console.log(result);
    console.log(firstName);
    setValidFirstName(result);
  }, [firstName])

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    console.log(result);
    console.log(lastName);
    setValidLastName(result);
  }, [lastName])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [firstName, lastName, email, pwd, matchPwd])

  return (
    <>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <section className="signpage-container">
        <section className="form-container">
          <form className="signup-form">
            <FirstName
              userRef={userRef}
              firstName={firstName}
              setFirstName={setFirstName}
              validFirstName={validFirstName}
              setFirstNameFocus={setFirstNameFocus}
              firstNameFocus={firstNameFocus}
            />
            <LastName
              userRef={userRef}
              lastName={lastName}
              setLastName={setLastName}
              validLastName={validLastName}
              setLastNameFocus={setLastNameFocus}
              lastNameFocus={lastNameFocus} 
            />
            <Email
              userRef={userRef}
              email={email}
              setEmail={setEmail}
              validEmail={validEmail}
              setEmailFocus={setEmailFocus}
              emailFocus={emailFocus}
            />
            <Password
              userRef={userRef}
              pwd={pwd}
              setPwd={setPwd}
              validPwd={validPwd}
              setPwdFocus={setPwdFocus}
              pwdFocus={pwdFocus}
            />
            <PasswordConfirm
              userRef={userRef}
              matchPwd={matchPwd}
              setMatchPwd={setMatchPwd}
              validMatch={validMatch}
              setMatchFocus={setMatchFocus}
              matchFocus={matchFocus}
            />
            <button>
              Sign Up
            </button>
          </form>
        </section>
      </section>
    </>
  )
}

const FirstName = ({ userRef, firstName, setFirstName, validFirstName, setFirstNameFocus, firstNameFocus }) => (
  <div className="rel3">
    <input
      id="firstname"
      type="text"
      autoComplete="off"
      spellCheck="false"
      dir="ltr"
      ref={userRef}
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="signup-input"
      required
      aria-describedby="firstnamenote"
      aria-invalid={validFirstName ? "false" : "true"}
      onFocus={() => setFirstNameFocus(true)}
      onBlur={() => setFirstNameFocus(false)}
    />
    <span className="signup-input-placeholder">
      {t("sign_up_first_name")}
    </span>
    <div id="firstnamenote" className={firstNameFocus && firstName && !validFirstName ? "invalid" : "offscreen"} >
      <ErrorLogo/>
      Enter first name
    </div>
  </div>
)

const LastName = ({ userRef, lastName, setLastName, validLastName, setLastNameFocus, lastNameFocus }) => (
  <div className="rel3">
  <input
    id="lastname"
    type="text"
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    ref={userRef}
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    className="signup-input"
    required
    aria-describedby="lastnamenote"
    aria-invalid={validLastName ? "false" : "true"}
    onFocus={() => setLastNameFocus(true)}
    onBlur={() => setLastNameFocus(false)}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_last_name")}
  </span>
  <div id="lastnamenote" className={lastNameFocus && lastName && !validLastName ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    Enter last name
  </div>
</div>
)

const Email = ({ userRef, email, setEmail, validEmail, setEmailFocus, emailFocus }) => (
  <div className="rel3">
  <input
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    ref={userRef}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="signup-input"
    required
    aria-describedby="emailnote"
    aria-invalid={validEmail ? "false" : "true"}
    onFocus={() => setEmailFocus(true)}
    onBlur={() => setEmailFocus(false)}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_email")}
  </span>
  <div id="emailnote" className={emailFocus && email && !validEmail ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    Enter your email address
  </div>
</div>
)

const Password = ({ userRef, pwd, setPwd, validPwd, setPwdFocus, pwdFocus }) => (
  <div className="rel3">
  <input 
    type="password"
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    ref={userRef}
    value={pwd}
    onChange={(e) => setPwd(e.target.value)}
    className="signup-input"
    required
    aria-describedby="pwdnote"
    aria-invalid={validPwd ? "false" : "true"}
    onFocus={() => setPwdFocus(true)}
    onBlur={() => setPwdFocus(false)}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_password")}
  </span>
  <div id="pwdnote" className={pwdFocus && pwd && !validPwd ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    Enter a password
  </div>
</div>
)

const PasswordConfirm = ({ userRef, matchPwd, setMatchPwd, validMatch, setMatchFocus, matchFocus }) => (
  <div className="rel3">
  <input 
    type="password"
    autoComplete="off"
    spellCheck="false"
    dir="ltr"
    ref={userRef}
    value={matchPwd}
    onChange={(e) => setMatchPwd(e.target.value)}
    className="signup-input"
    required
    aria-describedby="pwdmatchnote"
    aria-invalid={validMatch ? "false" : "true"}
    onFocus={() => setMatchFocus(true)}
    onBlur={() => setMatchFocus(false)}
  />
  <span className="signup-input-placeholder">
    {t("sign_up_confirm")}
  </span>
  <div id="pwdmatchnote" className={matchFocus && matchPwd && !validMatch ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    Confirm your password
  </div>
</div>
)

const ErrorLogo = () => (
  <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
  </svg>
)
