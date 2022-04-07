import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './style.css';
import { t } from 'i18next';
import SettingsPanel from './../../components/SettingsPanel/index';

export function TogglePanel() {
  const [show, setShow] = useState(false)

    return ( <>
      <li>
        <OutsideClickHandler onOutsideClick={() => {setShow(false);}}>
          <button onClick={() => setShow(!show)} className="settings" alt="Settings">
            {t('settings')}
          </button>
          {
          show? <SettingsPanel/> : null
          }
        </OutsideClickHandler>
      </li>
    </> )
}