import OutsideClickHandler from 'react-outside-click-handler';
import { SettingsPanel } from '..';
import { useState } from 'react';
import { t } from 'i18next';

import './style.css';

export default function ToggleSettings() {
  const [show, setShow] = useState(false);

  return (
    <li>
      <OutsideClickHandler onOutsideClick={() => { setShow(false); }}>
        <button
          onClick={() => setShow(!show)}
          className="settings"
          alt="Settings"
        >
          {t('search.footer.settings')}
        </button>
        
        { show ? <SettingsPanel/> : null }
      </OutsideClickHandler>
    </li>
  )
}
