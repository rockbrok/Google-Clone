import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { BackArrow } from "../Home";
import AccountHeader from "../Header";
import AccountFooter from "../../../components/AccountFooter";

export default function Gender() {
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
    <Helmet>
        <title>Birthday</title>
      </Helmet>
      <AccountHeader />
      <SubHeading />
      <section className="account-flex-2">
        <div className="account-flex-sect">
        Your gender may be used for personalization across Google services, including how we refer to you.&nbsp;
          <a className="learn-more">
            Learn more
          </a>
        </div>
        <div className="account-flex-form">
    <h3>GENDER</h3>
    <form onSubmit={handleSubmit} noValidate>
    <div className="input-container">
        <select 
          {...register("gender", {
            required: true
          })}
          className="signup-input"
          name="gender"
          size="1"
          onChange={handleChange}
          value={value.gender}
        >
          <option value="" className="signup-input-placeholder" defaultValue disabled hidden />
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span className="signup-input-placeholder">
          ''
        </span>
      </div>
    </form>
    <button>
        <Link to="/myaccount/personalinfo">
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

const SubHeading = () => (
  <>
    <div className="account-subhead-wrap">
      <div className="account-subhead">
        <BackArrow />
        <div className="account-subhead-text">Gender</div>
      </div>
    </div>
    <div className="account-subhead-divider" />
  </>
)