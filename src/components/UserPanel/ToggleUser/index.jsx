import OutsideClickHandler from 'react-outside-click-handler';
import UserPanel from './../';
import { useContext } from "react";
import { UserContext } from "../../../usercontext";
import { useState } from 'react';

export default function ToggleUser() {
  const user = useContext(UserContext);

  var obj = JSON.parse(localStorage.getItem('user')) || '';
  let firstName = (localStorage.getItem('user') !== null) ? obj[0].firstName : '';
  let lastName = (localStorage.getItem('user') !== null) ? obj[0].lastName : '';
  let email = (localStorage.getItem('user') !== null) ? obj[0].email : '';

  const [show, setShow] = useState(false)
  const [showTitle, setShowTitle] = useState(false);

  return (
    <li className="pl">
      <OutsideClickHandler onOutsideClick={() => { setShow(false) }}>
        <button onClick={() => setShow(!show)} alt="Google account">
          <AccountButton setShowTitle={setShowTitle} showTitle={showTitle} show={show} firstName={firstName} lastName={lastName} email={email}/>
        </button>
        { show ? <UserPanel/> : null }
      </OutsideClickHandler>
    </li>
  )
}

const AccountButton = ({ show, showTitle, setShowTitle, firstName, lastName, email }) => (
  <A
    onMouseEnter={!show ? (e) => setShowTitle(true) : (e) => setShowTitle(false)}
    onMouseLeave={(e) => setShowTitle(false)}
    onClick={(e) => setShowTitle(false)}
    >
    <Title showTitle={showTitle} firstName={firstName} lastName={lastName} email={email}/>
  </A>
);

const A = () => (
  <div className="header-user-icon">
    <span className="profile-icons user-icon" style={{'backgroundPosition': '0 0px',}} />
  </div>
)

const Title = ({ showTitle, firstName, lastName, email }) => (
  <div className="title fade-in" style={{ display: showTitle ? "block" : "none" }}>
    Google Account<br />
    {firstName} {lastName}<br />
    {email}
  </div>
);

