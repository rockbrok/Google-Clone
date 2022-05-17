import { useContext } from "react";
import { UserContext } from "../../../usercontext";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  const user = useContext(UserContext);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const gender = obj[0].gender;
  const dateOfBirth = obj[0].dateOfBirth;
  const password = obj[0].password;
  const letter = firstName.charAt(0).toUpperCase();
  const URL = "http://localhost:5000/users?email=" + email;

  return (
    <>
    <h6>Info about you and your preferences across Google services</h6>

    <h1>Your profile info in Google services</h1>
    <h3>Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</h3>

    <h6>Basic info</h6>
    <p>Some info may be visible to other people using Google services.&nbsp;
      <a>Learn more</a>
    </p>
    <button className="manage-account-button">
      <Link to="/myaccount/name">
        Name {firstName}&nbsp;{lastName}
        </Link>
    </button><br />
    <button className="manage-account-button">Birthday {dateOfBirth}</button><br />
    <button className="manage-account-button">Gender {gender}</button><br />

    <h6>Contact info</h6>
    <button className="manage-account-button">Email {email}</button>

    <h1>Other info and preferences for Google services</h1>
    <h3>Ways to verify it’s you and settings for the web</h3>

    <h6>Password</h6>
    <p>A secure password helps protect your Google Account</p>
    <button className="manage-account-button">Password {password}</button>

    <h6>General preferences for the web</h6>
    <p>Manage settings for Google services on the web</p>
    <p>GlobeIcon Language   English (United States)</p>
    </>
  )
}
