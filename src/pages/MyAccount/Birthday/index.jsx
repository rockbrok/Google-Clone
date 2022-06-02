import AccountHeader from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubHeading } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";

export default function Birthday() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const month = obj[0].month;
  const day = obj[0].day;
  const year = obj[0].year;
  const URL = "http://localhost:5000/users?email=" + email;

  const [value, setValue] = useState({
    month: month,
    day: day,
    year: year
  })

  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      month: value.month,
      day: value.day,
      year: value.year,
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
          month: value.month,
          day: value.day,
          year: value.year,
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

  return (
    <>
      <Helmet>
        <title>Birthday</title>
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
              <div className="birthday-row">
                <Month
                  value={value}
                  handleChange={handleChange}
                  register={register}
                  errors={errors}
                />
                <Day
                  value={value}
                  handleChange={handleChange}
                  register={register}
                  errors={errors}
                />
                <Year
                  value={value}
                  handleChange={handleChange}
                  register={register}
                  errors={errors}
                />
              </div>
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
    Your birthday may be used for account security and personalization across Google services. If this Google Account is for a business or organization, use the birthday of the person who manages the account.&nbsp;
    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">More information</a>
  </div>
)

const TopNote = () => (
  <div className="top-note font-12 capitalize">
    Update Date of Birth
  </div>
)

const Month = ({ register, handleChange, value }) => (
  <div className="input-container">
    <select 
      {...register("month", {
        required: true
      })}
      className="change-form-input" 
      name="month"
      type="month"
      size="1"
      onChange={handleChange}
      value={value.month}
    >
      <option value="" className="change-form-input-placeholder" defaultValue disabled hidden />
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
    <div className="change-form-placeholder">
      Month
    </div>
  </div>
)

const Day = ({ register, handleChange, value }) => (
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
      className="change-form-input"
    />
    <div className="change-form-placeholder">
      Day
    </div>
  </div>
)

const Year = ({ register, handleChange, value }) => (
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
      className="change-form-input"
    />
    <div className="change-form-placeholder">
      Year
    </div>
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