import AccountHeader from "../Header";
import axios from "axios";
import { t } from 'i18next';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BackArrow } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";

export default function Birthday() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const id = obj[0].id;
  const gender = obj[0].gender;
  const month = obj[0].month;
  const day = obj[0].day;
  const year = obj[0].year;
  const password = obj[0].password;
  const URL = "http://localhost:5000/users/" + id;

  const [value, setValue] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
    month: month,
    day: day,
    year: year,
    password: password,
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
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          gender: value.gender,
          month: value.month,
          day: value.day,
          year: value.year,
          password: value.password,
        },
        headers: { "Content-Type": "application/json"},
      });
      var userObject = []
      userObject[0] = { 
        'firstName': value.firstName, 
        'lastName': value.lastName, 
        'email': value.email, 
        'gender': value.gender, 
        'month': value.month, 
        'day': value.day, 
        'year': value.year, 
        'password': value.password, 
        'id': id 
      }
      localStorage.setItem("user", JSON.stringify(userObject));
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
                month={month}
                day={day}
                year={year}
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
        <div className="account-subhead-text">Birthday</div>
      </div>
    </div>
  </div>
)

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
      <option value="" defaultValue disabled hidden />
      <option value={t("months.1")}>{t("months.1")}</option>
      <option value={t("months.2")}>{t("months.2")}</option>
      <option value={t("months.3")}>{t("months.3")}</option>
      <option value={t("months.4")}>{t("months.4")}</option>
      <option value={t("months.5")}>{t("months.5")}</option>
      <option value={t("months.6")}>{t("months.6")}</option>
      <option value={t("months.7")}>{t("months.7")}</option>
      <option value={t("months.8")}>{t("months.8")}</option>
      <option value={t("months.9")}>{t("months.9")}</option>
      <option value={t("months.10")}>{t("months.10")}</option>
      <option value={t("months.11")}>{t("months.11")}</option>
      <option value={t("months.12")}>{t("months.12")}</option>
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

const Buttons = ({ month, year, day, value }) => (
  <div className="form-button-row">
    <button className="cancel">
      <Link to="/myaccount/personalinfo/" className="cancel-link no-deco">
        Cancel
      </Link>
    </button>
    <button type="submit" className="next" disabled={ month === value.month && year === value.year && day === value.day }>Save</button>
  </div>
)