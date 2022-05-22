import { NavLink } from 'react-router-dom';
import { t } from 'i18next';

import './style.css';

export default function AccountNavBar() {
  return (
    <section className="navbar-wrap">
      <Home />
      <PersonalInfo />
      <DataPrivacy />
    </section>
  )
}

const Home = () => (
  <div className="navbar-link-padding">
    <NavLink
      end to="/myaccount/" 
      className={({isActive}) => 
        (isActive ? "navbar-active no-deco" : "no-deco")
      }
    >
      <div className="navbar-links">
        {t('home')}
      </div>    
    </NavLink>
  </div>
)

const PersonalInfo = () => (
  <div className="navbar-link-padding">
    <NavLink
      end to="/myaccount/personalinfo/" 
      className={({isActive}) => 
        (isActive ? "navbar-active no-deco" : "no-deco")
      }
    >
      <div className="navbar-links">
        {t('personal_info')}
      </div>
    </NavLink>
  </div>
)

const DataPrivacy = () => (
  <div className="navbar-link-padding">
    <NavLink
      end to="/myaccount/data-and-personalization/"
      className={({isActive}) => 
        (isActive ? "navbar-active no-deco" : "no-deco")
      }
    >
      <div className="navbar-links">
        {t('data_and_privacy')}
      </div>
    </NavLink>
  </div>
)
