import AccountHeader from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BackArrow } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";
import { UsersIcon } from "@heroicons/react/solid";

import './style.css';

export default function Name() {
  const { setUser } = useContext(UserContext);

  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const [value, setValue] = useState({
    firstName: '',
    lastName: ''
  })

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const URL = "http://localhost:5000/users?email=" + email;

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
        <title>Name</title>
      </Helmet>
        <AccountHeader />
        <div className="form-bord-bot" />
          <section className="account-page-row-blue">

              <SubHeading />
              <section className="blue-form-flex">

                  <div className="account-flex-form">
                    <span>Changes to your name will be reflected across your Google Account.&nbsp;</span>
                    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">Learn more.</a>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <FirstName
                        value={value}
                        firstName={firstName}
                        handleChange={handleChange}
                        register={register}
                        errors={errors}
                      />
                      <LastName
                        value={value}
                        lastName={lastName}
                        handleChange={handleChange}
                        register={register}
                        errors={errors}
                      />
                      
                    <h3>Who can see your name</h3>
                    <div className="users-row">
                      <UsersIcon className="users-icon"/>
                      <div className="users-note">
                        <span>Anyone can see this info when they communicate with you or view content you create in Google services.&nbsp;</span>
                        <a href="https://support.google.com/accounts/answer/6304920" target="_blank" rel="noreferrer" className="learn-more">Learn more.</a>
                      </div>
                    </div>

                  <div className="form-button-row">
                    <Cancel />
                    <button type="submit" className="next">Save</button>
                    </div>
                    </form>
                  </div>
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
        <div className="account-subhead-text">Name</div>
      </div>
    </div>

  </div>
)

const FirstName = ({ register, firstName, handleChange, value, errors }) => (
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
)

const LastName = ({ register, lastName, handleChange, value, errors }) => (
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
)

const Cancel = () => (
  <button>
    <Link to="/myaccount/personalinfo">
      Cancel
    </Link>
  </button>
)