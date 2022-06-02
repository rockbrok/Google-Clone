import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SubHeading } from "../Home";
import { Helmet } from "react-helmet";
import AccountFooter from "../../../components/AccountFooter";
import AccountHeader from "../Header";

import '../style.css';

export default function Email() {
  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      month: '',
      gender: '',
      day: '',
      year: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    month: '',
    gender: '',
    day: '',
    year: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const letter = firstName.charAt(0).toUpperCase();
  const URL = "http://localhost:5000/users?email=" + email;

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
      <SubHeading />
      <section className="account-flex-2">
        <div className="account-flex-sect">
        The address used to identify your Google Account to you and others.&nbsp;
          <a className="learn-more">
            Learn more
          </a>
        </div>
        <div className="account-flex-form">
    <div className="birthday-row">
      <h3>{email}</h3>
      PencilIcon
    </div>

    <h3>Change Google Account email</h3>
    <form onSubmit={handleSubmit} noValidate>
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
          className={errors.email?.type !== "validEmail" && (
            errors.email?.type !== "noUsername" ||
            errors.email?.type !== "noUsernameDot" ||
            errors.email?.type !== "onlyCharacters" ||
            errors.email?.type !== "noDomain" ||
            errors.email?.type !== "required" ||
            errors.email?.type !== "noAt" ||
            errors.email?.type !== "emptyString" ||
            errors.email?.type !== "noAtWithTopDomain")
            ? "signup-input-error" : "signup-input"
          }
          aria-invalid={errors.email ? "true" : "false"}
        />
        <span className="signup-input-placeholder">
          New email
        </span>
      </div>
       
    </form>
    <button>
        <Link to="/myaccount/email/">
          Cancel
        </Link>
      </button>
      <button type="submit">Save</button>
      </div>
      </section>
      <AccountFooter />
    </>
  )
}
