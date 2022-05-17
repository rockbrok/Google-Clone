import OutsideClickHandler from 'react-outside-click-handler';
import UserPanel from './../';
import { useState } from 'react';

export default function ToggleUser() {
  const [show, setShow] = useState(false)
  const [showTitle, setShowTitle] = useState(false);

  const obj = JSON.parse(localStorage.getItem('user'));
  const email = obj[0].email;
  const firstName = obj[0].firstName;
  const lastName = obj[0].lastName;
  const letter = firstName.charAt(0).toUpperCase();
  const URL = "http://localhost:5000/users?email=" + email;

  return (
    <li className="pl">
      <OutsideClickHandler onOutsideClick={() => { setShow(false) }}>
        <button onClick={() => setShow(!show)} alt="Google account">
          <AccountButton setShowTitle={setShowTitle} showTitle={showTitle} show={show} letter={letter} firstName={firstName} lastName={lastName} email={email}/>
        </button>
        { show ? <UserPanel/> : null }
      </OutsideClickHandler>
    </li>
  )
}

const AccountButton = ({ show, showTitle, setShowTitle, firstName, lastName, email, letter }) => (
  <div className="header-user-icon">
    <ProfileIcon letter={letter}
      onMouseEnter={!show ? (e) => setShowTitle(true) : (e) => setShowTitle(false)}
      onMouseLeave={(e) => setShowTitle(false)}
      onClick={(e) => setShowTitle(false)}
      >
      <Title showTitle={showTitle} firstName={firstName} lastName={lastName} email={email}/>
    </ProfileIcon>
  </div>
);

const Title = ({ showTitle, firstName, lastName, email }) => (
  <div className="title fade-in" style={{ display: showTitle ? "block" : "none" }}>
    Google Account<br />
    {firstName} {lastName}<br />
    {email}
  </div>
);

const ProfileIcon = ({ letter }) => {
  return (
    <div className="user-icon-1">
      {letter}
    </div>
  );
}

