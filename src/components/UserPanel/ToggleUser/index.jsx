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
          <AccountButton 
            setShowTitle={setShowTitle} 
            showTitle={showTitle} 
            show={show} 
            letter={letter} 
            firstName={firstName} 
            lastName={lastName} 
            email={email}/>
        </button>
        { show ? <UserPanel/> : null }
      </OutsideClickHandler>
    </li>
  )
}

const AccountButton = ({ show, showTitle, setShowTitle, firstName, lastName, email, letter }) => (
  <div className="header-user-icon">
    <div
      className={!show ? 'user-icon-1-link' : 'user-icon-1-link-active active'}
      onMouseEnter={!show ? (e) => setShowTitle(true) : (e) => setShowTitle(false)}
      onMouseLeave={(e) => setShowTitle(false)}
      onClick={(e) => setShowTitle(false)}
      >
      <ProfileIcon letter={letter} />
      <Title showTitle={showTitle} firstName={firstName} lastName={lastName} email={email}/>
    </div>
  </div>
);

const Title = ({ showTitle, firstName, lastName, email }) => (
  <div className="user-panel-title fade-in" style={{ display: showTitle ? "block" : "none" }}>
    Google Account<br />
    <span className="user-panel-title-text">{firstName}&nbsp;{lastName}</span><br />
    <span className="user-panel-title-text">{email}</span>
  </div>
);

const ProfileIcon = ({ letter }) => {
  return (
    <div className="user-icon-1">
      {letter}
    </div>
  );
}

