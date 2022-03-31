import React, { useState } from 'react';
import './style.css';
import { t } from 'i18next';
import SettingsPanel from './../../components/SettingsPanel/index';

export function TogglePanel() {
  const [show, setShow] = useState(true)

    return ( <>
      {
        show? null : <SettingsPanel style={{zIndex:5}} />
      }
      <li>
        <button onClick={() => setShow(!show)} className="settings" alt="Settings">
            {t('settings')}
        </button>
      </li>
    </> )
}