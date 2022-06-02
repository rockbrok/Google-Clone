import AccountHeader from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { UserContext } from "../../../usercontext";
import { Helmet } from "react-helmet";
import { BackArrow } from "../Home";

export default function DeleteAccount() {
  const { setUser } = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const URL = "http://localhost:5000/users?email=" + email;
  const deleteCheck = true;

  const [value, setValue] = useState({
    deleteCheck: deleteCheck,
  })

  const {register, handleSubmit } = useForm({
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
        method: "delete",
        url: URL,
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
        <title>Delete Account</title>
      </Helmet>
      <AccountHeader />
      <div className="form-bord-bot" />
      <section className="account-page-row-blue">
        <SubHeading />
        <section className="account-flex-form-wrap">
          <SubHeadNote />
          <section className="account-flex-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <DeleteInput 
                register={register}
                handleChange={handleChange}
                value={value}
              />
              <Buttons
                value={value}
                handleChange={handleChange}
                deleteCheck={deleteCheck}
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
        <div className="account-subhead-text">Delete account</div>
      </div>
    </div>
  </div>
)

const SubHeadNote = () => (
  <div className="top-note subhead-note font-16">
    You're trying to delete your Google Account, which provides access to various Google services. You'll no longer be able to use any of those services, and your account and data will be lost.&nbsp;
    <a href="https://support.google.com/accounts/answer/27442" target="_blank" rel="noreferrer" className="learn-more">More information</a>
  </div>
)

const DeleteInput = ({ register, handleChange, value }) => (
  <div className="input-container">
    <label className="pass-container">
      <input 
        {...register("deleteAccount", {
          required: true,
        })}
        name="deleteAccount"
        type="checkbox"
        className="password-checkbox"
        onChange={handleChange}
        value={value.deleteCheck}
      />
      <div className="checkmark"/>
      Yes, I want to permanently delete this Google Account and all its data.
    </label>
  </div>
)

const Buttons = ({ value, deleteCheck }) => (
  <div className="form-button-row">
    <button className="cancel">
      <Link to="/myaccount/data-and-personalization/" className="cancel-link no-deco">
        Cancel
      </Link>
    </button>
    <button type="submit" className="next" disabled={deleteCheck !== value.deleteCheck}>DELETE ACCOUNT</button>
  </div>
)