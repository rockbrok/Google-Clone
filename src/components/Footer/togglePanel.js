import React, { useState } from 'react';
import './style.css';
import { t } from 'i18next';
import SettingsPanel from './../../components/SettingsPanel/index';

export function TogglePanel() {
  const [show, setShow] = useState(true)

    return ( <>
      <li>
        <button onClick={() => setShow(!show)} className="settings" alt="Settings">
          {t('settings')}
        </button>
        {
        show? null : <SettingsPanel/>
        }
      </li>
    </> )
}