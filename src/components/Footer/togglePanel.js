import React, { useState } from 'react';
import './style.css';
import { t } from 'i18next';
import SettingsPanel from './../../components/SettingsPanel/index';

export function TogglePanel() {
  const [show, setShow] = useState(true)

    return ( <>
      {
        show?<SettingsPanel style={{zIndex:5}} /> : null
      }
      <button onClick={() => setShow(!show)}><Settings /></button>
    </> )
}

const Settings = () => (
    <li>
        <button class="settings" alt="Settings">
            {t('settings')}
        </button>
    </li>
);