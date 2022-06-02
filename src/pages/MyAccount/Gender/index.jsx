import AccountHeader from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BackArrow } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";

import './style.css';

export default function Gender() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const gender = obj[0].gender;
  const URL = "http://localhost:5000/users?email=" + email;

  const [value, setValue] = useState({
    gender: gender,
  })

  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      gender: '',
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
              <GenderInput 
                register={register}
                handleChange={handleChange}
                value={value}
              />
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

const SubHeading = () => (
  <div className="nav-contain-blue nav-contain-no-bord">
    <div className="navbar-form-wrap">
      <div className="account-subhead">
        <BackArrow />
        <div className="account-subhead-text">Gender</div>
      </div>
    </div>
  </div>
)

const SubHeadNote = () => (
  <div className="top-note subhead-note font-16">
    Your gender may be used for personalization across Google services, including how we refer to you.&nbsp;
    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">More information</a>
  </div>
)

const TopNote = () => (
  <div className="top-note font-12">
    Gender
  </div>
)

const GenderInput = ({ register, handleChange, value }) => (
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
)

const Buttons = ({ firstName, lastName, value }) => (
  <div className="form-button-row">
    <button className="cancel">
      <Link to="/myaccount/personalinfo/" className="cancel-link no-deco">
        Cancel
      </Link>
    </button>
    <button type="submit" className="next" disabled={ firstName === value.firstName && lastName === value.lastName }>Save</button>
  </div>
)