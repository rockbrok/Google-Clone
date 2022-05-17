import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BackArrow } from "../Home";
import AccountHeader from "../Header";

export default function Name() {
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

  return (
    <>
    <AccountHeader />
    <SubHeading />
    <p>Changes to your name will be reflected across your Google Account.
      &nbsp;<a>Learn more</a>
    </p>

    <h3>CHANGE NAME</h3>
    <form onSubmit={handleSubmit} noValidate>
    <div className="input-container">
          <input 
            {...register("firstName", {
              required: true,
              minLength: 2,
              maxLength: 16,
              pattern: /^[a-z,A-Z ,.'-]{2,16}$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="firstName"
            type="text"
            placeholder={firstName}
            value={value.firstName}
            onChange={handleChange}
            className={(
              errors.firstName?.type === "pattern" ||
              errors.firstName?.type === "minLength" ||
              errors.firstName?.type === "maxLength" ||
              errors.firstName?.type === "validate" ||
              errors.firstName?.type === "required")
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          <span className="signup-input-placeholder">
            First Name
          </span>
        </div>
        <div className="input-container">
          <input 
            {...register("lastName", {
              required: true,
              minLength: 2,
              maxLength: 16,
              pattern: /^[a-z,A-Z ,.'-]{2,16}$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="lastName"
            type="text"
            placeholder={lastName}
            value={value.lastName}
            onChange={handleChange}
            className={(
              errors.lastName?.type === "pattern" ||
              errors.lastName?.type === "minLength" ||
              errors.lastName?.type === "maxLength" ||
              errors.lastName?.type === "validate" ||
              errors.lastName?.type === "required")
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          <span className="signup-input-placeholder">
            Last Name
          </span>
        </div>

    </form>
    <button>
        <Link to="/myaccount/personalinfo">
          Cancel
        </Link>
      </button>
      <button type="submit">Save</button>
    </>
  )
}

const SubHeading = () => (
  <div className="account-subhead">
    <BackArrow />
  <div className="account-subhead-text">Name</div>
</div>
)