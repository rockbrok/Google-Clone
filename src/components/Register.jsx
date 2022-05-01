import { useRef, useState, useEffect } from "react";
import { t } from 'i18next';
import { validate } from "schema-utils";

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

export default function Register () {
  const errRef = useRef();

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

  const [errMsg, setErrMsg] = useState('');
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

  useEffect(() => {
    setErrMsg('');
  }, [firstName, lastName, email, pwd, matchPwd])

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
          <form onSubmit={handleSubmit} className="signup-form" noValidate>
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

const ErrorLogo = () => (
  <div className="invalidlogo">
    <svg aria-hidden="true" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>
  </div>
)
