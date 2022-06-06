import HeaderIcons from '../../../components/Header';
import { t } from 'i18next';

import './style.css';

export default function Header() {
  return (
    <header>
      <ul>
        <Gmail />
        <Images />
        <HeaderIcons />
      </ul>
    </header>
  )
}

const Gmail = () => (
  <li className="pl">
    <a href="https://mail.google.com/mail/">
      {t('gmail')}
    </a>
  </li>
);

const Images = () => (
  <li className="pl">
    <a href="https://images.google.com/">
      {t('images')}
    </a>
  </li>
);

