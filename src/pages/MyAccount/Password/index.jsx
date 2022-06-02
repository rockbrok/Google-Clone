import AccountHeader from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubHeading } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";

export default function Password() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const password = obj[0].password;
  const URL = "http://localhost:5000/users?email=" + email;

  const [value, setValue] = useState({
    password: password
  })

  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    defaultValues: {
      password: value.password
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
          password: value.password
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

  const validPasswordRegex =  /^(?=.*?[A-Z,a-z]).{8,}$/;
  const emptyStringRegex = /^(?![\s\S])/; // '' //
  const noSpaceStartOrEndRegex = /^[^\s].+[^\s]$/;

  return (
    <>
      <Helmet>
        <title>Password</title>
      </Helmet>
      <AccountHeader />
      <div className="form-bord-bot" />
      <section className="account-page-row-blue">
      <SubHeading />
        <section className="account-flex-form-wrap">
          <SubHeadNote />
          <section className="account-flex-form">
            <TopNote />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <PasswordInput
                value={value}
                handleChange={handleChange}
                register={register}
                errors={errors}
                emptyStringRegex={emptyStringRegex}
                noSpaceStartOrEndRegex={noSpaceStartOrEndRegex}
                validPasswordRegex={validPasswordRegex}
              />
              <PasswordConfirmInput
                value={value}
                handleChange={handleChange}
                register={register}
                errors={errors}
                emptyStringRegex={emptyStringRegex}
                watch={watch}
                validPasswordRegex={validPasswordRegex}
              />
              <Note />
              <Buttons 
                value={value}
              />
            </form>
          </section>
        </section>
       </section>
    </>
  )
}

const SubHeadNote = () => (
  <div className="top-note subhead-note font-16">
    Choose a strong password and don't reuse it for other accounts.&nbsp;
    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">More information</a>
  </div>
)

const TopNote = () => (
  <div className="top-note font-12 capitalize">
    Update Password
  </div>
)

const PasswordInput = ({ register, emptyStringRegex, noSpaceStartOrEndRegex, validPasswordRegex, handleChange, errors }) => (
  <div className="input-container">
    <input 
      {...register("password", {
        required: true,
        minLength: 8,
        validate: {
          emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
          noSpaceStartOrEnd: (value) => noSpaceStartOrEndRegex.test(value) ? true : false,
          validPassword: (value) => validPasswordRegex.test(value) ? true : false
        }
      })}
      autoComplete="off"
      name="password"
      id="password"
      type="password"
      onChange={handleChange}
      className={(
        errors.password?.type === "minLength" ||
        errors.password?.type === "required" ||
        errors.password?.type === "noSpaceStartOrEnd")
        ? "change-form-input-error" : "change-form-input"
      }
      aria-invalid={errors.password ? "true" : "false"}
    />
    <div className="change-form-placeholder">
      New Password
    </div>
  </div>
)

const PasswordConfirmInput = ({ register, emptyStringRegex, watch, validPasswordRegex, errors }) => (
  <div className="input-container">
    <input 
      {...register("passwordConfirm", {
        required: true,
        minLength: 8,
        validate: {
          emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
          passwordConfirm: (value) => value === watch('password') ? true : false,
          validPassword: (value) => validPasswordRegex.test(value) ? true : false
        }
      })}
      autoComplete="off"
      name="passwordConfirm"
      id="passwordConfirm"
      type="password"
      className={errors.password && (
        errors.passwordConfirm?.type === "minLength" ||
        errors.passwordConfirm?.type === "required" ||
        errors.passwordConfirm?.type !== "passwordConfirm")
        ? "change-form-input-error" : "change-form-input"
      }
      aria-invalid={errors.passwordConfirm ? "true" : "false"}
    />
    <div className="change-form-placeholder">
      Confirm new password
    </div>
  </div>
)

const Note = () => (
  <div className="top-note">
    Use at least 8 characters. Don't use a password from another site, or something too obvious like your pet's name. 
    <a href="https://support.google.com/accounts/answer/6304920" target="_blank" rel="noreferrer" className="learn-more">Why?</a>
  </div>
)

const Buttons = ({ value }) => (
  <div className="form-button-row">
    <button className="cancel">
      <Link to="/myaccount/personalinfo/" className="cancel-link no-deco">
        Cancel
      </Link>
    </button>
    <button type="submit" className="next" disabled>Save</button>
  </div>
)