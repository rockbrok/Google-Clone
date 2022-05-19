import AccountFooter from '../AccountFooter';
import { UserCircleIcon } from '@heroicons/react/outline';
import { IdentificationIcon } from '@heroicons/react/outline';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function AccountSideBar() {
  return (
    <div className="account-sidebar-wrap">
    <div className="account-sidebar"> 
      <Home />
      <PersonalInfo />
      <DataPrivacy />
      <div className="sidebar-divider" />
      <About />
      <AccountFooter />
    </div>
    </div>
  )
}

const Home = () => (
  <NavLink
    end to="/myaccount/" 
    className={({isActive}) => 
      (isActive ? "sidebar-item-active no-deco" : "sidebar-item no-deco")
    }
  >
    <UserCircleIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Home
      </div>
  </NavLink>
)

const PersonalInfo = () => (
  <NavLink
    end to="/myaccount/personalinfo/" 
    className={({isActive}) => 
      (isActive ? "sidebar-item-active no-deco" : "sidebar-item no-deco")
    }
  >
    <IdentificationIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Personal info
      </div>
  </NavLink>
)

const DataPrivacy = () => (
  <NavLink
    end to="/myaccount/data-and-personalization/"
    className={({isActive}) => 
      (isActive ? "sidebar-item-active no-deco" : "sidebar-item no-deco")
    }
  >
    <ShieldCheckIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Data & Privacy
      </div>
  </NavLink>
)

const About = () => (
  <a href="https://www.google.com/account/about/" target="_blank" className="no-deco">
    <div className="sidebar-item">
      <InformationCircleIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        About
      </div>
    </div>
  </a>
)