import { useContext } from "react";
import { UserContext } from "../../usercontext";
import { Link } from "react-router-dom";

import './style.css';

export default function UserPanel() {
  const user = useContext(UserContext);

  var obj = JSON.parse(localStorage.getItem('user'));
  let firstName = obj[0].firstName;
  let lastName = obj[0].lastName;
  let email = obj[0].email;

  let letter = firstName.charAt(0).toUpperCase();

  let URL = "http://localhost:5000/users?email=" + email;

  const SignOut = () => {
    localStorage.setItem('user', null);
    setTimeout(function () {
      window.location.reload();
    }, 150);
  }

  return (
    <div className="user-panel">
      <div className="icon-2" />
      <div className="user-info">
        <div className="user-info-name">{firstName} {lastName}</div>
        <div className="user-info-email">{email}</div>
      </div>
      <button className="manage-account-button">
        <Link to="/myaccount/">
          Manage your Google Account
        </Link>
      </button>
      <button className="signout-button" onClick={SignOut}>
        Sign out
      </button>
      <div className="user-links">
        <Privacy />
        <span className="user-panel-link-dot">&nbsp;•&nbsp;</span>
        <Terms />
      </div>
    </div>    
  )
}

const A = () => (
  <div className="icon-2" />
)

const Privacy = () => (
  <button className="user-panel-link">
    <a rel="noreferrer" target="_blank" href="https://policies.google.com/privacy?hl=en">Privacy Policy</a>
  </button>
)

const Terms = () => (
  <button className="user-panel-link">
    <a rel="noreferrer" target="_blank" href="https://policies.google.com/terms?hl=en">Terms of Service</a>
  </button>
)