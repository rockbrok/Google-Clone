import { useRef, useState, useEffect } from "react";
import { t } from 'i18next';
import { validate } from "schema-utils";

const NAME_REGEX = /^[a-z,A-Z ,.'-]{2,16}$/;
const EMAIL_REGEX =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]){8,24}$/;

export const EMAIL1_REGEX = /@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function Register () {
  const errRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validEmail1, setValidEmail1] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

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
    const result = EMAIL1_REGEX.test(email);
    setValidEmail1(result);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = NAME_REGEX.test(firstName, lastName);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd, matchPwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(firstName, lastName, email, pwd);
    setSuccess(true);
  }

  return (
    <>
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
      <section className="signpage-container">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <section className="form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="name-row">
              <FirstName
                firstName={firstName}
                setFirstName={setFirstName}
                validFirstName={validFirstName}
                lastName={lastName}
                validLastName={validLastName}
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
            />
            <div className="name-row">
              <Password
                pwd={pwd}
                setPwd={setPwd}
                validPwd={validPwd}
              />
              <PasswordConfirm
                matchPwd={matchPwd}
                setMatchPwd={setMatchPwd}
                validMatch={validMatch}
              />
            </div>
            <button>
              Sign Up
            </button>
          </form>
        </section>
      </section>
      )}
    </>
  )
}

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
    <div id="firstnamenote" className={firstName === '' ? "invalid" : "offscreen"} >
      <ErrorLogo/>
      <p className="invalidtext">Enter first name</p>
    </div>
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
  <div id="lastnamenote" className={lastName === '' ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Enter last name</p>
  </div>
</div>
)

const Email = ({ email, setEmail, validEmail, validEmail1 }) => (
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
  <div id="emailnote" className={email === '' ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Enter your email address</p>
  </div>

  <div id="emailnote" className={email && validEmail1 ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Enter a user name before the '@'.</p>
  </div>

  <div id="emailnote" className={email && !validEmail && !validEmail1 ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">This email address is not valid.</p>
  </div>
  <div id="emailnote" className={email && validEmail ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">This email address is valid.</p>
  </div>
</div>
)

const Password = ({ pwd, setPwd, validPwd }) => (
  <div className="input-container">
  <input 
    type="password"
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
  <div id="pwdnote" className={pwd === '' ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Enter a password</p>
  </div>
  <div id="pwdnote" className={pwd && !validPwd ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Use 8 characters or more for your password</p>
  </div>
</div>
)

const PasswordConfirm = ({ matchPwd, setMatchPwd, validMatch }) => (
  <div className="input-container">
  <input 
    type="password"
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
  <div id="pwdmatchnote" className={matchPwd === '' ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Confirm your password</p>
  </div>
  <div id="pwdmatchnote" className={matchPwd && !validMatch ? "invalid" : "offscreen"}>
    <ErrorLogo/>
    <p className="invalidtext">Those passwords didn’t match. Try again.</p>
  </div>
</div>
)

const ErrorLogo = () => (
  <div className="invalidlogo">
    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>
  </div>
)
