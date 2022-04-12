import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './style.css';
import GoogleApps from './../../components/GoogleApps/index';

export function ToggleApps() {
  const [show, setShow] = useState(false)

    return (
      <>
        <li className="pl">
          <OutsideClickHandler onOutsideClick={() => {setShow(false);}}>
              <button onClick={() => setShow(!show)} alt="Google apps">
                { show ? <GAppsActive/> : <GAppsInactive/> }
              </button>
            { show ? <GoogleApps/> : null }
          </OutsideClickHandler>
        </li>
      </>
    )
}

function showTitle(e) {
  e.target.getAttribute('data-title').style.backgroundColor = 'red';
}

const GAppsInactive = () => (
  <div 
    onMouseEnter={showTitle}
    className="gapps-icon-link" alt="Google apps" data-title={`Google apps`}>
    <GApps/>
  </div>
);

const GAppsActive = () => (
  <div className="gapps-icon-link-active active" alt="Google apps">
    <GApps/>
  </div>
);

const GApps = () => (
  <svg className="gapps-icon" focusable="false" viewBox="0 0 24 24">
    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
  </svg>
);
