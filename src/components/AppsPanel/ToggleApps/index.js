import OutsideClickHandler from 'react-outside-click-handler';
import AppsPanel from '../../AppsPanel/index';
import { useState } from 'react';

import './style.css';

export default function ToggleApps() {
  const [show, setShow] = useState(false)
  const [showTitle, setShowTitle] = useState(false);

  return (
    <li className="pl">
      <OutsideClickHandler onOutsideClick={() => { setShow(false) }}>
        <button onClick={() => setShow(!show)} alt="Google apps">
          <GAppsButton setShowTitle={setShowTitle} showTitle={showTitle} show={show} />
        </button>
        { show ? <AppsPanel/> : null }
      </OutsideClickHandler>
    </li>
  )
}

const GAppsButton = ({ show, showTitle, setShowTitle }) => (
  <div
    className={!show ? 'gapps-icon-link' : 'gapps-icon-link-active active'}
    onMouseEnter={!show ? (e) => setShowTitle(true) : (e) => setShowTitle(false)}
    onMouseLeave={(e) => setShowTitle(false)}
    onClick={(e) => setShowTitle(false)}
  >
    <GApps/>
    <Title showTitle={showTitle} />
  </div>
);

const Title = ({ showTitle }) => (
  <div className="title fade-in" style={{ display: showTitle ? "block" : "none" }}>Google apps</div>
);

const GApps = () => (
  <svg className="gapps-icon" focusable="false" viewBox="0 0 24 24">
    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
  </svg>
);
