import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Birthday() {
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
    <button>
      <Link to="/myaccount/personalinfo/">
        Back
      </Link>
    </button>
    <h1>Birthday</h1>
    <p>Your birthday may be used for account security and personalization across Google services. If this Google Account is for a business or organization, use the birthday of the person who manages the account.
      &nbsp;<a>Learn more</a>
    </p>

    <h3>UPDATE BIRTHDAY</h3>
    <form onSubmit={handleSubmit} noValidate>
    <div className="birthday-row">
        <div className="input-container">
          <select 
            {...register("month", {
              required: true
            })}
            className="signup-input" 
            name="month"
            type="month"
            size="1"
            onChange={handleChange}
            value={value.month}
          >
            <option value="" className="signup-input-placeholder" defaultValue disabled hidden />
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <span className="signup-input-placeholder">
            ''
          </span>
        </div>
        <div className="input-container">
          <input 
            {...register("day", {
              required: true,
              minLength: 1,
              maxLength: 2,
              pattern: /[0-9]$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="day"
            type="number"
            min="0"
            max="32"
            value={value.day}
            onChange={handleChange}
            className="signup-input"
          />
          <span className="signup-input-placeholder">
            Day
          </span>
        </div>
        <div className="input-container">
          <input 
            {...register("year", {
              required: true,
              minLength: 4,
              maxLength: 4,
              pattern: /[0-9]{4}$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="year"
            type="number"
            min="1900"
            max="2022"
            value={value.year}
            onChange={handleChange}
            className="signup-input"
          />
          <span className="signup-input-placeholder">
            Year
          </span>
        </div>
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