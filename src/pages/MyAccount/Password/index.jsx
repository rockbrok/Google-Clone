import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Password() {
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



  const validPasswordRegex =  /^(?=.*?[A-Z,a-z]).{8,}$/;
  const emptyStringRegex = /^(?![\s\S])/; // '' //
  const noSpaceStartOrEndRegex = /^[^\s].+[^\s]$/;

  return (
    <>
    <button>
      <Link to="/myaccount/personalinfo/">
        Back
      </Link>
    </button>
    <h1>Password</h1>
    <p>Choose a strong password and don't reuse it for other accounts.
      &nbsp;<a>Learn more</a>
    </p>

    <form onSubmit={handleSubmit} noValidate>
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
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.password ? "true" : "false"}
          />
          <span className="signup-input-placeholder">
            New password
          </span>
        </div>
        <div>
        Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name. 
        &nbsp;<a>Why?</a>
        </div>
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
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.passwordConfirm ? "true" : "false"}
          />
          <span className="signup-input-placeholder">
            Confirm new password
          </span>
        </div>
    </form>
    <button type="submit">Change password</button>
    </>
  )
}