import { currentUserURL } from "../SignUp/Details/Form";
import { useContext } from "react";
import { UserContext } from "../../usercontext";
import axios from "axios";

import './style.css';

export default function DeleteAccount() {
  const user = useContext(UserContext);

  var obj = JSON.parse(localStorage.getItem('user'));
  let firstName = obj[0].firstName;
  let lastName = obj[0].lastName;
  let email = obj[0].email;
  let dateOfBirth = obj[0].dateOfBirth;
  let password = obj[0].password;

  let letter = firstName.charAt(0).toUpperCase();

  let URL = "http://localhost:5000/users?email=" + email;

  function deleteUser() { 
    axios.delete(URL)
    return;
  }


  return (
    <>
    { user ? 
      <>
        <A />
        <p>{letter}</p>
        <p>Name: {firstName} {lastName}</p>
        <p>Email: {email}</p>
        <p>Birthdate: {dateOfBirth}</p>
        <p>Password: {password}</p>
      </>
      : ('') }
      <button onClick={() => deleteUser()}>
        Delete account
      </button>
      
    </>
 
  )
}

const A = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 0px',}} />
)

const B = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -32px',}} />
)

const C = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -64px',}} />
)

const D = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -96px',}} />
)

const E = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -128px',}} />
)

const F = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -160px',}} />
)

const G = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -192px',}} />
)

const H = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -224px',}} />
)

const I = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -256px',}} />
)

const J = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -288px',}} />
)

const K = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -320px',}} />
)

const L = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -352px',}} />
)

const M = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -384px',}} />
)

const N = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -416px',}} />
)

const O = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -448px',}} />
)

const P = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -480px',}} />
)

const Q = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -512px',}} />
)

const R = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -544px',}} />
)

const S = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -576px',}} />
)

const T = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -608px',}} />
)

const U = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -640px',}} />
)

const V = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -672px',}} />
)

const W = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -704px',}} />
)

const X = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -736px',}} />
)

const Y = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -768px',}} />
)

const Z = () => (
  <span className="profile-icons" style={{'backgroundPosition': '0 -800px',}} />
)