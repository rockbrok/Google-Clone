import AccountFooter from "../AccountFooter"
import { UserCircleIcon } from "@heroicons/react/outline"
import { IdentificationIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"

import './style.css';

export default function AccountSideBar() {
  return (
    <div className="account-sidebar"> 
      <Home />
      <PersonalInfo />
      <DataPrivacy />
      <div className="sidebar-divider" />
      <About />

      <AccountFooter />
    </div>
  )
}

const Home = () => (
  <Link to="/myaccount/" className="no-deco">
    <div className="sidebar-item">
      <UserCircleIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Home
      </div>
    </div>
  </Link>
)

const PersonalInfo = () => (
  <Link to="/myaccount/personalinfo/" className="no-deco">
    <div className="sidebar-item">
      <IdentificationIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Personal info
      </div>
    </div>
  </Link>
)

const DataPrivacy = () => (
  <Link to="/myaccount/data-and-personalization/" className="no-deco">
    <div className="sidebar-item">
      <ShieldCheckIcon className="sidebar-icon"/>
      <div className="sidebar-links">
        Data & Privacy
      </div>
    </div>
  </Link>
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