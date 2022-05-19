import AccountHeader from "../Header";
import AccountFooter from "../../../components/AccountFooter";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BackArrow } from "../Home";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";

export default function Name() {
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

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const { user, setUser } = useContext(UserContext);
  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const URL = "http://localhost:5000/users?email=" + email;

  const currentUser = async () => {
    const obj = JSON.parse(localStorage.getItem('user'));
    const email = obj[0].email;
    const URL = "http://localhost:5000/users?email=" + email;
    let response = await axios.get(URL);
    return response.data;
  };

  const onSubmit = async() => {
    try {
      const response = await axios({
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
      return ({...response.data});
    } catch(error) {
      console.log(error.response.data)
    }
    const user = await currentUser();
      setUser(user);
  }

  console.log(watch());

  return (
    <>
      <Helmet>
        <title>Name</title>
      </Helmet>
      <AccountHeader />
      <SubHeading />
      <section className="account-flex-2">
        <div className="account-flex-sect">
        Changes to your name will be reflected across your Google Account.&nbsp;
          <a className="learn-more">
            Learn more
          </a>
        </div>
        <div className="account-flex-form">
    <h3>CHANGE NAME</h3>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <button>
        <Link to="/myaccount/personalinfo">
          Cancel
        </Link>
      </button>
      <button type="submit">Save</button>
    </form>


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
        <div className="account-subhead-text">Name</div>
      </div>
    </div>
    <div className="account-subhead-divider" />
  </>
)