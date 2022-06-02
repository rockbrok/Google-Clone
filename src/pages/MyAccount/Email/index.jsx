import AccountHeader from "../Header";
import axios from "axios";
import { t } from 'i18next';
import { ErrorLogo } from "../../SignUp/Email";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { BackArrow } from "../Home";
import { Helmet } from "react-helmet";

import '../style.css';

export default function Email() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const URL = "http://localhost:5000/users?email=" + email;

  const [value, setValue] = useState({
    email: email,
  })

  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      email: value.email,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const currentUser = async () => {
    let response = await axios.get(URL);
    return response.data;
  };

  const onSubmit = async() => {
    try {
      await axios({
        method: "put",
        url: URL,
        data: {
          firstName: value.firstName,
          lastName: value.lastName,  
        },
        headers: { "Content-Type": "application/json"},
      });
      setTimeout(function () {
        window.location.href = "http://localhost:3000/myaccount/personalinfo/";
      }, 250);
    } catch(error) {
      console.log(error.response.data)
    }
    const user = await currentUser();
      setUser(user);
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // user@domain.com //
  const noUsernameRegex = /^@\w+([.-]?\w+)*$/; // @hello //
  const noUsernameDotRegex = /^@\w+([.-]?\w+)*(\.)$/; // @domain. //
  const onlyCharactersRegex = /^\w+([.-]?\w+)*$/; // adsfasdfasdf //
  const noDomainRegex = /^\w+([.-]?\w+)*@$/; // user@ //
  const noAtRegex = /^\w+([.-]?\w+)*(\.)+$/; // user. //
  const noAtWithTopDomainRegex = /^\w+([.-]?\w+)*(\.\w{2,3})+$/; // user.com //
  const emptyStringRegex = /^(?![\s\S])/; // '' //

  return (
    <>
      <Helmet>
        <title>Email</title>
      </Helmet>
      <AccountHeader />
      <div className="form-bord-bot" />
      <section className="account-page-row-blue">
        <SubHeading />
        <section className="account-flex-form-wrap">
          <SubHeadNote />
          <section className="account-flex-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <EmailInput 
                register={register}
                value={value}
                errors={errors}
                handleChange={handleChange}
                noUsernameRegex={noUsernameRegex}
                noUsernameDotRegex={noUsernameDotRegex}
                onlyCharactersRegex={onlyCharactersRegex}
                validEmailRegex={validEmailRegex}
                noDomainRegex={noDomainRegex}
                noAtWithTopDomainRegex={noAtWithTopDomainRegex}
                noAtRegex={noAtRegex}
                emptyStringRegex={emptyStringRegex}
              />
              <EmailErrors
                errors={errors}
              />
              <Buttons 
                email={email}
                value={value}
              />
            </form>
      </section>
        </section>
       </section>
    </>
  )
}

const SubHeading = () => (
  <div className="nav-contain-blue nav-contain-no-bord">
    <div className="navbar-form-wrap">
      <div className="account-subhead">
        <BackArrow />
        <div className="account-subhead-text">Email</div>
      </div>
    </div>
  </div>
)

const SubHeadNote = () => (
  <div className="top-note subhead-note font-16">
    The address used to identify your Google Account to you and others.&nbsp;
    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">More information</a>
  </div>
)

const EmailInput = ({ register, value, errors, handleChange, noUsernameRegex, noUsernameDotRegex, onlyCharactersRegex, validEmailRegex, noDomainRegex, noAtWithTopDomainRegex, noAtRegex, emptyStringRegex }) => (
  <div className="input-container">
  <input 
    {...register("email", {
      required: true,
      validate: {
        noUsername: (value) => noUsernameRegex.test(value) ? false : true, // @domain //
        noUsernameDot: (value) => noUsernameDotRegex.test(value) ? false : true, // @domain. //
        onlyCharacters: (value) => onlyCharactersRegex.test(value) ? false : true, // abcdefg //
        validEmail: (value) => validEmailRegex.test(value) ? true : false, // user@domain.com //
        noDomain: (value) => noDomainRegex.test(value) ? false : true, // user@ //
        noAt: (value) => noAtRegex.test(value) ? false : true, // user. //
        noAtWithTopDomain : (value) => noAtWithTopDomainRegex.test(value) ? false : true, // user.com // 
        emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
      }
    })}
    autoComplete="off"
    name="email"
    type="email"
    value={value.email}
    onChange={handleChange}
    className={(errors.email?.type === "validEmail" || 
    errors.email?.type === "noUsername" ||
    errors.email?.type === "noUsernameDot" ||
    errors.email?.type === "onlyCharacters" ||
    errors.email?.type === "noDomain" ||
    errors.email?.type === "required" ||
    errors.email?.type === "noAt" ||
    errors.email?.type === "emptyString" ||
    errors.email?.type === "noAtWithTopDomain" ||
    errors.email?.type === "checkEmail")
      ? "change-form-input-error" : "change-form-input"
    }
    aria-invalid={errors.email ? "true" : "false"}
  />
  <div className="change-form-placeholder">
    New email
  </div>
</div>
)

const EmailErrors = ({ errors }) => {
  if (errors.email?.type === "required" ||
    errors.email?.type === "emptyString") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">{t("sign-up.email-errors.enter_email")}</p>
      </div>
    )
  } else if (errors.email?.type === "noUsername" || 
    errors.email?.type === "noUsernameDot") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">{t("sign-up.email-errors.enter_username")}</p>
      </div>
    )
  } else if (errors.email?.type === "onlyCharacters" ||
    errors.email?.type === "noAt" ||
    errors.email?.type === "noAtWithTopDomain") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">{t("sign-up.email-errors.enter_at")}</p>
      </div>
    )
  } else if (errors.email?.type === "checkEmail") {
    return (
      <div className="invalid">
      <ErrorLogo/>
      <p className="invalidtext">{t("sign-up.email-errors.email_exists")}</p>
    </div>
    )
  } else if (errors.email?.type === "validEmail" && ( 
    errors.email?.type !== "noUsername" ||
    errors.email?.type !== "noUsernameDot" ||
    errors.email?.type !== "onlyCharacters" ||
    errors.email?.type !== "noDomain" ||
    errors.email?.type !== "noAt" ||
    errors.email?.type !== "noAtWithTopDomain")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">{t("sign-up.email-errors.not_valid")}</p>
      </div>
    )
  }
}

const Buttons = ({ email, value }) => (
  <div className="form-button-row">
    <button className="cancel">
      <Link to="/myaccount/personalinfo/" className="cancel-link no-deco">
        Cancel
      </Link>
    </button>
    <button type="submit" className="next" disabled={ email === value.email }>Save</button>
  </div>
)
